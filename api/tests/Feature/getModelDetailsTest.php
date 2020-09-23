<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class getModelDetailsTest extends TestCase
{
    /**
     * A basic feature test example.
     * @test
     * @return void
     */
    public function StatusCode()
    {
        $response = $this->get('/api/details/model/1');
        $response->assertStatus(200);

        $response = $this->get('/api/details/model/a');
        $response->assertStatus(404);
    }


    public function Structure()
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
        ]);

        $response->assertJson([
            'type' => 'details'
        ],$strict = false);
    }
}
