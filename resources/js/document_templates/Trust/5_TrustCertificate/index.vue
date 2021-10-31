<template>
  <div id="trust_certificates">
    <div class="break-after"></div>
    <v-container v-for="(beneficiary, index) in beneficiaries" :key="index"
                 class="trust_certificate">
      <v-row class="mb-10">
        <v-col>
          <div class="text-center">
            <h2>
              {{ (index + 1).toString().padStart(3, '0') }}<br/>
            </h2>
            Certificate Number
          </div>
        </v-col>
        <v-col>
          <div class="text-center">REGISTERED CERTIFICATE</div>
        </v-col>
        <v-col>
          <div class="text-center">
            <h2>
              {{ (beneficiary.units) }}<br/>
            </h2>
            Number of Units
          </div>
        </v-col>
      </v-row>

      <v-row class="mb-10">
        <v-col>
          <h1 class="text-center" style="font-family: serif; letter-spacing: 10px;">
            TRUST CERTIFICATE <BR/>
            <SMALL>OF</SMALL> <BR/>
            BENEFICIAL OWNERSHIP
          </h1>
        </v-col>
      </v-row>

      <v-row class="mb-10">
        <v-col>
          <div class="text-center">
            <h1>{{ trust_name }}</h1>
            (A Pure Trust Organization)
          </div>
        </v-col>
      </v-row>

      <v-row class="mb-8">
        <v-col>
          <p>
            This is to certify that {{ beneficiary.name }} (BENEFICIARY) is the owner of {{ toTitleCase(toWords(beneficiary.units)) }} ({{ beneficiary.units }}) Units of Beneficial Ownership (beneficial interest, not vested interest) in the assets of the above name Trust. This Certificate and the referenced Units may be transferred, exchanged or gifted only in accordance with the guidelines described in the Trust Indenture.
          </p>
          <p>
            The BENEFICIARY may not sell this Certificate or receive any compensation for the transfer, exchange or gift of this Certificate to another person or entity. This Certificate may not be hypothecated, pledged as collateral, liened, or assigned in an attempt that could be interpreted as a means to force an early distribution of assets from the Trust.
          </p>
          <p>
            All rights represented herein expire upon BENEFICIARY's death unless a proper Transfer-Upon-Death form has been filled with the Board of Trustees prior to BENEFICIARY's death. The Holder of this Certificate has no rights unless said Holder is the BENEFICIARY named herein or their legal guardian.
          </p>
        </v-col>
      </v-row>

      <v-row class="">
        <v-col>
          <div class="text-center">
            <div style="border-bottom: 1px solid black">{{ moment(document_created_at).format('MMMM D, YYYY') }}</div>
            Effective Date
          </div>
        </v-col>

        <v-col offset="1">
          <v-text-field
            filled
            persistent-hint
            :hint="`${first_trustee}, Trustee`"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import moment from 'moment';
  import {toTitleCase} from '../../../helper';

  const converter = require('number-to-words-en');

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
        return this.project?.project_data?.trust?.trust_name || this?.project?.name;
      },
      settlor() {
        return this.project?.project_data?.trust?.settlor;
      },
      beneficiaries() {
        return this.project?.project_data?.trust?.beneficiaries || [];
      }
    },
    methods: {
      moment,
      toWords: converter.toWords,
      toTitleCase
    }

  };
</script>

<style scoped>
#trust_certificates {

}

.trust_certificate {
  border: double 4px #333333;
  page-break-after: always;
}
</style>
