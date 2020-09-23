<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model;

class DetailsController extends Controller
{
    public function model($id){
        $model = Model::findOrFail($id);
        $details = $model->details;
        return response()->json([
            'type' => 'details',
            'data' => $details->toArray()
        ]);
    }
}
