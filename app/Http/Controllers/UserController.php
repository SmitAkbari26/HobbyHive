<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return response()->json(['users' => $users]);
    }

    public function show($id)
    {
        $user = User::find($id);
        return response()->json($user);
    }
}
