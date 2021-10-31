<template>
  <div style="margin-top: 64px">
    <v-app-bar dark flat app class="primary rounded-0 text--white" fixed style="top:64px">
      <v-row>
        <v-col xs3 class="d-flex align-center">
          <inertia-link href="/admin/clients" as="button">
            <v-icon color="white">mdi-menu-left</v-icon>
          </inertia-link>
          <span class="heading">{{ project.name }}</span>
        </v-col>

        <v-col xs3>
          <v-btn icon @click="onPrint">
            <v-icon>mdi-printer</v-icon>
            <div>Print</div>
          </v-btn>
        </v-col>

        <v-col xs3>
          <v-select
            v-model="currentDocument"
            hide-details="auto"
            prepend-icon="mdi-file-document-multiple-outline"
            dark
            dense
            filled
            max-width="200"
            :items="templates"/>
        </v-col>
        <v-col xs3 class="d-flex justify-end">
          <v-dialog v-model="showDelete" max-width="500">
            <template #activator="{ on, attrs }">
              <v-btn dark
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
        </v-col>
      </v-row>
    </v-app-bar>

    <component :is="documentTemplateType"
               :project.sync="project"
               :client.sync="client"
               :current-document.sync="currentDocument"/>
  </div>
</template>

<script>
  import Admin from '@/layouts/Admin/Layout';
  import {pascalToTitleCase} from '@/helper';

  export default {
    layout: Admin,
    props: ['client', 'project', 'templates'],
    data() {
      return {
        currentDocument: this.templates[0],
        form: this.$inertia.form({
          project: this.project.id,
          project_data: this.project.project_data
        }),
        showDelete: false
      };
    },
    computed: {
      documentTemplateType() {
        return () => import(`./Types/${this.project.type}/index.vue`)
      }
    },
    methods: {
      pascalToTitleCase,
      onPrint() {
        window.open(`/admin/client/${this.client.id}/project/${this.project.id}/print`, '_blank');
      },
      onConfirmDelete() {
        this.showDelete = false;
        this.form.delete(route('admin.projects.destroy', {
          project: this.project
        }));
      }
    }


  };
</script>
