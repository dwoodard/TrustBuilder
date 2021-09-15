<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Client extends Model
{
    use HasFactory;
    use SoftDeletes;

   protected $guarded = [];

    protected $dates = ['deleted_at'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

//    public function invoices()
//    {
//        return $this->hasMany(Invoice::class);
//    }
//
//    public function payments()
//    {
//        return $this->hasMany(Payment::class);
//    }

    public function getFullNameAttribute()
    {
        return $this->first_name . ' ' . $this->last_name;
    }

    public function getStatusAttribute()
    {
        return $this->status == 1 ? 'Active' : 'Inactive';
    }
}
