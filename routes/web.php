<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about', function () {
    return Inertia::render('AboutPage/About');
});

Route::get('/posts', [PostController::class, 'index'])->middleware('auth');

Route::post('/posts', [PostController::class, 'store'])->middleware('auth');;

Route::get('/posts/{post}', [PostController::class, 'show'])->middleware('auth');;

Route::delete('/posts/{post}', [PostController::class,'destroy'])->middleware('auth');;

Route::put('/posts/{post}', [PostController::class,'update'])->middleware('auth');;

Route::get('/register', function () {
    return Inertia::render('RegisterPage/Register');
});

Route::post('/register', [UserController::class, 'store']);

Route::get('/login', function () {
    return Inertia::render('LoginPage/Login');
})->name('login');

Route::post('/login', [LoginController::class, 'authenticate']);

Route::post('/logout', function () {
    Auth::logout();
    request()->session()->invalidate();
    request()->session()->regenerateToken();
    return redirect('/');
});

Route::get('/users', [UserController::class, 'index'])->middleware('auth');