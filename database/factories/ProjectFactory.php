<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProjectFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Project::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //name, user_id, client_id, type, status, start_date, end_date
            'name' => $this->faker->name . " Trust",
            'user_id' => \App\Models\User::factory()->create()->id,
            'client_id' => \App\Models\Client::factory()->create()->id,
            'type' => $this->faker->randomElement(['Trust', 'Contract']),
            'status' => $this->faker->randomElement(['new', 'in-progress', 'pending', 'completed', 'cancelled']),
            'start_date' => $this->faker->dateTimeBetween('-1 years', '+1 years'),
            'end_date' => $this->faker->dateTimeBetween('+1 years', '+2 years'),
        ];
    }
}
