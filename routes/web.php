<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ExploreController;
use App\Http\Controllers\ResourceController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});


Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
Route::get('/insert-explore-data', [ExploreController::class, 'insertExploreData']);
Route::get('/create-resource', [ResourceController::class, 'insertResourceData']);


require __DIR__.'/auth.php';
