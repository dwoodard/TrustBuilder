<template>
  <v-card>
    <v-card-title>
      <v-row>
        <v-col>
          <span>{{ client.first_name }} {{ client.last_name }}</span>
        </v-col>

        <v-col align="right">
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-icon v-bind="attrs"
                      v-on="on"
                      @click.stop="showCreateProject = true">
                mdi-folder-plus
              </v-icon>
            </template>
            <span>Add Project</span>
            <ClientProjectCreate v-model="showCreateProject" :client="client"/>
          </v-tooltip>
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <inertia-link :href="editClient()" as="v-icon" v-bind="attrs" v-on="on">
                mdi-account-edit
              </inertia-link>
            </template>
            <span>Edit Client</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-card-title>


    <v-container>
      <v-row v-for="(project,i) in client.projects" :key="i" justify="2" class="grey lighten-4">
        <v-col>
          <span>{{ project.name }}</span>
        </v-col>
        <v-col align="right">
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <inertia-link :href="editClientProject(project)" as="v-icon" v-bind="attrs" v-on="on">
                mdi-folder-edit
              </inertia-link>
            </template>
            <span>Edit Project</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  import ClientProjectCreate from '@/pages/Admin/ClientProject/create';
  import UiAvatar from '@/components/UiAvatar';

  export default {
    props: {
      client: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        showCreateProject: false,
        showEditClient: false
      };
    },
    methods: {
      editClient() {
        return this.route('admin.clients.edit', {id: this.client.id});
      },
      editClientProject(project) {
        this.showEditProject = true;

        return this.route('admin.client.project.index', {
          client: this.client.id,
          project: project.id
        });
      }
    },
    components: {
      ClientProjectCreate,
      UiAvatar
    }
  };
</script>
