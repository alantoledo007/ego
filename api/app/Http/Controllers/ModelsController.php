<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model;

class ModelsController extends Controller
{
    public function index(Request $request){
        $orderBy = $request->orderBy;
        $orderDirection = $request->orderDirection;
        $vehicleId = $request->vehicleId;
        $orderBy = $orderBy == 'year' || $orderBy == 'price' ? $orderBy : 'id';
        $orderDirection = $orderDirection == 'asc' || $orderDirection == 'desc' ? $orderDirection : 'asc';

        $models = null;
        if($vehicleId){
            $models = Model::where('vehicle_id',is_numeric($vehicleId) ? $vehicleId : 'nn');
        }
        $models = $models != null ? $models->orderBy($orderBy,$orderDirection) : Model::orderBy($orderBy,$orderDirection);
        $models = $models->get()->toArray();


        return response()->json([
            'type' => 'models',
            'data' => $models
        ],200);
    }

    public function read($id){
        $model = Model::findOrFail($id);
        $model = collect($model->toArray())->except(['created_at','updated_at']);
        return response()->json([
            'type' => 'models',
            'data' => $model
        ]);
    }
}
