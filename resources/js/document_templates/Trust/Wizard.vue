<template>
  <div>
    <template>
      <v-stepper v-model="currentStep" alt-labels>
        <div>
          <v-icon v-if="form.isDirty" color="danger">mdi-sticker-minus</v-icon>
          <v-icon v-else color="green">mdi-sticker-check</v-icon>
        </div>
        <v-stepper-header>
          <v-stepper-step
            editable
            :complete="currentStep > 1"
            step="1">
            Client Info
          </v-stepper-step>
          <v-divider/>
          <v-stepper-step
            editable
            :complete="currentStep > 2"
            :rules="[
              () => {return !!form.trust_name}
            ]"
            step="2">
            Trust Basic Info
          </v-stepper-step>
          <v-divider/>
          <v-stepper-step
            editable
            :complete="currentStep > 3"
            step="3">
            Trustees
          </v-stepper-step>
          <v-divider/>
          <v-stepper-step
            step="4"
            editable>
            Beneficiaries
          </v-stepper-step>
        </v-stepper-header>

        <form @keyup.enter="onEnter">
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-12" color="grey lighten-5">
                <v-flex md-6>
                  <v-text-field
                    v-model="form.first_trustee"
                    label="First Trustee"/>
                </v-flex>
              </v-card>

              <v-btn
                color="primary"
                @click="onClick">
                Continue
              </v-btn>
            </v-stepper-content>
            <v-stepper-content step="2">
              <v-card class="mb-12">
                <v-text-field
                  v-model="form.trust_name"
                  label="Trust Name"/>
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

                <v-text-field
                  v-model="form.settlor"
                  label="Settlor"/>

                <v-text-field
                  v-model="form.settlor_gift"
                  label="Settlor Gift"/>

                <v-text-field
                  v-model="form.term_of_trust"
                  label="Term Of Trust"/>
              </v-card>

              <v-btn
                color="primary"
                @click="onClick">
                Continue
              </v-btn>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-card class="mb-12">
                <v-text-field
                  v-model="form.trust_name"
                  label="TrustName"/>
              </v-card>

              <v-btn
                color="primary"
                @click="onClick">
                Continue
              </v-btn>
            </v-stepper-content>
            <v-stepper-content step="4">
              <!-- -->
              <!--            <pre>{{ form.beneficiaries }}</pre>-->
              <Beneficiaries :beneficiaries="form.beneficiaries"
                             @add="onAddBeneficiary"
                             @update="onUpdateBeneficiary"
                             @remove="onDeleteBeneficiary"/>
              <!-- -->


              <v-btn
                color="primary"
                @click="onClick">
                Done
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </form>
      </v-stepper>

      <VJsoneditor v-model="form" :plus="true" height="400px"/>
    </template>
  </div>
</template>
<script>
  import moment from 'moment';
  import VJsoneditor from 'v-jsoneditor';
  import Beneficiaries from './Beneficiaries';

  export default {
    props: ['project', 'client'],
    data() {
      const user = this.$page.props.auth.user.data;
      const documentData = this.project?.document_data;
      return {
        currentStep: 1,
        MenuDocumentCreated: '',
        form: this.$inertia.form({
          trust_name: documentData?.trust_name || this.project.name,
          first_trustee: documentData?.first_trustee || `${this.client.first_name} ${this.client.last_name}`,
          settlor: documentData?.settlor || `${user.first_name} ${user.last_name}`,
          document_created_at: documentData?.document_created_at || this.moment().format('YYYY-MM-DD'),
          mailing_address: documentData?.mailing_address || {
            address: null,
            city: null,
            state: null,
            zip: null,
            county: null
          },
          domicile_address: documentData?.domicile_address || {
            address: null,
            city: null,
            state: null,
            zip: null,
            county: null
          },
          settlor_gift: documentData?.settlor_gift || '$100',
          term_of_trust: documentData?.term_of_trust || '99',
          secondary_trustees: documentData?.secondary_trustees || [],
          beneficiaries: documentData?.beneficiaries || []
        })
      };
    },
    methods: {
      moment,
      onAddBeneficiary(beneficiary) {
        this.form.beneficiaries.push(beneficiary);
        this.updateProject();
      },
      onDeleteBeneficiary(beneficiaryIndex) {
        this.form.beneficiaries.slice(beneficiaryIndex, 1);
        this.updateProject();
      },
      onUpdateBeneficiary(beneficiaries, index) {
        this.form.beneficiaries = beneficiaries;
        this.updateProject();
      },
      updateProject() {
        this
          .form.transform((data) => ({
            name: this.form.trust_name,
            document_data: {...data}
          }))
          .put(`/admin/projects/${this.project.id}`, {
                 preserveScroll: true,
                 onSuccess: (e) => {
                   console.log(e);
                 }
               },
               {
                 resetOnSuccess: false
               });
      },
      onEnter() {
        this.updateProject();
      },
      onClick() {
        const steps = this.$el.querySelectorAll('.v-stepper__step').length;
        this.currentStep = this.currentStep === steps ? 1 : this.currentStep + 1;
        // this.updateProject();
      }
    },
    components: {
      Beneficiaries,
      VJsoneditor
    }
  };
</script>
