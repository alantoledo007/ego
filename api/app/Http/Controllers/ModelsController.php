<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model;

class ModelsController extends Controller
{
    public function index(Request $request){
        $order_by = $request->order_by;
        $order_direction = $request->order_direction;
        $vehicle_id = $request->vehicle_id;
        $order_by = $order_by == 'year' || $order_by == 'price' ? $order_by : 'id';
        $order_direction = $order_direction == 'asc' || $order_direction == 'desc' ? $order_direction : 'asc';

        $models = null;
        if($vehicle_id){
            $models = Model::where('vehicle_id',is_numeric($vehicle_id) ? $vehicle_id : 'nn');
        }
        $models = $models != null ? $models->orderBy($order_by,$order_direction) : Model::orderBy($order_by,$order_direction);
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
