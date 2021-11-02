<template>
  <div class="document-template">
    <v-container class="ma-auto" style="width:75%">
      <v-row>
        <v-col>
          <h2>{{ trust_name }}</h2>
          Established {{ moment(document_created_at).format("D MMMM YYYY") }}
        </v-col>
        <v-col>
          <div class="text-right ">
            <b>Mailing Address</b><br/>
            <div class="preview-field">
              {{ first_trustee }}, Trustee <br/>
              {{ mailing_address.address }}<br/>
              {{ mailing_address.city }} {{ mailing_address.zip }}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <div class="d-flex justify-center mb-4">
      <h2 style="letter-spacing: 12px;">BOARD RESOLUTION</h2>
    </div>

    <div class="d-flex justify-center mb-10">
      <h4>
        BANKING AUTHORITY
      </h4>
    </div>


    <p>OFFICERS PRESENT AT CORRESPONDING MEETING</p>

    <p>
      Per the Trust Meeting 002 held on <span class="preview-field">{{ moment(document_created_at).format('D MMMM YYYY') }}, {{ first_trustee }}</span>, First Trustee, who was also acting as Meeting Secretary, declared the following:
    </p>

    <p class="text-decoration-underline font-weight-bold">
      MATTERS RESOLVED
    </p>

    <p>
      1. That in accordance with Meeting Minute No. <b>01</b> of Trust Meeting <b>002</b>, this Board of Trustees hereby grants to the following Trust officer, <span class="preview-field">{{ first_trustee }}</span>, Trustee, the Banking Authority to open any new bank account(s) in any institutions that she deems appropriate, prudent and/or necessary, at her discretion, <b>at any time within the next twelve (12) months</b> for this trust or any of its Subsidiaries. The purpose of said directive is to fulfill any strategies that the Board has derived or will derive toward its gainful purpose of establishing and/or accommodating its own growth plans over the lifetime of the Trust. The Trustee's sole decisions may contractually bind this Trust.
    </p>

    <p>
      Within said institutions, the officer may place any Trust officer into a signatory position, at Trustee's own discretion, either at the time of opening of said account, or at a later date as may be pre-arranged with the institution. The following officer(s) may be utilized in any signatory capacity as described above:
    </p>

    <p class="text-center">
      <span class="preview-field">{{ first_trustee }}</span>, Trustee
    </p>

    <p>
      As a signatory to said account, the named officer(s) shall be entrusted with, but not limited to, the following duties:
    </p>

    <div class="ml-16">
      <ul style="list-style: lower-alpha">
        <li>Work with said account(s) and the appropriate institution officers.</li>
        <li>Deliver payment documentation for said account.</li>
        <li>Receive information about said account.</li>
        <li>Send funds to or receive funds from said account.</li>
        <li>Conduct any subsequent transaction associated with said account.</li>
      </ul>
    </div>

    <p>
      As a signatory to said account(s), the officer(s) shall be expected to retain their active duties unless and until one or more of the following events occurs:
    </p>


    <div class="ml-5">
      <ul style="list-style: lower-alpha">
        <li>Medically certified death of said officer.</li>
        <li>Certified medical incapacitation of said officer.</li>
        <li>Certified legal incapacitation of said officer.</li>
        <li>Voluntary Notarized written resignation of said officer.</li>
        <li>Removal of said officer by subsequent Sealed Minute & Resolution by the Board, for reasonable cause.</li>
        <li>Premature dissolution of this Trust by any legal means.</li>
      </ul>
    </div>


    <p>
      A single or dual signature requirement (if applicable) to affect any of the foregoing authorizations shall be determined by the officer(s) at the time said account is opened.
    </p>

    <p>
      <b class="text-decoration-underline">CLOSE:</b>
    </p>

    <p>With there being no further business, the meeting was adjourned.</p>

    <p class="text-center">
      Executed By: <span class="preview-field">{{ trust_name }}</span> <br/>
      By its FIRST TRUSTEE:  <span class="preview-field">{{ first_trustee }}</span> / Meeting Secretary
    </p>


    <v-container>
      <v-row class="sm-6">
        <v-col>
          <v-text-field
            filled
            persistent-hint
            :hint="`Authorized Signatory: By FIRST TRUSTEE: ${first_trustee}, Meeting Secretary`"/>
        </v-col>
        <v-col>
          <v-text-field
            filled
            persistent-hint
            :hint="`Date: ${moment(document_created_at).format('M/D/y')}`"/>
        </v-col>
      </v-row>


      <p class="text-center mb-1">ORIGINAL SIGNATURE & DATE IN BLUE INK</p>


      <v-row>
        <v-col>
          <div>
            NOTARY Public, Weber County <br/>
            State of Utah
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="6">
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
      </v-row>

      <v-row>
        <v-col sm="6" style="height: 60mm; background: #f1f1f1;">
          <div>
            Notary Stamp / Seal:
          </div>
        </v-col>
      </v-row>
    </v-container>
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
      mailing_address() {
        return this.project?.project_data?.trust?.mailing_address;
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
