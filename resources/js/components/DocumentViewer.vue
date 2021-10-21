<template>
  <VueDocumentEditor
    v-if="content"
    ref="editor"
    class="editor"
    :content.sync="content"
    :overlay="null"
    :zoom="zoom"
    :display="display"/>
</template>
<script>
  import VueDocumentEditor from 'vue-document-editor';

  export default {
    name: 'DocumentViewer',
    props: [
      'content'
    ],
    data() {
      return {
        zoom: 1.0,
        zoom_min: 0.10,
        zoom_max: 2.0,
        display: 'grid', // ["grid", "vertical", "horizontal"]
        mounted: false, // will be true after this component is mounted
        undo_count: -1, // contains the number of times user can undo (= current position in content_history)
        content_history: [] // contains the content states for undo/redo operations
      };
    },
    methods: {
      onUpdateProject() {
        console.log('onUpdateProject');

        this.$el.querySelector('.page').style.height = 'auto';
        this.$el.querySelector('.page').style.top = '0';
      },
      updatePageHeight() {
        this.$nextTick((e) => {
          this.onUpdateProject();
        });
      }
    },
    watch: {
      content: {
        immediate: true,
        handler(newContent) {
          this.$nextTick((e) => {
            this.onUpdateProject();
          });
        }


      }
    },

    created() {
      this.updatePageHeight();
      console.log('created');

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
    },
    mounted() {
      this.mounted = true;
    },
    components: {VueDocumentEditor}
  };
</script>
