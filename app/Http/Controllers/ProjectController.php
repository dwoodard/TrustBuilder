<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClientResource;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     * GET: admin/projects
     * admin.projects.index
     * @return \Inertia\Response
     */
    public function index()
    {
        $projects = Project::all();
        return Inertia::render('Projects/Index', compact('projects'));
    }

    /**
     * Show the form for creating a new resource.
     * GET: admin/projects/create
     * admin.projects.create
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Projects/Create');
    }

    /**
     * Store a newly created resource in storage.
     * POST: admin/projects
     * admin.projects.store
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $this->validate($request, [

        ]);

        $project = Project::create($request->all());

        return Redirect::route('projects.show', $project->id);
    }

    /**
     * Display the specified resource.
     * GET: admin/projects/{id}
     * admin.projects.show
     * @param  \App\Models\Project  $project
     * @return \Inertia\Response
     */
    public function show(Project $project)
    {

        return Inertia::render('Projects/Show', compact('project'));
    }

    /**
     * Show the form for editing the specified resource.
     * GET: admin/projects/{id}/edit
     * admin.projects.edit
     * @param  \App\Models\Project  $project
     * @return \Inertia\Response
     */
    public function edit(Project $project)
    {
        return Inertia::render('Projects/Edit', compact('project'));
    }

    /**
     * Update the specified resource in storage.
     * PUT: admin/projects/{id}
     * admin.projects.update
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, Project $project)
    {
        $this->validate($request, [

        ]);

        $project->update($request->only(OnlyColumns($project)));
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     * DELETE: admin/projects/{id}
     * admin.projects.destroy
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Project $project)
    {
        $project->delete();

        return Redirect::route('admin.projects.index');
    }
}
