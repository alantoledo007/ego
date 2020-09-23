<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class getVehiclesTest extends TestCase
{
    /**
     * A basic feature test example.
     * @test
     * @return void
     */
    public function StatusCode()
    {
        $response = $this->get('/api/vehicles');

        $response->assertStatus(200);
    }


    public function Structure()
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
        ]);

        $response->assertJson([
            'type' => 'vehicles'
        ],$strict = false);
    }
}
