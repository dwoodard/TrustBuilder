<template>
  <v-container fluid>
    <v-toolbar class="sticky">
      <inertia-link href="/admin/clients" as="button">
        <v-icon>mdi-menu-left</v-icon>
      </inertia-link>

      <v-toolbar-title>
        <small>{{ client.first_name }} {{ client.last_name }}</small> {{ project.name }} ({{ project.type }})
      </v-toolbar-title>

      <v-spacer/>

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
    </v-toolbar>

    <TrustWizard/>

    <VueDocumentEditor
      v-if="content"
      ref="editor"
      class="editor" :content.sync="content"
      :overlay="null"
      :zoom="zoom"
      :display="display"/>
  </v-container>
</template>

<script>
  import VueDocumentEditor from 'vue-document-editor';
  import VueFileToolbarMenu from 'vue-file-toolbar-menu';
  import Admin from '../../../layouts/Admin/Layout';
  import Contract from '../../../document_templates/Contract';
  import Trust from '../../../document_templates/DeclarationOfTrust';
  import TrustWizard from '../../../document_templates/DeclarationOfTrust/TrustWizard';

  export default {
    layout: Admin,
    props: ['client', 'project'],
    data() {
      return {

        zoom: 1.0,
        zoom_min: 0.10,
        zoom_max: 2.0,
        display: 'grid', // ["grid", "vertical", "horizontal"]
        mounted: false, // will be true after this component is mounted
        undo_count: -1, // contains the number of times user can undo (= current position in content_history)
        content_history: [], // contains the content states for undo/redo operations


        form: this.$inertia.form({}),
        showDelete: false

      };
    },
    computed: {
      content: {
        get() {
          switch (this.project.type) {
            case 'Trust':
              return [
                {template: Trust, props: {client: this.client, project: this.project}}
              ];
            case 'Contract':
              return [
                {template: Contract, props: {client: this.client, project: this.project}}

              ];
            default:
              return null;
          }
        },
        set(value) {
          console.log(value.template);
        }
      },
      // This is the menu content
      menu() {
        return [
          // Main commands
          {
            text: 'Print',
            title: 'Print',
            icon: 'print',
            click: () => window.print()
          }

        ];
      }


    },
    methods: {
      // Page overlays (headers, footers, page numbers)
      overlay(page, total) {
        // Add page numbers on each page
        let html = `<div style="position: absolute; bottom: 8mm; ${
          (page % 2) ? 'right' : 'left'}: 10mm">Page ${page} of ${
          total}</div>`;
        // Add custom headers and footers from page 3
        if (page >= 3) {
          html += '<div style="position: absolute; left: 0; top: 0; right: 0; padding: 3mm 5mm; background: rgba(200, 220, 240, 0.5)"><strong>MYCOMPANY</strong> example.com /// This is a custom header overlay</div>';
          html += '<div style="position: absolute; left: 10mm; right: 10mm; bottom: 5mm; text-align:center; font-size:10pt">Copyright (c) 2020 Romain Lamothe, MIT License /// This is a custom footer overlay</div>';
        }
        return html;
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
      this.$nextTick((e) => {
        this.$el.querySelector('.page').style.height = 'auto';
      });


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
      // Manage history undo/redo events
      const manage_undo_redo = (e) => {
        switch (e && e.inputType) {
          case 'historyUndo':
            e.preventDefault();
            e.stopPropagation();
            this.undo();
            break;
          case 'historyRedo':
            e.preventDefault();
            e.stopPropagation();
            this.redo();
            break;
        }
      };
      window.addEventListener('beforeinput', manage_undo_redo);
      window.addEventListener('input', manage_undo_redo); // in case of beforeinput event is not implemented (Firefox)
      // If your component is susceptible to be destroyed, don't forget to
      // use window.removeEventListener in the Vue.js beforeDestroy handler
    },


    components: {
      TrustWizard,
      VueDocumentEditor,
      VueFileToolbarMenu
    }
  };
</script>

<style scoped>
.sticky{
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 1;
}
</style>
