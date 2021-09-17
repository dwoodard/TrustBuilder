<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\SchemalessAttributes\SchemalessAttributes;

class Document extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $schemalessAttributes = [
        'document_data',
    ];

    protected $fillable = [
        'name',
        'project_id',
    ];

    public function project(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    protected $casts = [
        'document_data' => 'array',
    ];

    public function getSettings(): SchemalessAttributes
    {
        return SchemalessAttributes::createForModel($this, 'document_data');
    }
}
