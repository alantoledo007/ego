<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Vehicle;

class VehiclesController extends Controller
{
    public function index(){
        $vehicles = Vehicle::orderBy('name')->get();
        return response()->json([
            'type' => 'vehicles',
            'data' => $vehicles->toArray()
        ]);
    }
}
