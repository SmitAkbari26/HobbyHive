<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Community extends Model
{
    use HasFactory;

    protected $fillable = ['username', 'name', 'description', 'members', 'popularity'];

    protected $casts = [
        'members' => 'integer',
        'rating' => 'float',
    ];
}
