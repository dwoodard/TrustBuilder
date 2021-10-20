<template>
  <div>
    <v-stepper v-model="currentStep" alt-labels>
      <div>
        <v-icon v-if="form.isDirty" color="danger">mdi-update</v-icon>
        <v-icon v-else color="green">mdi-sticker-check</v-icon>
      </div>

      <v-stepper-header>
        <v-stepper-step
          editable
          :complete="currentStep > 1"
          step="1">
          <small>Client</small>
        </v-stepper-step>
        <v-divider/>
        <v-stepper-step
          editable
          :complete="currentStep > 2"
          :rules="[
            () => {return !!form.trust_name}
          ]"
          step="2">
          <small>Trust</small>
        </v-stepper-step>
        <v-divider/>
        <v-stepper-step
          editable
          :complete="currentStep > 3"
          step="3">
          <small>Trustees</small>
        </v-stepper-step>
        <v-divider/>
        <v-stepper-step
          step="4"
          editable>
          <small>Beneficiary</small>
        </v-stepper-step>
      </v-stepper-header>

      <form @keyup.enter="onEnter">
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card outlined class="mb-12">
              <v-container>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="form.trustees.first[0]"
                      label="First Trustee"/>
                  </v-col>
                </v-row>


                <v-row>
                  <v-col>
                    <v-text-field v-model="form.mailing_address.address" label="Mailing Address"/>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field v-model="form.mailing_address.city" label="city"/>
                  </v-col>
                  <v-col>
                    <v-text-field v-model="form.mailing_address.state" label="state"/>
                  </v-col>
                  <v-col>
                    <v-text-field v-model="form.mailing_address.zip" label="zip"/>
                  </v-col>
                  <v-col>
                    <v-text-field v-model="form.mailing_address.country" label="country"/>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>

            <v-btn
              color="primary"
              @click="nextStep">
              Continue
            </v-btn>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-card outlined class="mb-12">
              <v-card-title>
                Trust Info
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="form.trust_name"
                      label="Trust Name"/>
                  </v-col>

                  <v-col>
                    <v-menu
                      v-model="MenuDocumentCreated"
                      label="Document Created"
                      :close-on-content-click="false"
                      max-width="290">
                      <template #activator="{ on, attrs }">
                        <v-text-field :value="form.document_created_at" clearable readonly v-bind="attrs" v-on="on" @click="form.document_created_at = null"/>
                      </template>
                      <v-date-picker
                        v-model="form.document_created_at"
                        show-adjacent-months/>
                    </v-menu>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="form.settlor"
                      label="Settlor"/>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="form.settlor_gift_type"
                      label="Settlor Gift Type"/>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="form.settlor_gift"
                      type="number"
                      prepend-icon="mdi-currency-usd"
                      label="Settlor Gift"/>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="form.term_of_trust"
                      label="Term Of Trust"/>
                  </v-col>
                </v-row>
              </v-container>

              <v-container>
                <h3>Domicile Address</h3>
                <v-row>
                  <v-col>
                    <v-text-field v-model="form.domicile_address.address" label="address"/>
                  </v-col>
                  <v-col>
                    <v-text-field v-model="form.domicile_address.apt" label="apartment"/>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field v-model="form.domicile_address.city" label="city"/>
                  </v-col>
                  <v-col>
                    <v-text-field v-model="form.domicile_address.state" label="state"/>
                  </v-col>
                  <v-col>
                    <v-text-field v-model="form.domicile_address.zip" label="zip"/>
                  </v-col>
                  <v-col>
                    <v-text-field v-model="form.domicile_address.country" label="country"/>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>


            <v-btn
              color="primary"
              @click="nextStep">
              Continue
            </v-btn>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-card class="mb-12" outlined>
              <v-card-title>First Trustees</v-card-title>
              <v-card-text>
                <div v-for="(item,index) in form.trustees.first" :key="index">
                  <v-row>
                    <v-col sm="9">
                      <v-text-field
                        v-model="form.trustees.first[index]"
                        dense
                        outlined
                        single-line/>
                    </v-col>
                    <v-col sm="3">
                      <v-icon v-if="index !== 0" @click="form.trustees.first.splice(index, 1)">mdi-trash-can</v-icon>
                    </v-col>
                  </v-row>
                </div>
                <v-icon @click="form.trustees.first.push('')">mdi-plus</v-icon>
              </v-card-text>
            </v-card>

            <v-card class="mb-12" outlined>
              <v-card-title>Second Trustees</v-card-title>
              <v-card-text>
                <v-row v-for="(item,index) in form.trustees.second" :key="index">
                  <v-col>
                    <v-text-field
                      v-model="form.trustees.second[index]"
                      outlined
                      single-line/>
                  </v-col>
                  <v-col>
                    <v-icon @click="form.trustees.second.splice(index, 1)">mdi-trash-can</v-icon>
                  </v-col>
                </v-row>

                <v-icon @click="form.trustees.second.push('')">mdi-plus</v-icon>
              </v-card-text>
            </v-card>

            <v-btn
              color="primary"
              @click="nextStep">
              Continue
            </v-btn>
          </v-stepper-content>
          <v-stepper-content step="4">
            <!-- -->
            <Beneficiaries :beneficiaries="form.beneficiaries"
                           @add="onAddBeneficiary"
                           @update="onUpdateBeneficiary"
                           @remove="onDeleteBeneficiary"/>
            <!-- -->


            <v-btn
              color="primary"
              @click="nextStep">
              Done
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </form>
    </v-stepper>
  </div>
