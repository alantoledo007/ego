<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class getVehiclesTest extends TestCase
{
    /**
     * A basic feature test example.
     * 
     * @return void
     */
    public function testStatusCode()
    {
        $response = $this->get('/api/vehicles');

        $response->assertStatus(200);
    }


    public function testStructure()
    {
        $response = $this->json('GET','/api/vehicles');

        $response->assertJsonStructure([
               'type',
               'data' => [
                    '*' => [
                        'id',
                        'name'
                    ]
               ]
        ])->assertJson([
            'type' => 'vehicles'
        ],$strict = false);
    }
}
