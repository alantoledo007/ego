<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class getModelTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @test
     * @return void
     */
    public function StatusCode()
    {
        $response = $this->get('/api/models/1');
        $response->assertStatus(200);

        $response = $this->get('/api/models/a');
        $response->assertStatus(404);
    }
    
    public function Structure()
    {
        $response = $this->json('GET','/api/models/1');

        $response->assertJsonStructure([
               'type',
               'data' => [
                    [
                        'id',
                        'model',
                        'year',
                        'price',
                        'version',
                        'title',
                        'short_description',
                        'card_image',
                        'main_image',
                        'vehicle_id'
                    ]
               ]
        ]);

        $response->assertJson([
            'type' => 'models'
        ],$strict = false);
    }
}
