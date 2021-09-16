<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClientResource;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ClientController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Clients/index', [
            'clients' => ClientResource::collection(Client::all())
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Clients/Create');
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
            'user' => [
                'id' => $client->id,
                'first_name' => $client->first_name,
                'last_name' => $client->last_name
            ],
        ]);
    }

    public function update(Request $request, Client $client): \Illuminate\Http\RedirectResponse
    {
        Request::validate([
            'first_name' => ['required', 'max:50'],
            'last_name' => ['required', 'max:50'],
        ]);

        $client->update(Request::only('first_name', 'last_name'));

        return Redirect::back()->with('success', 'User updated.');
    }

    public function destroy(Client $client): \Illuminate\Http\RedirectResponse
    {
        $client->delete();

        return Redirect::back()->with('success', 'User deleted.');
    }
}
