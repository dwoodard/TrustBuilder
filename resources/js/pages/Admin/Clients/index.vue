<template>
  <v-container fluid>
    <v-app-bar>
      <v-toolbar-title>Clients</v-toolbar-title>
      <v-spacer/>
      <v-text-field v-model="search"
                    label="Search"
                    solo
                    dense
                    append-icon="mdi-magnify"/>
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


    <v-row class="mt-2">
      <v-col v-for="(client,index) in filteredClients" :key="client.id" cols="12" sm="12" md="4">
        <ClientCard :client="client"/>
      </v-col>
    </v-row>
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
        search: '',
        ShowCreateClient: false,
        reveal: false
      };
    },
    computed: {
      filteredClients() {
        return this.clients.data.filter((client) => {
          // filter by first_name or last_name
          return client.first_name.toLowerCase().includes(this.search.toLowerCase()) // filter by first_name
            || client.last_name.toLowerCase().includes(this.search.toLowerCase()) // filter by last_name
            || client.email.toLowerCase().includes(this.search.toLowerCase()) // filter by email
            || client.phone.toLowerCase().includes(this.search.toLowerCase()); // filter by phone
        });
      }
    },
    components: {
      ShowCreateClient,
      UiAvatar,
      ClientCard

    }
  };
</script>
