<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model;

class ModelsController extends Controller
{
    public function index(){
        $models = Model::all();

        return response()->json([
            'type' => 'models',
            'data' => []
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
