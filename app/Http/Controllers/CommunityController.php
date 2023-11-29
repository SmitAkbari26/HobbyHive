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

    public function index()
    {
        $communities = Community::all();
        return response()->json(['communities' => $communities]);
    }

    public function approve($id)
    {
        $community = Community::find($id);

        if (!$community) {
            return response()->json(['error' => 'Community not found'], 404);
        }

        // Your approval logic here
        $community->update(['status' => 'approved']);

        return response()->json(['message' => 'Community approved successfully']);
    }

    public function reject($id)
    {
        $community = Community::find($id);

        if (!$community) {
            return response()->json(['error' => 'Community not found'], 404);
        }

        // Your rejection logic here
        $community->update(['status' => 'rejected']);

        return response()->json(['message' => 'Community rejected successfully']);
    }
}
