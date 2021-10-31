<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\SchemalessAttributes\SchemalessAttributes;
use Spatie\SchemalessAttributes\SchemalessAttributesTrait;

/**
 * @property mixed|SchemalessAttributes project_data
 */

class Project extends Model
{
    use HasFactory;
    use SchemalessAttributesTrait;


    protected $table = 'projects';

    protected $schemalessAttributes = [
        'project_data',
    ];
    protected $casts = [
        'project_data' => 'array'
    ];
    protected $fillable = [
        'name',
        'user_id',
        'client_id',
        'type',
        'status',
        'start_date',
        'end_date',
        "project_data",
        "custom_template",
        'description',
        'budget',
        'rate',
    ];

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function client(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Client::class);
    }

    public function scopeWithProjectDataAttribute()
    {
        return $this->project_data->modelScope();
    }

    public function getProjectData(): SchemalessAttributes
    {
        return SchemalessAttributes::createForModel($this, 'project_data');
    }


}


