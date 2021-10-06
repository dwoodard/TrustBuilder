<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('document_types', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('filename');
            $table->string('description');
        });

        $documentTypes = [
            [
                'name' => 'Declaration of Trust',
                'filename' => 'DeclarationOfTrust',
                'description' => "Statement appointing a trustee to oversee assets being held for the benefit of one or more other individuals"
            ],
            [
                'name' => 'Trust Indenture',
                'filename' => 'TrustIndenture',
                'description' => "Agreement in a bond contract made between a bond issuer and a trustee that represents the bondholder's interests by highlighting the rules and responsibilities that each party must adhere to"
            ],
            [
                'name' => 'Schedule A',
                'filename' => 'ScheduleA',
                'description' => "Settlement of all the Trust Assets"
            ],
            [
                'name' => 'Schedule B',
                'filename' => 'ScheduleB',
                'description' => "Settlor's statement of wishes"
            ],
            [
                'name' => 'Trust Certificate',
                'filename' => 'TrustCertificate',
                'description' => "Showing Ownership in Trust"
            ],
            [
                'name' => 'Meeting Minutes',
                'filename' => 'TrusteesMeetingMinutes',
                'description' => "Records of meetings that have taken place"
            ],
            [
                'name' => 'Board Resolution',
                'filename' => 'BoardResolution',
                'description' => "Formal document that solidifies in writing important decisions that boards of directors make"
            ]
        ];

        \App\Models\DocumentType::insert($documentTypes);

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('document_types');
    }
}
