<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Explore;

class ExploreController extends Controller
{
    public function addExplore(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'image' => 'required|nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'subcategories' => 'string',
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images/explores', 'public');
            $data['image'] = $imagePath;
        }

        Explore::create($data);

        return response()->json(['message' => 'Record added successfully']);
    }

    public function index()
    {
        $exploreData = Explore::all();
        return response()->json(['exploreData' => $exploreData]);
    }

    public function show($id)
    {
        $exploreItem = Explore::find($id);
        return response()->json($exploreItem);
    }
}
