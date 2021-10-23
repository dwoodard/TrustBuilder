<template>
  <v-card flat>
    <v-sheet class="warm" style="position: relative;">
      <v-container id="document-container" fluid>
        <v-row no-gutters>
          <v-col cols="12" sm="12" md="4">
            <Wizard
              :project.sync="$page.props.project"
              :client.sync="$page.props.client"
              :templates.sync="$page.props.templates"/>
          </v-col>
          <v-col cols="12" sm="12" md="8" style="overflow:scroll;">
            <DocumentViewer :content="content"/>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-card>
</template>
<script>
  import DocumentViewer from '@/components/DocumentViewer';
  import Wizard from './Wizard';

  export default {
    props: ['currentDocument'],
    computed: {
      content() {
        console.log(this.currentDocument);

        return [{
          template: () => import(`@/document_templates/${this.$page.props.project.type}/${this.currentDocument}`),
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
