<?php

namespace App\Http\Controllers\Admin;


use App\Models\Client;
use Inertia\Inertia;

class BuilderController extends \Inertia\Controller
{

    public function index(){
        $data = [
            'clients' => Client::all()
        ];
        return Inertia::render('Admin/Builder', $data);
    }
}
