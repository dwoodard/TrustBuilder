<?php

namespace Database\Factories;

use App\Models\Invoice;
use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class InvoiceFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Invoice::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        //project_id, user_id, client_id, status, date, due_date, description, amount, rate, paid_amount, paid_date, paid_status
        return [
            'project_id' => \App\Models\Project::factory()->create()->id,
            'user_id' => \App\Models\User::factory()->create()->id,
            'client_id' => \App\Models\Client::factory()->create()->id,
            'status' => $this->faker->randomElement(['draft', 'sent', 'paid']),
            'date' => now(),
            'due_date' => now(),
            'description' => 'Invoice description',
            'amount' => $this->faker->randomFloat(2, 0, 1000),
            'rate' => $this->faker->randomFloat(2, 0, 1000),
            'paid_amount' => $this->faker->randomFloat(2, 0, 1000),
            'paid_date' => now(),
            'paid_status' => $this->faker->randomElement(['paid', 'unpaid']),
        ];
    }
}