</template>
<script>
  import moment from 'moment';
  import axios from 'axios';
  import Beneficiaries from './Beneficiaries';


  export default {
    props: ['project', 'client'],
    data() {
      const user = this.$page.props.auth.user.data;
      const documentData = this.project?.document_data;
      return {
        currentStep: 1,
        MenuDocumentCreated: '',
        form: this.$inertia.form(
          {
            trust_name: documentData?.trust_name || this.project.name,
            trustees: documentData?.trustees || {first: [`${this.client.first_name} ${this.client.last_name}`], second: []},
            settlor: documentData?.settlor || `${user.first_name} ${user.last_name}`,
            document_created_at: documentData?.document_created_at || this.moment().format('YYYY-MM-DD'),
            mailing_address: documentData?.mailing_address || {
              address: this.client.address,
              apt: '',
              city: this.client.city,
              state: this.client.state,
              zip: this.client.zip,
              country: this.client.country
            },
            domicile_address: documentData?.domicile_address || {
              address: '7512 Dr. Phillips Blvd.',
              apt: 'Suite #50-185',
              city: 'Orlando',
              state: 'Florida',
              zip: '32819',
              country: 'USA'
            },
            settlor_gift_type: documentData?.settlor_gift_type || 'CASH',
            settlor_gift: documentData?.settlor_gift || '100',
            term_of_trust: documentData?.term_of_trust || '99',
            beneficiaries: documentData?.beneficiaries || []
          }
        )
      };
    },
    methods: {
      moment,
      onAddBeneficiary(beneficiary) {
        this.form.beneficiaries.push(beneficiary);
        this.updateProject();
      },
      onDeleteBeneficiary(beneficiaryIndex) {
        this.form.beneficiaries.splice(beneficiaryIndex, 1);
        this.updateProject();
      },
      onUpdateBeneficiary(beneficiaries, index) {
        this.form.beneficiaries = beneficiaries;
        this.updateProject();
      },

      // onAddTrustee(Trustee) {
      //   this.form.trustees.push(Trustee);
      //   this.updateProject();
      // },
      // onDeleteTrustee(TrusteeIndex) {
      //   this.form.trustees.splice(TrusteeIndex, 1);
      //   this.updateProject();
      // },
      // onUpdateTrustee(trustees, index) {
      //   this.form.trustees = trustees;
      //   this.updateProject();
      // },

      updateProject() {
        console.log('updateProject');
        axios.post(`/admin/projects/${this.project.id}`, {
                     _method: 'PUT',
                     name: this.form.trust_name,
                     document_data: this.form.data()
                   },
                   {
                     params: {resetOnSuccess: false}
                   })
          // eslint-disable-next-line promise/always-return
          .then((result) => {
            this.$emit('updateProject', JSON.parse(result.config.data));
          });
      },
      onEnter() {
        console.log('save onEnter');
        this.updateProject();
      },
      nextStep() {
        const steps = this.$el.querySelectorAll('.v-stepper__step').length;
        this.currentStep = this.currentStep === steps ? 1 : Number(this.currentStep) + 1;

        if (this.currentStep <= steps) {
          this.updateProject();
        } else {
          this.updateForm();
        }
      },

      updateForm() {
        console.log('updateForm');
        this
          .form
          .transform((data) => ({
            name: this.form.trust_name,
            document_data: {...data}
          }))
          .put(`/admin/projects/${this.project.id}`,
               {
                 preserveScroll: true,
                 onSuccess: (e) => {
                   console.log(e);
                 }
               },
               {
                 resetOnSuccess: false
               });
      }
    },
    components: {
      Beneficiaries
    }
  };
</script>


<style>
.v-stepper--alt-labels .v-stepper__step{
  flex-basis: auto
}
</style>
