<template>
  <div style="margin-top: 128px">
    <v-app-bar app style="margin-top: 128px">
      <v-tabs v-model="tab" fixed-tabs background-color="primary lighten-4">
        <v-tab href="#documents">
          Documents
        </v-tab>
        <v-tab href="#meeting-minutes">
          Meeting Minutes
        </v-tab>
      </v-tabs>
    </v-app-bar>


    <v-tabs-items v-model="tab">
      <v-tab-item value="documents">
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
      </v-tab-item>
      <v-tab-item value="meeting-minutes">
        <v-row no-gutters>
          <v-col cols="12" sm="2" style="height: 80vh; overflow-scrolling: touch">
            <MeetingMinutesList/>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card class="pa-2" outlined tile>
              One of three columns
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card class="pa-2" outlined tile>
              One of three columns
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import DocumentViewer from '../../components/DocumentViewer';
import MeetingMinutesList from './MeetingMinutesList';

export default {
    props: ['currentDocument'],
    data() {
      return {

        tab: null

      };
    },
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
    components: {
      MeetingMinutesList,
      DocumentViewer
    }
  };
</script>
