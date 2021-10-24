<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\SchemalessAttributes\SchemalessAttributes;
use Spatie\SchemalessAttributes\SchemalessAttributesTrait;

class Project extends Model
{
    use HasFactory;
    use SchemalessAttributesTrait;
    

    protected $table = 'projects';

    protected $schemalessAttributes = [
        'document_data',
    ];
    protected $casts = [
        'document_data' => 'array'
    ];
    protected $fillable = [
        'name',
        'user_id',
        'client_id',
        'type',
        'status',
        'start_date',
        'end_date',
        "document_data",
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

    public function scopeWithDocumentDataAttribute()
    {
        return $this->document_data->modelScope();
    }

    public function getDocumentData(): SchemalessAttributes
    {
        return SchemalessAttributes::createForModel($this, 'document_data');
    }
     

}


