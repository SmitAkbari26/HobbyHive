<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
    use HasFactory;

    protected $table = 'resources';

    protected $fillable = ['title', 'description', 'new_links', 'blogs'];

    // protected $casts = [
    //     'new_links' => 'json',
    //     'blogs' => 'json',
    // ];
}
