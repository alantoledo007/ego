<?php

namespace App;

use Illuminate\Database\Eloquent\Model as LaravelModel;

class Model extends LaravelModel
{
    protected $table = 'models';
    protected $fillable = [
        'model', 'version', 'title',
        'short_description',
        'card_image', 'main_image'
    ];

    public function details()
    {
        return $this->hasMany('App\Detail');
    }

    public function vehicle()
    {
        return $this->belongsTo('App\Vehicle');
    }
}
