<template>
  <v-container fluid>
    <v-app-bar>
      <inertia-link href="/admin/clients" as="button">
        <v-icon>mdi-menu-left</v-icon>
      </inertia-link>
      <v-toolbar-title>
        {{ form.first_name }} {{ form.last_name }}
      </v-toolbar-title>
    </v-app-bar>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          Client Info
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form ref="form">
            <div class="d-flex ">
              <v-text-field v-model="form.first_name"
                            filled
                            :error-messages="form.errors.first_name"
                            label="First name"
                            required/>
              <v-text-field v-model="form.last_name"
                            filled
                            :error-messages="form.errors.last_name"
                            label="Last name"
                            required/>
            </div>

            <div class="d-flex">
              <v-text-field v-model="form.email"
                            filled
                            :error-messages="form.errors.email"
                            label="Email"
                            required/>
              <v-text-field v-model="form.phone"
                            filled
                            :error-messages="form.errors.phone"
                            label="Phone"
                            required/>
            </div>

            <v-text-field v-model="form.address"
                          filled
                          :error-messages="form.errors.address"
                          label="Address"
                          required/>

            <div class="d-flex">
              <v-text-field v-model="form.city"
                            filled
                            :error-messages="form.errors.city"
                            label="City"
                            required/>
              <v-text-field v-model="form.state"
                            filled
                            :error-messages="form.errors.state"
                            label="State"
                            required/>
              <v-text-field v-model="form.zip"
                            filled
                            :error-messages="form.errors.zip"
                            label="Zip"
                            required/>
            </div>

            <v-text-field v-model="form.country"
                          filled
                          :error-messages="form.errors.country"
                          label="Country"
                          required/>
            <v-text-field v-model="form.company"
                          filled
                          :error-messages="form.errors.company"
                          label="Company"
                          required/>
            <v-select
              v-model="form.status"
              :error-messages="form.errors.status"
              label="Status"
              required
              :items="['active', 'inactive']"/>
            <v-textarea
              v-model="form.notes"
              :error-messages="form.errors.notes"
              label="Notes"
              required/>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-btn @click="submit">Save</v-btn>

    <ActionMessage :on="form.recentlySuccessful" class="ml-3">
      Saved.
    </ActionMessage>
  </v-container>
</template>


<script>
  import Admin from '@/layouts/Admin/Layout';
  import ActionMessage from '@/components/ActionMessage';

  export default {
    props: ['client'],
    layout: Admin,

    data() {
      return {
        form: this.$inertia.form({...this.client.data[0]})
      };
    },
    methods: {
      submit() {
        this.form.put(this.route('admin.clients.update', this.form), {
          onSuccess: (data) => {
          // console.log(data);
          }
        });
      }
    },
    components: {ActionMessage}
  };
</script>
