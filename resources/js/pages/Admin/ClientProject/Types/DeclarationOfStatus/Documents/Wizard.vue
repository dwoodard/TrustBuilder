<template>
  <div>
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
          step="2"
          editable>
          Status Info
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12" color="grey lighten-5">
            <v-flex md-6>
              <v-text-field
                v-model="form.name"
                label="Name"
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
          <v-card class="mb-12" color="grey lighten-5">
            <v-flex md-6>
              Status Info
            </v-flex>
          </v-card>

          <v-btn
            color="primary"
            @click="onClick">
            Continue
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
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
          name: this.project?.project_data?.name || this.project.name,
          first_trustee: this.project?.project_data?.first_trustee || `${this.client.first_name} ${this.client.last_name}`,
          settlor: this.project?.project_data?.settlor,
          document_created_at: this.project?.project_data?.document_created_at || this.moment().format('YYYY-MM-DD')
        })
      };
    },
    methods: {
      moment,
      updateProject() {
        this.form.put(route('admin.projects.update', {
          project: this.project.id,
          project_data: this.form.data()
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
