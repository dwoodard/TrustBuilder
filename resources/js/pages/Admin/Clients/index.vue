<template>
  <v-container fluid>
    <v-app-bar>
      <v-toolbar-title>Clients</v-toolbar-title>
      <v-spacer/>
      <v-text-field v-model="search"
                    label="Search"
                    solo
                    dense
                    clearable
                    hint="first_name, last_name, email, phone, city, zip"
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
      <v-col v-for="(client) in filteredClients" :key="client.id" cols="12" sm="12" md="4">
        <ClientCard :client="client"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ClientCard from '@/components/Clients/ClientCard';
  import Admin from '@/layouts/Admin/Layout';
  import ShowCreateClient from '@/pages/Admin/Clients/create';
  import {score} from '@/helper';

  export default {
    layout: Admin,
    props: ['clients', 'documentTypes'],
    data() {
      return {
        search: '',
        ShowCreateClient: false
      };
    },
    computed: {
      filteredClients() {
        if (this.search === '') {
          return this.clients.data;
        }
        return this.clients.data.filter((client) => {
          return client.first_name?.score(this.search) > 0.4
            || client.last_name?.score(this.search) > 0.4
            || client.email?.score(this.search) > 0.4
            || client.phone?.score(this.search) > 0.4
            || client.city?.score(this.search) > 0.4
            || client.zip?.score(this.search) > 0.4;
        });
      }
    },
    mounted() {
      // eslint-disable-next-line no-extend-native
      String.prototype.score = score;
    },
    components: {
      ShowCreateClient,
      ClientCard
    }
  };
</script>
