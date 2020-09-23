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
     * @return void
     */
    public function testStatusCodeTest()
    {
        $response = $this->get('/api/models/1');
        $response->assertStatus(200);

        $response = $this->get('/api/models/a');
        $response->assertStatus(404);
    }
    
    public function testStructureTest()
    {
        $response = $this->json('GET','/api/models/1');

        $response->assertJsonStructure([
               'type',
               'data' => [
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
               ])
        ->assertJson([
            'type' => 'models'
        ],$strict = false);
    }
}
