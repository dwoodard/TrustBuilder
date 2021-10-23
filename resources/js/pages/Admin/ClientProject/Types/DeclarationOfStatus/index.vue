<template>
  <div>
    <v-sheet class="warm" style="position: relative;">
      <v-container id="document-container" fluid>
        <v-row no-gutters>
          <v-col cols="12" sm="12" md="4">
            <Wizard
              :project.sync="$page.props.project"
              :client.sync="$page.props.client"
              :templates.sync="$page.props.templates"/>
          </v-col>
          <v-col cols="12" sm="12" md="8">
            <DocumentViewer :content="content"/>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
  import DocumentViewer from '@/components/DocumentViewer';
  import Wizard from './Documents/Wizard.vue';

  export default {
    props: ['currentDocument'],
    data() {
      return {};
    },
    computed: {
      content() {
        console.log(this.currentDocument);

        return [{
          template: () => import(`@/document_templates/${this.$page.props.project.type}/${this.currentDocument}/index.vue`),
          props: {
            client: this.$page.props.client,
            project: this.$page.props.project
          }
        }];
      }
    },
    components: {
      Wizard,
      DocumentViewer
    }
  };
</script>
