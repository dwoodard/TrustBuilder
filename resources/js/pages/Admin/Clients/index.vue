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
      <v-col v-for="(client,index) in clients" :key="client.id" cols="12" sm="12" md="3">
        <ClientCard :client="client"/>
      </v-col>
    </v-row>


    <!--    <div>{{ clients }}</div>-->
  <!--  list of clients  -->
  </v-container>
</template>

<script>
  import ClientCard from '@/components/Clients/ClientCard';
  import UiAvatar from '@/components/UiAvatar';
  import Admin from '@/layouts/Admin/Layout';
  import ShowCreateClient from '@/pages/Admin/Clients/create';

  export default {
    layout: Admin,
    props: ['clients'],
    data() {
      return {
        ShowCreateClient: false,
        reveal: false
      };
    },
    components: {
      ShowCreateClient,
      UiAvatar,
      ClientCard

    }
  };
</script>
