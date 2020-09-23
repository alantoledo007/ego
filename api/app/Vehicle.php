<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    protected $table = 'vehicles';
    protected $fillable = [
        'name'
    ];

    public function models()
    {
        return $this->hasMany('App\Model');
    }
}
