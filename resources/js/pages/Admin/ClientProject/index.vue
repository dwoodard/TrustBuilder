
<template>
  <v-container fluid>
    <v-toolbar color="primary">
      <v-toolbar-title>{{ client.first_name }} {{ client.last_name }} {{ project.name }}</v-toolbar-title>

      <v-toolbar-items>
        <v-toolbar-item>test</v-toolbar-item>
      </v-toolbar-items>
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
    props: ['client', 'project']
  };
</script>

<style scoped>

</style>
