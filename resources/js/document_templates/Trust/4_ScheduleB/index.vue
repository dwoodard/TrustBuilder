<template>
  <div class="document-template">
    <h1>SCHEDULE B</h1>
    <h2 class="mb-10">SETTLOR'S STATEMENT OF WISHES</h2>


    <p>
      <b class="preview-field">{{ moment(document_created_at).format('MMMM D, YYYY') }}</b>
    </p>


    <div>
      <span>To: </span>
      <div style="margin: -24px 0 20px 40px;">
        <b>BOARD OF TRUSTEES </b><br/>
        <b class="preview-field">{{ trust_name }}</b> <br/>
        7512 Dr. Phillips Blvd. Suite #50-185<br/>
        Orlando, Florida, USA
      </div>
    </div>


    <p>RE: SETTLOR's Preference For Issuance of Certificates Of Beneficial Ownership To Beneficiary(ies)</p>

    <p>Dear Sirs:</p>

    <p>I am writing this letter as my statement of record, which is in accordance with the Declaration of Trust of:</p>

    <p class="text-center preview-field"><b>{{ trust_name }}</b></p>

    <p>to be signed on or after this date, directing you, the Board of Trustees, to make the initial issue of the one hundred (100) Units of Beneficial Ownership to the following entity(ies):</p>


    <ul class="ownership">
      <li v-for="(beneficiary, index) in beneficiaries" :key="index">
        {{ beneficiary.name }} - CERTIFICATE {{ (index+1).toString().padStart(3,"0") }} - {{ beneficiary.units }} UNITS of Beneficial Ownership
      </li>
    </ul>

    <p>I thank you for your attention to this matter.</p>

    <p>Respectfully,</p>


    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            filled
            persistent-hint
            :hint="`SETTLOR: ${settlor}`"/>
        </v-col>
        <v-col/>
      </v-row>

      <v-row>
        <v-col>
          <span>
            NOTARY Public, Weber County <br/>
            State of Utah
          </span>
        </v-col>
        <v-col/>
      </v-row>

      <v-row>
        <v-col>
          <h4>WITNESS:</h4>

          <v-text-field
            filled
            persistent-hint
            hint="Notary Public PRINT NAME"/>
          <v-text-field
            filled
            persistent-hint
            hint="Notary Public SIGNATURE:"/>
        </v-col>

        <v-col style="background: #f1f1f1;">
          <div>
            Notary Stamp / Seal:
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="break-after"></div>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    props: {
      client: {
        type: Object,
        required: true
      },
      project: {
        type: Object,
        required: true
      }
    },
    computed: {
      document_created_at() {
        return this.project?.project_data?.trust?.document_created_at || new Date();
      },
      first_trustee() {
        return this.project?.project_data?.trust?.trustees.first[0] || `${this?.client?.first_name} ${this?.client?.last_name}`;
      },
      trust_name() {
        return this.project?.project_data?.name;
      },
      settlor() {
        return this.project?.project_data?.trust?.settlor;
      },
      beneficiaries() {
        return this.project?.project_data?.trust?.beneficiaries || [];
      }
    },
    methods: {
      moment
    }
  };
</script>

<style scoped>
.ownership{
  padding: 0;
  margin: 0;
  list-style: none;
}

</style>
