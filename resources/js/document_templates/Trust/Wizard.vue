<template>
  <div>
    <template>
      <v-stepper v-model="currentStep" alt-labels>
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
            :rules="[() => true]"
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

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-12" color="grey lighten-5">
              <v-flex md-6>
                <v-text-field
                  v-model="form.trust_name"
                  label="Trust Name"
                  @blur="updateProject"
                  @keydown.enter="updateProject"/>

                <v-text-field
                  v-model="form.first_trustee"
                  label="First Trustee"
                  @blur="updateProject"
                  @keydown.enter="updateProject"/>
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
                  show-adjacent-months
                  @blur="updateProject"
                  @keydown.enter="updateProject"/>
              </v-menu>

              <v-text-field
                v-model="form.settlor"
                label="Settlor"
                @blur="updateProject"
                @keydown.enter="updateProject"/>
            </v-card>

            <v-btn
              color="primary"
              @click="onClick">
              Continue
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card class="mb-12">
              <!-- -->
            </v-card>

            <v-btn
              color="primary"
              @click="onClick">
              Continue
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="4">
            <v-card class="mb-12">
              <!-- -->
            </v-card>

            <v-btn
              color="primary"
              @click="onClick">
              Done
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </template>
  </div>
</template>
<script>
  import moment from 'moment';

  export default {
    props: ['project', 'client'],
    data() {
      return {
        currentStep: 1,
        MenuDocumentCreated: '',
        form: this.$inertia.form({
          trust_name: this.project?.document_data?.trust_name || this.project.name,
          first_trustee: this.project?.document_data?.first_trustee || `${this.client.first_name} ${this.client.last_name}`,
          settlor: this.project?.document_data?.settlor,
          document_created_at: this.project?.document_data?.document_created_at || this.moment().format('YYYY-MM-DD')
        })
        // document_data: {
        //   trust_name: null,
        //   first_trustee: null,
        //   mail_address: {
        //     address: null,
        //     city: null,
        //     state: null,
        //     zip: null,
        //     county: null
        //   },
        //   meeting_date: null,
        //   settlor: null,
        //   settlor_gift: null,
        //   term_of_trust: null,
        //   secondary_trustees: [
        //     'John Doe'
        //   ]
        // }
      };
    },
    methods: {
      moment,
      updateProject() {
        this.form.put(route('admin.projects.update', {
          project: this.project.id,
          document_data: this.form.data()
        }));

        this.$emit('updateProject');
      },
      onClick() {
        const steps = this.$el.querySelectorAll('.v-stepper__step').length;
        this.currentStep = this.currentStep === steps ? 1 : this.currentStep + 1;
        this.updateProject();
      }
    }
  };
</script>
