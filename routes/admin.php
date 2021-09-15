<?php

use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;


//
Route::group(['as'=>'admin.','middleware' => ['web','role:admin']], function(){

    Route::get('/', [\App\Http\Controllers\AdminController::class, 'index'])->name('index');

    //dashboard
    Route::get('/dashboard', [\App\Http\Controllers\AdminController::class, 'dashboard'])->name('dashboard');

    //users
    Route::get('/users', [\App\Http\Controllers\AdminController::class, 'users'])->name('users');
    Route::get('/users/{user}', [\App\Http\Controllers\AdminController::class, 'usersEdit'])->name('users.edit');
    Route::post('/users', [\App\Http\Controllers\AdminController::class, 'usersCreate'])->name('users.create');
    Route::put('/users', [\App\Http\Controllers\AdminController::class, 'usersSave'])->name('users.save');
    Route::delete('/users', [\App\Http\Controllers\AdminController::class, 'usersDelete'])->name('users.delete');

    //Clients
    Route::get('/clients', [\App\Http\Controllers\ClientController::class, 'index'])->name('clients');
    Route::post('/clients', [\App\Http\Controllers\ClientController::class, 'store'])->name('clients.create');

    //pages
    Route::get('/pages', [\App\Http\Controllers\AdminController::class, 'pages'])->name('pages');
    Route::get('/pages/{slug}', [\App\Http\Controllers\AdminController::class, 'pagesEdit'])->name('pages');
    Route::post('/pages', [\App\Http\Controllers\AdminController::class, 'pagesCreate'])->name('page.create');
    Route::post('/pages/{slug}', [\App\Http\Controllers\AdminController::class, 'pagesSave'])->name('page.save');
    Route::delete('/pages', [\App\Http\Controllers\AdminController::class, 'pagesDelete'])->name('page.delete');


    //settings
    Route::get('/settings', [\App\Http\Controllers\AdminController::class, 'settings'])->name('settings');

});


