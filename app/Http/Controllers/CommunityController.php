<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Community;

class CommunityController extends Controller
{
    public function create(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'members' => 'integer|nullable',
            'popularity' => 'numeric|nullable',
            'username' => 'string|max:255',
        ]);

        $community = Community::create($data);

        return response()->json(['message' => 'Community created successfully', 'community' => $community], 201);
    }
}
