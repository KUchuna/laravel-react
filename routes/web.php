<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about', function () {
    return Inertia::render('AboutPage/About');
});

Route::get('/posts', [PostController::class, 'index']);

Route::post('/posts', [PostController::class, 'store']);

Route::get('/posts/{post}', [PostController::class, 'show']);