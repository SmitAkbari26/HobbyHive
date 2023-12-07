<?php

namespace App\Http\Controllers;

use App\Events\NewMessage;
use App\Models\Chat;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function index()
    {
        return Chat::latest()->get();
    }

    public function store(Request $request)
    {
        $message = Chat::create([
            'username' => $request->username,
            'message' => $request->message,
        ]);

        broadcast(new NewMessage($message));

        return response()->json($message);
    }
}
