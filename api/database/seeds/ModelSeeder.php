<?php

use Illuminate\Database\Seeder;
use App\Model;

class ModelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*
            En esta sección soy consciente de que puedo utilizar
            factory para agilizar las inserciones. Pero para una mejor experiencia
            (en el frontend) decidí agregar los modelos manualmente.
        */


        //lorem html.
        $description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed omnis praesentium adipisci consequatur molestias? Optio quam delectus maiores vitae aliquid. Minus dolorem excepturi, voluptate alias nobis omnis laudantium accusamus magni.';
        $base_uri = config('app.url').'/img/models/';

        Model::create([//id 1
            'model' => 'Etios',
            'year' => 2019,
            'price' => 815900,
            'version' => 'Hatchback',
            'title' => 'Tu primer Toyota, mejor que nunca',
            'short_description' => $description,
            'card_image' => $base_uri.'etios.png',
            'main_image' => $base_uri.'etios@3x.png',
            'vehicle_id' => 1
        ]);

        Model::create([//id 2
            'model' => 'Yaris',
            'year' => 2020,
            'price' => 1038900,
            'version' => 'Hatchback',
            'title' => 'Despierta nuevas sensaciones',
            'short_description' => $description,
            'card_image' => $base_uri.'1.png',
            'main_image' => $base_uri.'1@3x.png',
            'vehicle_id' => 1
        ]);

        Model::create([//id 3
            'model' => 'Corolla',
            'year' => 2018,
            'price' => 1430700,
            'version' => '',
            'title' => 'Nuevo Corolla 2020, siempre adelante',
            'short_description' => $description,
            'card_image' => $base_uri.'1_2.png',
            'main_image' => $base_uri.'1_2@3x.png',
            'vehicle_id' => 1
        ]);

        Model::create([//id 4
            'model' => 'Prius',
            'year' => 2019,
            'price' => 2882000,
            'version' => 'Hybrid',
            'title' => 'La evolución de los vehículos híbridos',
            'short_description' => $description,
            'card_image' => $base_uri.'prius-1.png',
            'main_image' => $base_uri.'prius-1@3x.png',
            'vehicle_id' => 1
        ]);

        Model::create([//id 5
            'model' => 'Camry',
            'year' => 2018,
            'price' => 3753200,
            'version' => '',
            'title' => 'Una presencia que se destaca',
            'short_description' => $description,
            'card_image' => $base_uri.'camry.png',
            'main_image' => $base_uri.'camry@3x.png',
            'vehicle_id' => 1
        ]);

        Model::create([//id 6
            'model' => 'Toyota 86',
            'year' => 2019,
            'price' => 3812100,
            'version' => '',
            'title' => 'Pasión a primera vista',
            'short_description' => $description,
            'card_image' => $base_uri.'toyota-86.png',
            'main_image' => $base_uri.'toyota-86@3x.png',
            'vehicle_id' => 1
        ]);

        Model::create([//id 7
            'model' => 'Innova',
            'year' => 2020,
            'price' => 2596400,
            'version' => '',
            'title' => 'Familiarizate con la nueva Innova',
            'short_description' => $description,
            'card_image' => $base_uri.'innova.png',
            'main_image' => $base_uri.'innova@3x.png',
            'vehicle_id' => 1
        ]);

        Model::create([//id 8
            'model' => 'SW4',
            'year' => 2019,
            'price' => 3236200,
            'version' => '',
            'title' => 'Tu primer Toyota, mejor que nunca',
            'short_description' => $description,
            'card_image' => $base_uri.'sw-4.png',
            'main_image' => $base_uri.'sw-4@3x.png',
            'vehicle_id' => 3
        ]);

        Model::create([//id 9
            'model' => 'RAV4',
            'year' => 2019,
            'price' => 3170200,
            'version' => '',
            'title' => 'Más tecnología, más experiencias',
            'short_description' => $description,
            'card_image' => $base_uri.'rav-4.png',
            'main_image' => $base_uri.'rav-4@3x.png',
            'vehicle_id' => 3
        ]);

        Model::create([//id 10
            'model' => 'Land Cruiser Prado',
            'year' => 2017,
            'price' => 815900,
            'version' => '',
            'title' => 'La leyenda continúa, La aventura recién empieza',
            'short_description' => $description,
            'card_image' => $base_uri.'prado-gray-metallic-1-g-3-01.png',
            'main_image' => $base_uri.'prado-gray-metallic-1-g-3-01@3x.png',
            'vehicle_id' => 3
        ]);

        Model::create([//id 11
            'model' => 'Land Cruiser 200',
            'year' => 2018,
            'price' => 7873100,
            'version' => '',
            'title' => 'La personificación de la fuerza y el lujo',
            'short_description' => $description,
            'card_image' => $base_uri.'1_6.png',
            'main_image' => $base_uri.'1_6@3x.png',
            'vehicle_id' => 3
        ]);

        Model::create([//id 12
            'model' => 'Hilux',
            'year' => 2020,
            'price' => 1507000,
            'version' => 'DR/SR',
            'title' => 'Preparada para cualquier desafío',
            'short_description' => $description,
            'card_image' => $base_uri.'hilux.png',
            'main_image' => $base_uri.'hilux@3x.png',
            'vehicle_id' => 2
        ]);
    }
}
