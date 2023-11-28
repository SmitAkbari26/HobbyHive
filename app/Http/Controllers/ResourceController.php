<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Resource;

class ResourceController extends Controller
{
    public function insertResourceData()
    {
        Resource::create([
            'title' => 'Sports & Fitness Resources',
            'description' => 'Discover fitness routines, workout plans, and sports-related articles and videos. Stay fit and healthy while pursuing your favorite sports and activities.',
            'new_links' => ['Link 1', 'Link 2'],
            'blogs' => ['Blog 1', 'Blog 2'],
        ]);

        return response()->json(['message' => 'Resource created successfully']);
    }
}
