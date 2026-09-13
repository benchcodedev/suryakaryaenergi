<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'category',
        'location',
        'client',
        'capacity',
        'year',
        'status',
        'is_featured',
        'cover_image',
        'description',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'year' => 'integer',
    ];

    public function images(): HasMany
    {
        return $this->hasMany(ProjectImage::class)->orderBy('sort_order', 'asc');
    }
}
