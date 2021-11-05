<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ClientProjectController;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;


//
Route::group(['as'=>'admin.','middleware' => ['web','role:admin']], function(){

        Route::get('/', function (){return Redirect::route('admin.dashboard');})->name('index');

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


    //ClientProject
    Route::get('client/{client}/project/{project}', [ClientProjectController::class, 'index'])->name('client.project.index');
    Route::get('client/{client}/project/{project}/print', [ClientProjectController::class, 'print'])->name('client.project.print');
    Route::get('client/{client}/project/create', [ClientProjectController::class, 'create'])->name('client.project.create');
    Route::post('client/{client}/project', [ClientProjectController::class, 'store'])->name('client.project.store');
    Route::post('client/{client}/project/{project}/project_data/{node}', [ClientProjectController::class, 'projectData'])->name('client.project.project_data');
    Route::get('client/{client}/project/{project}/project_data/{node}', [ClientProjectController::class, 'projectData'])->name('client.project.project_data');

    //pages
    Route::get('/pages', [AdminController::class, 'pages'])->name('pages');
    Route::get('/pages/{slug}', [AdminController::class, 'pagesEdit'])->name('pages');
    Route::post('/pages', [AdminController::class, 'pagesCreate'])->name('page.create');
    Route::post('/pages/{slug}', [AdminController::class, 'pagesSave'])->name('page.save');
    Route::delete('/pages', [AdminController::class, 'pagesDelete'])->name('page.delete');

    //settings
    Route::get('/settings', [AdminController::class, 'settings'])->name('settings');

});
