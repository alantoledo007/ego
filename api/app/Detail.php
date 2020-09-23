<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Detail extends Model
{
    protected $table = 'details';
    protected $fillable = [
        'detail', 'image', 'description',
        'is_main'
    ];

    public function model()
    {
        return $this->belongsTo('App\Model');
    }
}
