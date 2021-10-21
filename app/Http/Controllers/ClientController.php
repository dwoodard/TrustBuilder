<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClientResource;
use App\Models\Client;
use App\Models\DocumentType;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;
use Inertia\Response;

class ClientController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Clients/index', [
            'clients' => ClientResource::collection(Client::all()),
            'projectTypes' => $this->getTypes(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Clients/Create',[
            'documentTypes' => DocumentType::all()
        ]);
    }

    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        $clients = $request->validate([
            'first_name' => ['required'],
            'last_name' => ['required']
        ]);

        $clients['user_id'] = Auth::user()->getAuthIdentifier();

        $data = [
            'client' => Client::create($clients)
        ];

        return Redirect::back()->with($data);
    }

    public function edit(Client $client): Response
    {
        return Inertia::render('Admin/Clients/edit', [
            'client' => ClientResource::collection([$client])
            ]);
    }

    public function update(Request $request, Client $client): \Illuminate\Http\RedirectResponse
    {
        $request->validate([
            'first_name' => ['required', 'max:50'],
            'last_name' => ['required', 'max:50'],
        ]);

        $client->update($request->only(OnlyColumns($client)));

        return Redirect::back()->with('success', 'Client updated.');
    }

    public function destroy(Client $client): \Illuminate\Http\RedirectResponse
    {
        $client->delete();

        return Redirect::back()->with('success', 'User deleted.');
    }


    /**
     * @return Collection
     */
    private function getTypes(): Collection
    {
        $typesPath = resource_path('js/document_templates');
        $dirs = glob($typesPath . '/*', GLOB_ONLYDIR);

        return collect($dirs)->map(function ($dir) {
            return basename($dir);
        });
    }
}
