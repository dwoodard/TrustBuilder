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
      <v-row v-for="(project,i) in client.projects" :key="i" class="projects grey lighten-4" :class="`status-${project.status}`">
        <v-col class="project-col">
          <span>({{ pascalToTitleCase(project.type ) }} ) <br/>{{ projectName(project) }}</span>
        </v-col>


        <v-col align="right">
          <v-dialog
            v-model="statusDialog"
            width="500">
            <template #activator="{ on, attrs }">
              <v-icon v-bind="attrs"
                      v-on="on"
                      @click.stop="statusDialog = true">
                mdi-information-outline
              </v-icon>
            </template>

            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                {{ projectName(project) }} Status
              </v-card-title>

              <v-card-text>
                <v-select
                  v-model="project.status"
                  :items="['new', 'in-progress', 'pending', 'completed', 'cancelled']"
                  label="Status"
                  outlined
                  class="mt-4"
                  item-text="name"
                  item-value="id"
                  @change="updateProject(project)"/>
              </v-card-text>

              <v-divider/>
            </v-card>
          </v-dialog>


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
  import axios from 'axios';
  import ClientProjectCreate from '@/pages/Admin/ClientProject/create';
  import {pascalToTitleCase} from '@/helper';

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
        showEditClient: false,
        showStatus: false,
        statusDialog: false
      };
    },

    methods: {
      updateProject(project) {
        axios.post(`/admin/projects/${project.id}`, {
          _method: 'PUT',
          ...project,
          redirect_route: 'admin.clients.index'
        })
          // eslint-disable-next-line promise/always-return
          .then((response) => {
            this.statusDialog = false;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      projectName(project) {
        return project.project_data.name;
      },
      pascalToTitleCase,
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
      ClientProjectCreate
    }
  };
</script>

<style lang="scss">
  .projects{
    .project-col{

      .status-new {
        background: #d93731;
      }
      .status-in-progress {
        border-left: #00a6ff;
      }
      .status-done {
        border-left: #4caf50;
      }

    }
  }


</style>
