<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
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

Route::delete('/posts/{post}', [PostController::class,'destroy']);

Route::put('/posts/{post}', [PostController::class,'update']);

Route::get('/register', function () {
    return Inertia::render('RegisterPage/Register');
});

Route::post('/register', [UserController::class, 'store']);

Route::get('/login', function () {
    return Inertia::render('LoginPage/Login');
});

Route::post('/login', [LoginController::class, 'authenticate']);

Route::post('/logout', []);