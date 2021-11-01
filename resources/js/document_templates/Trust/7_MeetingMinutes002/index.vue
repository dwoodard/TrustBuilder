<template>
  <div class="document-template">
    <h3>MINUTES OF MEETING # <b>002</b>, BOARD OF TRUSTEES (hereafter BOARD)</h3>

    <p>
      <span class="preview-field">
        {{ trust_name }}<br/>
        {{ domicile_address.address }} {{ domicile_address.apt }}<br/>
        {{ domicile_address.city }}, {{ domicile_address.state }}, {{ domicile_address.country }}
      </span>
    </p>

    <p>
      <b class="preview-field">{{ moment(document_created_at).format("MMMM D, YYYY") }}</b>
    </p>

    <hr/>

    <p>
      With all of the Board of Trustees in attendance, the following Minutes were duly adopted and approved by unanimous consent as Minutes of the <b>Second</b> (2nd) Meeting, a <b>Special</b> Meeting, of the Board of Trustees.
    </p>
    <p>
      First Trustee, <b class="preview-field">{{ first_trustee }}</b>, also acting as the <b>Meeting Secretary</b>, is qualified to make the following resolution(s):
    </p>
    <p>
      <b>MINUTE NO. 01</b>: Be it resolved that this Board hereby grants to the following Trust officer, <b class="preview-field">{{ first_trustee }}</b>, <b>Trustee</b>, the
      <b>Banking Authority</b> to open any new bank account(s) in any institutions that they deem appropriate, prudent and/or necessary, at
      their discretion, <b>at any time within the next twelve (12) months</b> for this Trust or any of its Subsidiaries. The purpose of said directive is to fulfill any strategies that the Board has derived or will derive toward its gainful purpose of establishing and/or accommodating its own growth plans over the lifetime of the Trust. The Trustee's sole decisions may contractually bind this Trust.
    </p>
    <p>
      Within said institutions, the officer may place any Trust officer into a signatory position, at their own discretion, either at the time of opening of said account, or at a later date as may be pre-arranged with the institution. The following officer(s) may be utilized in any signatory capacity as described above:
    </p>
    <p class="text-center">
      <span class="preview-field">{{ first_trustee }}</span>, Trustee
    </p>
    <p>
      As a signatory to said account, the named officer(s) shall be entrusted with, but not limited to, the following duties:
    </p>

    <p class="ml-16">
      <ul style="list-style: lower-alpha">
        <li>Work with said account(s) and the appropriate institution officers.</li>
        <li>Deliver payment documentation for said account.</li>
        <li>Receive information about said account.</li>
        <li>Send funds to or receive funds from said account.</li>
        <li>Conduct any subsequent transaction associated with said account.</li>
      </ul>
    </p>

    <p>
      As a signatory to said account(s), the officer(s) shall be expected to retain their active duties unless and until one or more of the following events occurs:
    </p>

    <p class="ml-16">
      <ul style="list-style: lower-alpha">
        <li>Medically certified death of said officer.</li>
        <li>Certified medical incapacitation of said officer.</li>
        <li>Certified legal incapacitation of said officer.</li>
        <li>Voluntary Notarized written resignation of said officer.</li>
        <li>Removal of said officer by subsequent Sealed Minute & Resolution by the Board, for reasonable cause.</li>
        <li>Premature dissolution of this Trust by any legal means.</li>
      </ul>
    </p>

    <p>
      A single or dual signature requirement (if applicable) to affect any of the foregoing authorizations shall be determined by the officer(s) at the time said account is opened.
    </p>
    <p>
      <b>MINUTE NO. 02</b>: Be it resolved that this Board hereby grants to the following Trust officer, <b>{{ first_trustee }}</b>, Trustee, the Authority to setup any new entity(s) in any structure or jurisdiction that they deem appropriate, prudent and/or necessary, at their discretion, <b>at any time within the next twelve (12) months</b> for this Trust or any of its Subsidiaries. The purpose of said directive is to fulfill any strategies that the Board has derived or will derive toward its gainful purpose of establishing and/or accommodating its own growth plans over the lifetime of the Trust. The Trustee's sole decisions may contractually bind this Trust.
    </p>


    <p>Within said entity(s), the officer may place any Trust officer or other officer or employee into a signatory position, or other titled position, at their own discretion, either at the time of the forming of said entity(s), or at a later date as may deemed necessary. The following officer(s) may be utilized in any signatory capacity as described above:</p>

    <p class="text-center">
      <span class="preview-field">{{ first_trustee }}</span>, Trustee
    </p>


    <p>
      As a signatory to said entity(s), the named officer(s) shall be entrusted with, but not limited to, the following duties:
    </p>


    <p class="ml-16">
      <ul style="list-style: lower-alpha">
        <li>Work with said entity(s) and the appropriate institution officers.</li>
        <li>Deliver payment documentation for said entity(s).</li>
        <li>Receive information about said entity(s).</li>
        <li>Send funds to or receive funds from said entity(s).</li>
        <li>Conduct any subsequent transaction associated with said entity(s).</li>
      </ul>
    </p>


    <p>As a signatory to said entity(s), the officer(s) shall be expected to retain their active duties unless and until one or more of the following events occurs:</p>

    <div class="ml-16">
      <ul style="list-style: lower-alpha">
        <li>Medically certified death of said officer.</li>
        <li>Certified medical incapacitation of said officer.</li>
        <li>Certified legal incapacitation of said officer.</li>
        <li>Voluntary Notarized written resignation of said officer.</li>
        <li>Removal of said officer by subsequent Sealed Minute & Resolution by the Board, for reasonable cause.</li>
        <li>Premature dissolution of this Trust by any legal means.</li>
      </ul>
    </div>


    <p>A single or dual signature requirement (if applicable) to affect any of the foregoing authorizations shall be determined by the officer(s) at the time said entity(s) are formed.</p>
    <p>
      <b class="text-decoration-underline">CLOSE:</b>
    </p>
    <p>
      An official Trust Resolution may be drafted for any appropriate Minute above and dispersed to the appropriate party to whom it applies.
    </p>
    <p>There being no further business to come before this Board at this meeting, upon a motion duly made, seconded and carried, the meeting was adjourned.</p>


    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            filled
            persistent-hint
            :hint="`By FIRST TRUSTEE: ${first_trustee}`"/>
        </v-col>

        <v-col>
          <v-text-field
            filled
            persistent-hint
            :hint="`By MEETING SECRETARY: ${first_trustee}`"/>
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
      domicile_address() {
        return this.project?.project_data?.trust?.domicile_address || {};
      }
    },
    methods: {
      moment
    }
  };
</script>

<style scoped>

</style>
