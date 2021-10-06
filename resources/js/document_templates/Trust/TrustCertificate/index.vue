<template>
  <div class="document-template" style="border: ridge 4px #333; padding: 20px">
    <h3>Trust Certificate</h3>

    <p>
      <b>{{ moment(document_created_at).format('MMMM D, YYYY') }}</b>
    </p>


    <div>
      <span>To: </span>BOARD OF TRUSTEES
      {{ trust_name }}
      7512 Dr. Phillips Blvd. Suite #50-185
      Orlando, Florida, USA
    </div>


    <p>RE: SETTLOR's Preference For Issuance of Certificates Of Beneficial Ownership To Beneficiary(ies)</p>

    <p>Dear Sirs:</p>

    <p>I am writing this letter as my statement of record, which is in accordance with the Declaration of Trust of:</p>

    <p>{{ trust_name }}</p>

    <p>to be signed on or after this date, directing you, the Board of Trustees, to make the initial issue of the one hundred (100) Units of Beneficial Ownership to the following entity(ies):</p>


    Kaitlyn Woodard       - CERTIFICATE 001 - 25 UNITS of Beneficial Ownership
    Kira Woodard          - CERTIFICATE 002 - 25 UNITS of Beneficial Ownership
    Tyler Woodard         - CERTIFICATE 003 - 25 UNITS of Beneficial Ownership
    Klarity Woodard       - CERTIFICATE 004 - 25 UNITS of Beneficial Ownership
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
        return this.project?.document_data?.document_created_at || new Date();
      },
      first_trustee() {
        return this.project?.document_data?.first_trustee || `${this?.client?.first_name} ${this?.client?.last_name}`;
      },
      trust_name() {
        return this.project?.document_data?.trust_name || this?.project?.name;
      },
      settlor() {
        return this.project?.document_data?.settlor;
      }
    },
    methods: {
      moment
    }
  };
</script>

<style scoped>
.check{
  color:red
}
</style>
