<?php

namespace Database\Factories;

use App\Models\Document;
use Illuminate\Database\Eloquent\Factories\Factory;

class DocumentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Document::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        // project_id, name, document_data
        return [
            'project_id' => \App\Models\Project::factory()->create()->id,
            'name' => $this->faker->randomElement(['foo', 'bar', 'baz']),
            'document_data' => json_encode([])
        ];
    }
}
