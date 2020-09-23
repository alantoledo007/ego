<?php

use Illuminate\Database\Seeder;
use App\Vehicle;

class VehicleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Vehicle::create([//id 1
            'name' => 'Autos'
        ]);

        Vehicle::create([//id 2
            'name' => 'Pickups y Comerciales'
        ]);

        Vehicle::create([//id 3
            'name' => 'SUVs y Crossovers'
        ]);
    }
}