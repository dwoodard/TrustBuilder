
<template>
  <v-container fluid>
    <v-toolbar>
      <v-toolbar-title>{{ client.first_name }} {{ client.last_name }} {{ project.name }}</v-toolbar-title>
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

      <v-menu offset-y>
        <template #activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            icon
            v-bind="attrs"
            v-on="on">
            <v-icon>
              mdi-plus
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in DocumentItems"
            :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>


    <v-card>
      <v-card-title>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="search"
              prepend-icon="mdi-magnify"
              label="Search"
              clearable/>
          </v-col>
        </v-row>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
  import Admin from '@/layouts/Admin/Layout';

  export default {
    layout: Admin,
    name: 'Index',
    props: ['client', 'project'],
    data() {
      return {
        search: null,
        form: this.$inertia.form({}),
        showDelete: false,
        DocumentItems: [
          {title: 'Trust'},
          {title: 'Schedule A'},
          {title: 'Schedule B'},
          {title: 'Schedule C'},
          {title: 'Schedule D'},
          {title: 'Allodial Title'},
          {title: 'Meeting Minutes'}
        ]
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
    }
  };
</script>

<style scoped>

</style>
