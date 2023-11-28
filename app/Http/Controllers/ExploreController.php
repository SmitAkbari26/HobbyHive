<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Explore;

class ExploreController extends Controller
{
    public function insertExploreData()
    {
        $data = [
            [
                'title' => "Art & Creativity",
                'description' => "Unleash your creativity with various art forms.",
                'image' => "../public/art.svg",
            ],
        ];

        foreach ($data as $item) {
            Explore::create($item);
        }

        return response()->json(['message' => 'Data inserted successfully']);
    }
}
