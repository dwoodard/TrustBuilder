<template>
  <div>
    <v-app-bar>
      <inertia-link href="/admin/clients" as="button">
        <v-icon>mdi-menu-left</v-icon>
      </inertia-link>

      <v-toolbar-title>
        <small>{{ client.first_name }} {{ client.last_name }}</small> {{ project.name }} ({{ pascelToTitleCase(project.type) }})
      </v-toolbar-title>

      <v-spacer/>

      <v-select
        v-model="currentDocument"
        max-width="200"
        :items="templates"/>
      <VueFileToolbarMenu :content="menu" class="bar"/>

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
    </v-app-bar>


    <v-container id="document-container" fluid>
      <v-row no-gutters>
        <v-col cols="12" sm="12" md="4">
          <component :is="content[0].wizard"
                     :project.sync="project"
                     :client.sync="client"
                     @updateProject="onUpdateProject"/>
        </v-col>
        <v-col cols="12" sm="12" md="8">
          <VueDocumentEditor
            v-if="content"
            ref="editor"
            class="editor" :content.sync="content"
            :overlay="null"
            :zoom="zoom"
            :display="display"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import VueDocumentEditor from 'vue-document-editor';
  import VueFileToolbarMenu from 'vue-file-toolbar-menu';
  import Admin from '@/layouts/Admin/Layout';


  import {pascelToTitleCase} from '@/helper';

  export default {
    layout: Admin,
    props: ['client', 'project', 'templates'],
    data() {
      return {
        currentDocument: this.templates[0],
        zoom: 1.0,
        zoom_min: 0.10,
        zoom_max: 2.0,
        display: 'grid', // ["grid", "vertical", "horizontal"]
        mounted: false, // will be true after this component is mounted
        undo_count: -1, // contains the number of times user can undo (= current position in content_history)
        content_history: [], // contains the content states for undo/redo operations

        form: this.$inertia.form({
          project: this.project.id,
          document_data: this.project.document_data
        }),
        showDelete: false

      };
    },
    computed: {

      content() {
        console.log(this.currentDocument);

        return [{
          template: () => import(`../../../document_templates/${this.project.type}/${this.currentDocument}`),
          wizard: () => import(`../../../document_templates/${this.project.type}/Wizard`),
          props: {client: this.client, project: this.project}
        }];
      },


      // This is the menu content
      menu() {
        return [
          // Main commands
          {
            text: 'Preview',
            title: 'Preview',
            icon: 'print',
            click: () => {
              window.open(`/admin/client/${this.client.id}/project/${this.project.id}/print`, '_blank');
            }
          }

        ];
      }


    },
    methods: {
      pascelToTitleCase,
      updatePageHeight() {
        this.$nextTick((e) => {
          this.onUpdateProject();
        });
      },


      onUpdateProject() {
        this.$el.querySelector('.page').style.height = 'auto';
        this.$el.querySelector('.page').style.top = '0';
      },

      // Delete
      onConfirmDelete() {
        this.showDelete = false;
        this.form.delete(route('admin.projects.destroy', {
          project: this.project
        }));
      }
    },
    watch: {
      content: {
        immediate: true,
        handler(newContent) {}
      }
    },
    mounted() {
      this.mounted = true;
    },
    created() {
      console.log('created');
      this.updatePageHeight();


      // Initialize gesture flags
      let startZoomGesture = false;
      let startDistTouch = false;
      let startZoomTouch = false;
      // Manage ctrl+scroll zoom (or trackpad pinch)
      window.addEventListener('wheel', (e) => {
        if (e.ctrlKey) {
          e.preventDefault();
          this.zoom = Math.min(
            Math.max(this.zoom - e.deltaY * 0.01, this.zoom_min), this.zoom_max
          );
        }
      }, {passive: false});
      // Manage trackpad pinch on Safari
      window.addEventListener('gesturestart', (e) => {
        e.preventDefault();
        startZoomGesture = this.zoom;
      });
      window.addEventListener('gesturechange', (e) => {
        e.preventDefault();
        if (!startZoomTouch) {
          this.zoom = Math.min(
            Math.max(startZoomGesture * e.scale, this.zoom_min), this.zoom_max
          );
        }
      });
      window.addEventListener('gestureend', () => {
        startZoomGesture = false;
      });
      // Manage pinch to zoom for touch devices
      window.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) {
          e.preventDefault();
          startDistTouch = Math.hypot(
            e.touches[0].pageX - e.touches[1].pageX,
            e.touches[0].pageY - e.touches[1].pageY
          );
          startZoomTouch = this.zoom;
        }
      }, {passive: false});
      window.addEventListener('touchmove', (e) => {
        if (startDistTouch && startZoomTouch) {
          e.preventDefault();
          const zoom = startZoomTouch * Math.hypot(
            e.touches[0].pageX - e.touches[1].pageX,
            e.touches[0].pageY - e.touches[1].pageY
          ) / startDistTouch;
          this.zoom = Math.min(Math.max(zoom, this.zoom_min), this.zoom_max);
        }
      }, {passive: false});
      window.addEventListener('touchend', () => {
        startDistTouch = false;
        startZoomTouch = false;
      }, {passive: false});

      // If your component is susceptible to be destroyed, don't forget to
      // use window.removeEventListener in the Vue.js beforeDestroy handler
    },

    updated() {
      this.updatePageHeight();
    },


    components: {
      VueDocumentEditor,
      VueFileToolbarMenu
    }


  };
</script>

<style scoped>

</style>
