<?php

use Illuminate\Database\Seeder;
use App\Detail;
use App\Model;
class DetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $models = Model::all();

        $description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed omnis praesentium adipisci consequatur molestias? Optio quam delectus maiores vitae aliquid. Minus dolorem excepturi, voluptate alias nobis omnis laudantium accusamus magni.';
        $base_uri = config('app.url').'/img/models/details/';

        foreach ($models as $item) {


            Detail::create([
                'detail' => 'Nuevos motores Toyota',
                'image' => $base_uri.'image_4.png',
                'description' => 'Dos alternativas diesel con turbo de geometría variable, 1GD (2.8 L) y 2GD (2.4 L).',
                'model_id' => $item->id
            ]);

            Detail::create([
                'detail' => 'Suspensión mejorada',
                'image' => $base_uri.'image_3.png',
                'description' => 'Mayor confort de marcha, estabilidad y capacidad Off Road.',
                'model_id' => $item->id
            ]);

            Detail::create([
                'detail' => 'Transmisión automática',
                'image' => $base_uri.'image_2.png',
                'description' => 'Posibilidad de elección de caja automática de  manejo.',
                'model_id' => $item->id
            ]);

            Detail::create([
                'detail' => 'Transmisión manual',
                'image' => $base_uri.'image.png',
                'description' => 'Posibilidad de elección de caja automática de  manejo.',
                'model_id' => $item->id
            ]);

            Detail::create([
                'detail' => 'Título de 20 px',
                'image' => $base_uri.'3@3x.png',
                'description' => $description,
                'is_main' => true,
                'model_id' => $item->id
            ]);

            Detail::create([
                'detail' => 'Título de 20 px',
                'image' => $base_uri.'1@3x.png',
                'description' => $description,
                'is_main' => true,
                'model_id' => $item->id
            ]);


        }
    }
}
