<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Resource;

class ResourceController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'new_links' => 'required|string',
            'blogs' => 'required|string',
        ]);

        $resource = Resource::create([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'new_links' => $request->input('new_links'),
            'blogs' => $request->input('blogs'),
        ]);

        return response()->json(['resource' => $resource]);
    }

    public function index()
    {
        $resources = Resource::all();

        return response()->json(['resources' => $resources]);
    }
}
