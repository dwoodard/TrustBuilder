<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ClientController;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;


//
Route::group(['as'=>'admin.','middleware' => ['web','role:admin']], function(){

    Route::get('/', function (){
        return Redirect::route('admin.dashboard');
    })->name('index');

    //dashboard
    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard');

    //users
    Route::resource('users', 'Admin\UserController');
    /*
    GET    admin/users .................. admin.users.index
    POST   admin/users .................. admin.users.store
    GET    admin/users/create ........... admin.users.create
    PUT    admin/users/{user} ........... admin.users.update
    DELETE admin/users/{user} ........... admin.users.destroy
    GET    admin/users/{user} ........... admin.users.show
    GET    admin/users/{user}/edit ...... admin.users.edit
    */

    // Clients
    Route::resource('clients', 'ClientController');
    Route::resource('invoices', 'InvoiceController');
    Route::resource('projects', 'ProjectController');
    Route::resource('documents', 'DocumentController');


    //ClientProject
    Route::get('client/{client}/project/{project}', [\App\Http\Controllers\ClientProjectController::class, 'index'])->name('client.project.index');





    //pages
    Route::get('/pages', [AdminController::class, 'pages'])->name('pages');
    Route::get('/pages/{slug}', [AdminController::class, 'pagesEdit'])->name('pages');
    Route::post('/pages', [AdminController::class, 'pagesCreate'])->name('page.create');
    Route::post('/pages/{slug}', [AdminController::class, 'pagesSave'])->name('page.save');
    Route::delete('/pages', [AdminController::class, 'pagesDelete'])->name('page.delete');

    //settings
    Route::get('/settings', [AdminController::class, 'settings'])->name('settings');

});


