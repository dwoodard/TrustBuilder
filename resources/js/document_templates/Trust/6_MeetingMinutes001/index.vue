<template>
  <div class="document-template">
    <h3>MINUTES OF MEETING # <b>001</b>, BOARD OF TRUSTEES (hereafter BOARD)</h3>

    <p>
      {{ trust_name }}<br/>
      7512 Dr. Phillips Blvd. Suite #50-185<br/>
      Orlando, Florida, USA
    </p>

    <p>
      <b class="preview-field">{{ moment(document_created_at).format("MMMM D, YYYY") }}</b>
    </p>

    <p>
      With all of the BOARD in attendance, the following Meeting Minutes were duly adopted and approved by unanimous consent as Minutes of the <b>First (1st) Meeting</b> of the BOARD.
    </p>

    <p>
      FIRST TRUSTEE, <b class="preview-field">{{ first_trustee }}</b>, also acting as the <b>Meeting Secretary</b>, is qualified to make the following resolution(s):
    </p>

    <p>
      <b>MINUTE NO. 1:</b> In accordance with the Declaration of Trust of the entity referenced above and executed on or before this date by and between the SETTLOR thereof and the FIRST TRUSTEE herein, the following property is hereby conveyed as an absolute gift unto the BOARD:
    </p>

    <p>
      The full list of described property is attached to the TRUST documents entitled SCHEDULE A, and signed by the SETTLOR and the FIRST TRUSTEE. Said <b>Schedule A</b> is accepted and ratified as being the true and correct list of all properties conveyed to and held by the BOARD as of this date.
    </p>

    <p>
      <b>MINUTE NO.2:</b> In accordance with the Declaration of Trust of the entity referenced above and executed on or before this date by and between the SETTLOR thereof and the FIRST TRUSTEE herein, the BOARD acknowledges the written instructions of the SETTLOR concerning the issuance of the TRUST CERTIFICATES OF BENEFICIAL OWNERSHIP and acknowledges the issuance of one hundred (100) UNITS of beneficial ownership (per <b>Schedule B</b>) in the following manner, according to the wishes of the SETTLOR, to wit:
    </p>

    <div class="text-center mb-10">
      <ul style="list-style: none;">
        <li v-for="(beneficiary, index) in beneficiaries">
          CERTIFICATE {{ (index+1).toString().padStart(3,"0") }}: {{ beneficiary.name }} - {{ beneficiary.units }} UNITS
        </li>
      </ul>
    </div>


    <p>
      Said CERTIFICATES are now registered in the Records of the BOARD.
    </p>

    <p>
      <b>MINUTE NO. 3</b>: According to the dictates of United States Supreme Court in the case Boyd v. U.S., 166 US 618 (1886) and the case of Silverthorn v. U.S., 251 385 (1920); The BOARD hereby declares all Meeting Minutes, schedules, letters, and attachments hereto of this TRUST to be private and inviolable and therefore are not to be loaned, read or disclosed to anyone at anytime, unless it is determined by unanimous consent of the BOARD that disclosure of a particular Meeting Minute would be in the best interest of the TRUST. The dictates alluded to above are as follows:
    </p>
    <p>
      "Any compulsory discovery by extorting the party's oath, or compelling the production of his private books and papers, to convict him of a crime or to forfeit his property, is contrary to the principles of a free government. It is abhorrent to the instincts of an Englishman; it is abhorrent to the instincts of an American. It may suit the purposes of despotic power, but it cannot be pure atmosphere of political liberty and personal freedom."
    </p>
    <p>
      <b>MINUTE NO. 4</b>: The BOARD declares the fiscal year of the TRUST to be the calendar year. The BOARD shall have the power to change such fiscal year by subsequent Meeting Minute if it is determined to be in the best interest of the TRUST to do so.
    </p>
    <b>MINUTE NO. 5</b>: Special meetings called in accordance with the Declaration of Trust may be held at any time and/or any place in the best interest of the TRUST upon three (3) days notice, which may be waived by any or all TRUSTEE(s) and/or other titled officers.
    Board of Trustees Meeting 001 - Page 1 of 3
    <p>
      <b>MINUTE NO. 6</b>: The BOARD hereby appoints a SECONDARY TRUSTEE, <b class="preview-field">{{ second_trustee }}</b>, to this BOARD, effective immediately.
    </p>
    <p>
      The FIRST TRUSTEE shall designate, from time-to-time, specific tasks, roles, duties and/or authorities for which the SECONDARY TRUSTEE shall be consulted and/or be kept apprised.
    </p>
    <p>
      The FIRST TRUSTEE hereby waives the requirement to establish an Independent Contractor Agreement with the SECONDARY TRUSTEEs since the role has already been defined. However, the SECONDARY TRUSTEE shall act in all respects as an Independent Contractor with the Trust and hereby denies an employee / employer relationship with same.
    </p>


    <div class="break-before"></div>


    <b>MINUTE NO. 7</b>: It is in the best interest of the TRUST to continue operation in as smooth a manner as possible, even if any TRUSTEE is unable to continue their duties due to death, resignation, permanent incapacitation or removal from office. Should this happen, the BOARD hereby nominates the following named SUCCESSOR TRUSTEE(s) to immediately take the place of the following named TRUSTEE in the event that the BOARD desires to fill the vacancy so created, rather than to reduce the number of TRUSTEES on the BOARD:

    <div class="pa-10">
      <table class="ma-auto">
        <tbody>
          <tr v-for="(trustee, index) in trustees.first">
            <td class="text-right">
              <span v-if="index > 0" class="mr-10"> {{ toTitleCase(toWordsOrdinal(index)) }} Choice</span>
            </td>
            <td class=" text-right pr-10"><span v-if="index > 0">Successor</span> First Trustee:</td>
            <td><b class="preview-field">{{ trustee }}</b></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pa-10">
      <table class="ma-auto">
        <tbody>
          <tr v-for="(trustee, index) in trustees.second">
            <td class="text-right">
              <span v-if="index > 0" class="mr-10"> {{ toTitleCase(toWordsOrdinal(index)) }} Choice</span>
            </td>
            <td class=" text-right pr-10"><span v-if="index > 0">Successor</span> Secondary Trustee:</td>
            <td><b class="preview-field">{{ trustee }}</b></td>
          </tr>
        </tbody>
      </table>
    </div>


    <p>
      Should any choice for replacement TRUSTEE not be an adult (minimum 18 years old) at the time of request for appointment, the next choice shall be considered. This order of choices shall remain the preferred order of choices for subsequent appointments of a SUCCESSOR TRUSTEE for said positions listed above.
    </p>
    <p>
      Any such death, resignation, permanent incapacitation or removal from office of any TRUSTEE or other titled officer shall be noted in the Meeting Minutes of the TRUST, along with the decision of the BOARD to either fill the vacancy so created or to reduce the number of TRUSTEES. Should the BOARD vote to fill such a vacancy, the SUCCESSOR TRUSTEE shall immediately be notified by Certified Mail of their conditional appointment to the BOARD as TRUSTEE. Acceptance of such appointment shall be by special meeting called for such purpose and with an appropriate Meeting Minute signed by the accepting TRUSTEE. Upon the appointment of any new TRUSTEE to the BOARD, the BOARD shall, in like manner, nominate a SUCCESSOR TRUSTEE for such new TRUSTEE.
    </p>
    <p>
      The BOARD may, in its discretion, by appropriate Meeting Minute, allow for the pre-acceptance of the position of TRUSTEE by any SUCCESSOR TRUSTEE. The effect of any such pre-acceptance shall be to make the appointment of such SUCCESSOR TRUSTEE automatic upon receipt by such SUCCESSOR TRUSTEE of written notice of the death, resignation, permanent incapacitation or removal from office of the TRUSTEE they are named to succeed. No further action of the BOARD shall then be necessary to enable such TRUSTEE to exercise their authorized powers within this TRUST. However, an appropriate Meeting Minute shall be made reflecting that such action has taken place as soon thereafter as conveniently possible.
    </p>


    <p>
      <b>MINUTE NO. 8</b>: The BOARD shall reimburse any TRUSTEE or other applicable titled officer, as appropriate, for all necessary expenses incurred by such TRUSTEE for travel on business of the BOARD, as well as any expenses incurred by such TRUSTEE incidental to his service as TRUSTEE. TO receive repayment of such expense, the TRUSTEE must submit to the BOARD, written evidence of such expense, such as a written log of travel, gas receipts, meal receipts, lodging receipts, and the like. The BOARD may, in its discretion, prepay the expenses of such travel or work for the BOARD by the TRUSTEE. Such TRUSTEE shall account to the BOARD for the expenditure of such prepayment and reimburse the BOARD for any overpayment.
    </p>
    <p>
      <b>MINUTE NO.9: </b>It being the intent of the SETTLOR hereto to preserve this TRUST, it shall be the policy of the BOARD not to employ the services of any individual, unless such can be done on an Independent Contractor and/or Contract Worker basis, to eliminate the added expense of Social Security Taxes, Unemployment Taxes, Workmen's Compensation Insurance, Withholding and the like.
    </p>
    <p>
      <b>MINUTE NO. 10</b>: All Meeting Minutes, Resolutions, Records or other Documents concerning this TRUST shall include the signature of the FIRST TRUSTEE. Meeting Minutes shall also include the signature of the Meeting Secretary.
    </p>
    <p>
      <b>MINUTE NO. 11</b>: As per the allowances in the Declaration of Trust, the BOARD hereby elects to change the Official TRUST Mailing Address to the following:
    </p>
    <p class="ml-10 preview-field">
      {{ trust_name }} <br/>
      {{ mailing_address.address }}<br/>
      {{ mailing_address.city }}, {{ mailing_address.state }} {{ mailing_address.zip }}
    </p>
    <p>
      Changing the mailing address at this time does not automatically change the domicile address. The domicile address remains unchanged.
    </p>
    <p>
      <b>MINUTE NO. 12</b>: Unless otherwise changed in a future Meeting Minute by the BOARD, the FIRST TRUSTEE shall be the official Custodian of Records for this Trust. Any replacement FIRST TRUSTEE shall automatically assume the role of Custodian of Records also unless otherwise noted in a subsequent Meeting Minute.
    </p>
    <p>
      <b>MINUTE NO. 13</b>: Meeting Minutes need not be notarized but Trust Resolutions must be notarized by the FIRST TRUSTEE before disbursement or presentment.
    </p>
    <p>
      <b>MINUTE NO. 14</b>: Meeting Minute numbers need only be in sequence within a given Meeting and need not continue in succession to the next Meetings. Each Meeting shall start with Minute No. 01.
    </p>
    <p>
      <b class="text-decoration-underline">CLOSE:</b>
    </p>
    <p>
      An official Resolution may be drafted for any appropriate Meeting Minute above and dispersed to the appropriate party to whom it applies.
    </p>
    <p>
      There being no further business to come before this BOARD at this initial meeting, upon a motion duly made, seconded and carried, the meeting was adjourned.
    </p>


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
        return this.project?.document_data?.document_created_at || new Date();
      },
      first_trustee() {
        return this.project?.document_data?.trustees?.first[0] || `${this?.client?.first_name} ${this?.client?.last_name}`;
      },
      trustees() {
        return this.project?.document_data?.trustees;
      },
      second_trustee() {
        return this.project?.document_data?.trustees?.second[0];
      },
      mailing_address() {
        return this.project?.document_data?.mailing_address;
      },
      trust_name() {
        return this.project?.document_data?.trust_name || this?.project?.name;
      },
      settlor() {
        return this.project?.document_data?.settlor;
      },
      beneficiaries() {
        return this.project?.document_data?.beneficiaries || [];
      }
    },
    methods: {
      moment,
      toWordsOrdinal: converter.toWordsOrdinal,
      toTitleCase
    }
  };
</script>

<style scoped>
.check{
  color:red
}
</style>
