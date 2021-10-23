<template>
  <v-card flat>
    <v-sheet class="warm" style="position: relative;">
      <v-container id="document-container" fluid>
        <v-row no-gutters>
          <v-col cols="12" sm="12" md="4">
            <component :is="content[0].wizard"
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
  import DocumentViewer from '../../../../../../components/DocumentViewer';

  export default {
    props: ['currentDocument'],
    computed: {
      content() {
        console.log(this.currentDocument);

        return [{
          template: () => import(`@/document_templates/${this.$page.props.project.type}/${this.currentDocument}`),
          wizard: () => import(`@/document_templates/${this.$page.props.project.type}/Wizard`),
          props: {client: this.$page.props.client, project: this.$page.props.project}
        }];
      }
    },
    components: {DocumentViewer}
  };
</script>
