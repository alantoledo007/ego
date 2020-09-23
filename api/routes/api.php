<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('models')->group(function(){
    Route::get('/','ModelsController@index');
    Route::get('{id}','ModelsController@read');
});

Route::get('details/model/{id}','DetailsController@model');

Route::get('vehicles','VehiclesController@index');
