<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateModelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('models', function (Blueprint $table) {
            $table->id();
            $table->string('model',30);
            $table->integer('year');
            $table->integer('price'); //se utiliza el tipo entero porque no veo necesario la utilización de numeros flotantes.
            $table->string('version',20);
            $table->string('title');
            $table->text('short_description');

            //se utilizan campos de tipo texto y que algunos links de imágenes
            // son extremadamente largos.
            $table->text('card_image'); //link
            $table->text('main_image'); //link

            $table->foreignId('vehicle_id')
                  ->constrained()
                  ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('models');
    }
}
