<?php

namespace Tests\Feature;

use App\Models\Client;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ClientTest extends TestCase
{

    protected function setUp(): void
    {
        parent::setUp();


    }

    /** @test */
    public function it_should_make_a_new_client()
    {
        $client = Client::factory(Client::class)->create();
        $this->assertDatabaseHas('clients', $client->toArray());
    }

    /** @test */
    public function it_should_be_able_to_update_a_client()
    {
        $client = Client::factory(Client::class)->create();
        $this->assertDatabaseHas('clients', $client->toArray());
        $client->first_name = 'foo';
        $client->save();
        $this->assertDatabaseHas('clients', $client->toArray());
    }

}
