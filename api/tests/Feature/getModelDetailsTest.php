<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class getModelDetailsTest extends TestCase
{
    /**
     * A basic feature test example.
     * 
     * @return void
     */
    public function testStatusCode()
    {
        $response = $this->get('/api/details/model/1');
        $response->assertStatus(200);

        $response = $this->get('/api/details/model/a');
        $response->assertStatus(404);
    }


    public function testStructure()
    {
        $response = $this->json('GET','/api/details/model/1');
        
        $response->assertJsonStructure([
               'type',
               'data' => [
                    '*' => [
                        'id',
                        'detail',
                        'image',
                        'description',
                        'is_main',
                        'model_id'
                    ]
               ]
        ])
        ->assertJson([
            'type' => 'details'
        ],$strict = false);
    }
}
