<template>
  <div class="document-template">
    <h1>SCHEDULE A</h1>
    <h2 class="mb-10">SETTLEMENT OF ASSETS</h2>

    <p>Entered into this date by and between the SETTLOR and the FIRST TRUSTEE, of</p>

    <h4 class=" text-center mb-5 preview-field">
      {{ trust_name }}
    </h4>

    <p>in harmony with the Declaration of Trust, the SETTLOR hereby conveys to the BOARD the following described property as an absolute gift and the FIRST TRUSTEE hereby accepts said gift on behalf of the BOARD.</p>

    <p>This list of property is comprehensive and is the written description of those certain properties which were agreed upon and known to both the SETTLOR and the FIRST TRUSTEE at the time of the execution of the Declaration of Trust and includes all properties transferred and accepted, to wit:</p>

    <p>
      <b class="preview-field">{{ settlor_gift_type }}</b>: <span class="preview-field">{{ toTitleCase(toWords(settlor_gift)) }} Dollars ${{ settlor_gift }}</span>
    </p>

    <v-container>
      <v-row class="sm-6">
        <v-col>
          <v-text-field
            filled
            persistent-hint
            :hint="`SETTLOR: ${settlor}`"/>
        </v-col>
        <v-col>
          <v-text-field
            filled
            persistent-hint
            :hint="`FIRST TRUSTEE: ${first_trustee}`"/>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="sm-6">
          <div>
            NOTARY Public, Weber County <br/>
            State of Utah
          </div>
        </v-col>
        <v-col class="sm-6">
          <div>
            NOTARY Public, Weber County <br/>
            State of Utah
          </div>
        </v-col>
      </v-row>

      <v-row class="sm-6">
        <v-col>
          <h4 class="mb-5">WITNESS:</h4>

          <v-text-field
            filled
            persistent-hint
            hint="Notary Public PRINT NAME"/>
          <v-text-field
            filled
            persistent-hint
            hint="Notary Public SIGNATURE:"/>
        </v-col>

        <v-col>
          <h4 class="mb-5">WITNESS:</h4>

          <v-text-field
            filled
            persistent-hint
            hint="Notary Public PRINT NAME:"/>
          <v-text-field
            filled
            persistent-hint
            hint="Notary Public SIGNATURE:"/>
        </v-col>
      </v-row>

      <v-row class="sm-6" style="height: 60mm; background: #f1f1f1;">
        <v-col>
          <div>
            Notary Stamp / Seal:
          </div>
        </v-col>

        <v-col>
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
        return this.project?.project_data?.name;
      },
      settlor() {
        return this.project?.project_data?.trust?.settlor;
      },
      settlor_gift_type() {
        return this.project?.project_data?.trust?.settlor_gift_type;
      },
      settlor_gift() {
        return this.project?.project_data?.trust?.settlor_gift;
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

</style>
