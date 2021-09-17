<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClientResource;
use App\Http\Resources\ProjectResource;
use App\Models\Client;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientProjectController extends \Inertia\Controller
{
    /**
     * Display a listing of the resource.
     * GET: client/{client}/project/{project}
     * @return \Inertia\Response
     */
    public function index(Client $client, Project $project)
    {
        $data = [
            'client' => ClientResource::collection([$client])->jsonSerialize(),
            'project' => ProjectResource::collection([$project])->first()->jsonSerialize()

        ];

        return Inertia::render('Admin/ClientProject/index', $data);
    }
}


