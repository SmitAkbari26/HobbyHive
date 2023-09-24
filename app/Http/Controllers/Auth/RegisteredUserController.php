<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): Response
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:' . User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            // 'password' => [
            //     'required',
            //     'confirmed',
            //     'string',
            //     'min:8',              // Minimum 8 characters
            //     'regex:/^(?=.*[A-Z])/',  // At least one uppercase letter
            //     'regex:/^(?=.*[a-z])/',  // At least one lowercase letter
            //     'regex:/^(?=.*\d)/',    // At least one number
            //     'regex:/^(?=.*[@$!%*?&])/',  // At least one special character
            // ],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        // Auth::login($user);
        auth()->login($user);

        return response()->noContent();
    }
}
