<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClientResource;
use App\Http\Resources\ProjectResource;
use App\Models\Client;
use App\Models\Project;
use http\Header\Parser;
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
     * using a string that represents the nested path to the data, e.g. "project_data.meeting_minutes.0.meeting_number it will
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
        //fake for testing
        // meeting_minutes
        // meeting_minutes.[] - push to parent (meeting_minutes)
        // meeting_minutes.0 - update this to the value of the request
        // meeting_minutes.[].foo - push to parent (meeting_minutes) then add foo
        // meeting_minutes.[].foo.bar
        // meeting_minutes.[].foo.[].bar
        // meeting_minutes.[].foo.[].bar.[]
        // meeting_minutes.[].foo.[].bar.[].baz


        $node = 'meeting_minutes';
        $requestData = [
            'meeting_number' => '3',
            'date' => '2021-09-09',
            'dummy_data' => 'stuff',
        ];
        //end testing

        $canAccessFullNode = $project->project_data->get($node) !== null;

        // do a check to see if $node can be accessed
        // if $canAccessFullNode is true, set the request to that node
        if ($canAccessFullNode) {
            //todo: replace request data with the $request->all()
            dd('this is working');
            $project->project_data->set($project->project_data, $requestData);
            $project->save();

            //todo: uncomment this once working
            //return Redirect::back();
        }

        dump('cannot access full node, start editing the node to create the right data');

        $projectData = $project->project_data->toArray();
        $nodes = collect(explode('.', $node));
        $path = '';

        $parsedNodes = $nodes->map(function ($node, $key) use (&$path, $nodes) {

            $first = $nodes->first();
            $last = $nodes->last();
            $create = strpos($node, '[]') !== false;
            $parent = $nodes[$key - 1] ?? null;
            $hasNext = $nodes->has($key + 1);
            $type = gettype($node);
            $child = $hasNext ? $nodes[$key + 1] : null;
            $isCurrentArray = $node == '[]';


            if (!$isCurrentArray) {
                $path .= $node . ($hasNext ? '.' : '');
            }


            return (object) [
                'isFirst' => $first === $node,
                'isLast' => $last === $node,
                'type' => $type,
                'name' => $node,
                'create' => $create,
                'index' => is_numeric($node) ? $node : null,
                'parent' => $parent,
                'hasNext' => $hasNext,
                'child' => $child
            ];
        });

        //loop through the node and add the data
        foreach ($parsedNodes as $node ) {

            if ($node->name == '[]'){
                continue;
            }

            // if the node has a child where the child  == []
            if ($node->child == '[]') {
                data_set($projectData, $path, []);

            }
            // if the node is the last node
            if ($node->isLast){
                data_set($projectData, $path, $requestData);
            }
        }

        dump($projectData);


//            data_set($projectData, $node, $requestData);


        die();
        return Redirect::back();
    }


}


