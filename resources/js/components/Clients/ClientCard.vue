<!--
 using vuetify ClientCard takes a prop of client
 -->

<!---->
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
                      @click.prevent="showCreateProject = true">
                mdi-folder-plus
              </v-icon>
            </template>
            <span>Add Project</span>
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

    <v-expansion-panels>
      <v-expansion-panel v-for="(project,i) in client.projects" :key="i">
        <v-expansion-panel-header>
          <v-row>
            <v-col>
              <span>{{ project.name }}</span>
            </v-col>
            <v-col align="right">
              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-icon v-bind="attrs"
                          v-on="on"
                          @click.prevent="showEditProject = true">
                    mdi-folder-edit
                  </v-icon>
                </template>
                <span>Edit Project</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <pre>{{ project }}</pre>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>


<script>
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
      }
    }
  };
</script>
