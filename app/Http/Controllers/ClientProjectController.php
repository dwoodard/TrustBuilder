<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClientResource;
use App\Http\Resources\ProjectResource;
use App\Models\Client;
use App\Models\Project;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ClientProjectController extends \Inertia\Controller
{
    /**
     * Display a listing of the resource.
     * GET: admin/client/{client}/project/{project}
     * @param Client $client
     * @param Project $project
     * @return Response
     */
    public function index(Client $client, Project $project): Response
    {


        $data = [
            'client' => ClientResource::collection([$client])->first()->jsonSerialize(),
            'project' => ProjectResource::collection([$project])->first()->jsonSerialize(),
            'templates' => $this->getProjectTemplates($project),
        ];

        return Inertia::render('Admin/ClientProject/index', $data);
    }

    /**
     * Show the form for creating a new resource.
     * GET: admin/client/{client}/project/{project}/create
     * @param Request $request
     * @param Client $client
     * @return Response
     */
    public function create(Request $request, Client $client): Response
    {
        $data = [
            'client' => ClientResource::collection([$client])->jsonSerialize(),

        ];

        return Inertia::render('Admin/ClientProject/create', $data);
    }

    /**
     * Store a newly created resource in storage.
     * POST: admin/client/{client}/project/{project}
     * @param Request $request
     * @param Client $client
     * @return RedirectResponse
     */
    public function store(Request $request, Client $client): RedirectResponse
    {
        $request->validate([
            'name' => ['required'],
            'type' => ['required']
        ]);

        $project = new Project();
//        $project['name'] = $request->name;
        $project['type'] = $request->type;
        $project['user_id'] = Auth::user()->getAuthIdentifier();
        $project['client_id'] = $client->id;
        $project['project_data'] = [
            'name' => $request->name,
        ];


        $data = [
            'project' => Project::create($project->toArray())
        ];

        return Redirect::back()->with($data);
    }

    /**
     * Preview for Print
     * GET: admin/client/{client}/project/{project}/print
     * @param Client $client
     * @param Project $project
     * @return Response
     */
    public function print(Client $client, Project $project): Response
    {

        $data = [
            'client' => ClientResource::collection([$client])->first()->jsonSerialize(),
            'project' => ProjectResource::collection([$project])->first()->jsonSerialize(),
            'templates' => $this->getProjectTemplates($project)

        ];

        return Inertia::render('Admin/ClientProject/print', $data);
    }

    /**
     * @param Project $project
     * @return Collection
     */
    private function getProjectTemplates(Project $project): Collection
    {
        $TemplatePath = resource_path('js/document_templates/' . $project->type);
        $dirs = glob($TemplatePath . '/*', GLOB_ONLYDIR);
        return collect($dirs)->map(function ($dir) {
            return basename($dir);
        });
    }
}


