<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClientResource;
use App\Http\Resources\ProjectResource;
use App\Models\Client;
use App\Models\Project;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use function Symfony\Component\String\s;

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

    /**
     * Sets the Project's project_data object by taking the key called node and passing all the request data to it
     * using a string that represents the nested path to the data, e.g. "project_data.meeting_minutes[0]['item']" it will
     * set that key to the value of the request data.
     *
     * then saves the project
     *
     * POST: admin/client/{client}/project/{project}/project_data/{node}
     * @param Client $client
     * @param Project $project
     * @param $node
     * @param Request $request
     * @return RedirectResponse
     */
    public function projectData(Client $client, Project $project, $node, Request $request): RedirectResponse
    {
        $node = 'meeting_minutes[].foo.bar.baz';

        $project->project_data = collect($project->project_data);

        $nodes = collect(explode('.', $node));

        // a dot notation string. it will be used to set the value of the node. in the last iteration.
        $path = "";

        // loop through the nodes and set the value of the node
        $nodes = $nodes->map(function ($node, $key) use (&$path, $request, $project, $nodes) {
            $last = $key == $nodes->count() - 1;

            $create = substr($node, -2) === '[]';
            $node = $create ? substr($node, 0, -2) : $node;

            $path .= $node;
            dump($path);

            $hasNode = Arr::has($project->project_data, $path);

            // if create is true and the node does not exist, create it
            if ($create && !$hasNode) {
                $nodeArray = Arr::set($project->project_data, $node, []);

                // because we are creating a new array,
                // we, need to set the path to have '.0.', meaning '.[index]'
                $path .= '.' . (count($nodeArray[$node])) . '.';
            }else{
                $path .= '.';
            }


            // get type of node by the path
            $type = gettype($project->project_data->get($path));

            // if last node, set the value
            if ($last) {
                // remove the last dot
                $path = substr($path, 0, -1);
                switch ($type) {
                    case 'array':
                        $project->project_data->set($path, [$request->all()]);
                        break;
                    default:
                        $project->project_data->set($path, $request->all());
                        break;
                }
            }



            return [
                'path' => $path,
                'create' => $create,
                'node' => $node,
                'type' => gettype($project->project_data->get($node)),
                'value' => $last ? $request->all() : null
            ];


        });


        dump($nodes);
        dump($project->project_data->toArray());
        dump($path);
        die();

        $project->save();

        return Redirect::back();
    }


}


