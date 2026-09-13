<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title', 200);
            $table->string('slug', 220)->unique();
            $table->string('category', 100);
            $table->string('location', 150)->nullable();
            $table->string('client', 150)->nullable();
            $table->string('capacity', 50)->nullable();
            $table->integer('year')->nullable();
            $table->string('status', 50)->default('Selesai');
            $table->boolean('is_featured')->default(false);
            $table->string('cover_image', 255)->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
