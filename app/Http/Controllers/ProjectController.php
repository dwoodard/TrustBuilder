<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     * GET: admin/projects
     * admin.projects.index
     * @return Response
     */
    public function index(): Response
    {
        $projects = Project::all();
        return Inertia::render('Projects/Index', compact('projects'));
    }

    /**
     * Show the form for creating a new resource.
     * GET: admin/projects/create
     * admin.projects.create
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Projects/Create');
    }

    /**
     * Store a newly created resource in storage.
     * POST: admin/projects
     * admin.projects.store
     * @param Request $request
     * @return RedirectResponse
     * @throws ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $this->validate($request, []);

        $project = Project::create($request->all());

        return Redirect::route('projects.show', $project->id);
    }

    /**
     * Display the specified resource.
     * GET: admin/projects/{id}
     * admin.projects.show
     * @param Project $project
     * @return Response
     */
    public function show(Project $project): Response
    {
        return Inertia::render('Projects/Show', compact('project'));
    }

    /**
     * Show the form for editing the specified resource.
     * GET: admin/projects/{id}/edit
     * admin.projects.edit
     * @param Project $project
     * @return Response
     */
    public function edit(Project $project): Response
    {
        return Inertia::render('Projects/Edit', compact('project'));
    }

    /**
     * Update the specified resource in storage.
     * PUT: admin/projects/{id}
     * admin.projects.update
     * @param Request $request
     * @param Project $project
     * @return RedirectResponse
     * @throws ValidationException
     */
    public function update(Request $request, Project $project): RedirectResponse
    {
        $this->validate($request, [
            'redirect_route' => 'required',
        ]);

        $project->update($request->only(OnlyColumns($project)));

        return Redirect::route($request->input('redirect_route'));
    }

    /**
     * Remove the specified resource from storage.
     * DELETE: admin/projects/{id}
     * admin.projects.destroy
     * @param Project $project
     * @return RedirectResponse
     */
    public function destroy(Project $project): RedirectResponse
    {
        $project->delete();

        return Redirect::route('admin.projects.index');
    }
}
