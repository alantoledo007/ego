<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class getAllModelsTest extends TestCase
{
    /**
     * A basic feature test example.
     * @test
     * @return void
     */

    public function StatusCode()
    {
        $response = $this->get('/api/models');

        $response->assertStatus(200);
    }
    
    public function Structure()
    {
        $response = $this->json('GET','/api/models');

        $response->assertJsonStructure([
               'type',
               'data' => [
                    '*' => [
                        'id',
                        'model',
                        'year',
                        'price',
                        'card_image',
                        'vehicle_id'
                    ]
               ]
        ]);

        $response->assertJson([
            'type' => 'models'
        ],$strict = false);
    }
}
