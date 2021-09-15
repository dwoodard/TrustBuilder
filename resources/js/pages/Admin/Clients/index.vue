<template>
  <v-container fluid>
    <v-app-bar>
      <v-toolbar-title>Clients</v-toolbar-title>
      <v-spacer/>
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-icon v-bind="attrs"
                  v-on="on"
                  @click.stop="ShowCreateClient=true">
            mdi-text-box-plus
          </v-icon>
        </template>
        <span>Add Client</span>
      </v-tooltip>

      <ShowCreateClient v-model="ShowCreateClient"/>
    </v-app-bar>

    <v-row class="mt-4">
      <v-col v-for="(client,index) in clients" :key="client.id" cols="12" sm="12" md="4">
        <v-card>
          <v-app-bar flat>
            <v-app-bar-nav-icon/>
            <v-spacer/>
            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>

          <v-card-title class="mt-8">
            <p class="ml-3">
              {{ client.first_name }} {{ client.last_name }}
            </p>
          </v-card-title>

          <v-card-text>
            <v-list-item-title>title</v-list-item-title>
            <v-list-group>
              <v-list-item>item</v-list-item>
            </v-list-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>


    <div>
      {{ clients }}
    </div>
  <!--  list of clients  -->
  </v-container>
</template>

<script>

  import Admin from '@/layouts/Admin/Layout';
  import ShowCreateClient from '@/pages/Admin/Clients/create';

  export default {
    layout: Admin,
    props: ['clients'],
    data() {
      return {
        ShowCreateClient: false
      };
    },
    components: {
      ShowCreateClient
    }
  };
</script>
