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
          Info
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form ref="form">
            <v-text-field
              v-model="form.first_name"
              dense
              :error-messages="form.errors.first_name"
              label="First name"
              required/>
            <v-text-field
              v-model="form.last_name"
              dense
              :error-messages="form.errors.last_name"
              label="Last name"
              required/>
            <v-text-field
              v-model="form.email"
              dense
              :error-messages="form.errors.email"
              label="Email"
              required/>
            <v-text-field
              v-model="form.phone"
              dense
              :error-messages="form.errors.phone"
              label="Phone"
              required/>
            <v-text-field
              v-model="form.address"
              dense
              :error-messages="form.errors.address"
              label="Address"
              required/>
            <v-text-field
              v-model="form.city"
              dense
              :error-messages="form.errors.city"
              label="City"
              required/>
            <v-text-field
              v-model="form.state"
              dense
              :error-messages="form.errors.state"
              label="State"
              required/>
            <v-text-field
              v-model="form.zip"
              dense
              :error-messages="form.errors.zip"
              label="Zip"
              required/>
            <v-text-field
              v-model="form.country"
              dense
              :error-messages="form.errors.country"
              label="Country"
              required/>
            <v-text-field
              v-model="form.company"
              dense
              :error-messages="form.errors.company"
              label="Company"
              required/>
            <v-select
              v-model="form.status"
              dense
              :error-messages="form.errors.status"
              label="Status"
              required>
              <v-option
                v-for="status in ['active', 'inactive']"
                :key="status"
                :value="status">
                {{ status }}
              </v-option>
            </v-select>
            <v-textarea
              v-model="form.notes"
              dense
              :error-messages="form.errors.notes"
              label="Notes"
              required/>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Projects</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-data-table
            :headers="[
              {
                text: 'Name',
                align: 'start',
                sortable: true,
                value: 'name'
              },
              {
                text: 'Actions',
                value: 'actions',
                sortable: false
              }
            ]"
            :items="form.projects">
            <template #item.actions="{ item }">
              <inertia-link :href="`/admin/projects/${item.id}/edit`" as="button">
                <v-icon small class="mr-2">
                  mdi-pencil
                </v-icon>
              </inertia-link>
              <v-icon
                small
                @click="deleteItem(item)">
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
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
