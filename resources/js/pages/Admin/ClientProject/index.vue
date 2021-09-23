
<template>
  <v-container fluid>
    <v-toolbar>
      <inertia-link href="/admin/clients" as="button">
        <v-icon>mdi-menu-left</v-icon>
      </inertia-link>

      <v-toolbar-title><small>{{ client.first_name }} {{ client.last_name }}</small> {{ project.name }} ({{ project.type }})</v-toolbar-title>
      <v-spacer/>

      <!-- confirm delete dialog -->
      <v-dialog v-model="showDelete" max-width="500">
        <template #activator="{ on, attrs }">
          <v-btn
            text
            v-bind="attrs"
            v-on="on"
            @click="showDelete = !showDelete">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ 'Are you sure you want to delete this?' }}</span>
          </v-card-title>
          <v-card-text>
            <v-btn color="error" text @click.prevent="showDelete = false">{{ 'Cancel' }}</v-btn>
            <v-btn color="error" @click.native="onConfirmDelete">Delete</v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
      <!-- end confirm delete dialog -->
    </v-toolbar>

    <VueDocumentEditor :content.sync="content"/>


    <div>hey</div>

    <v-jsoneditor v-model="json" :plus="false" height="400px"/>


    <pre>{{ json }}</pre>
  </v-container>
</template>

<script>
  import VJsoneditor from 'v-jsoneditor/src/index';
  import VueDocumentEditor from 'vue-document-editor';
  import Admin from '@/layouts/Admin/Layout';


  export default {
    layout: Admin,
    name: 'Index',
    props: ['client', 'project'],
    data() {
      return {
        json: {
          trust_name: '',
          first_trustee: '',
          mail_address: {
            address: '',
            city: '',
            state: '',
            zip: '',
            county: ''
          },
          meeting_date: '',
          settlor: '',
          purpose_of_trust: '',
          settlor_gift: '',
          term_of_trust: '',
          secondary_trustees: [
            'John Doe'
          ]
        },

        content: [' Hello! Fill this page with text and new pages will be created as it overflows.', 'test'],

        form: this.$inertia.form({}),
        showDelete: false

      };
    },
    methods: {
      onConfirmDelete() {
        this.showDelete = false;
        this.form.delete(route('admin.projects.destroy', {
          project: this.project
        }));
      }
    },
    components: {
      VJsoneditor,
      VueDocumentEditor

    }
  };
</script>

<style scoped>

</style>
