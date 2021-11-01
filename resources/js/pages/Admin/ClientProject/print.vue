<template>
  <v-container>
    <div v-for="template in dynamicComponents">

      <component :is="template"
                 :project.sync="project"
                 :client.sync="client"/>
      <div class="break-before"></div>
    </div>
  </v-container>
</template>

<script>
  import DocumentTemplate from '../../../layouts/Admin/DocumentTemplate';
  require('../../../../sass/print.css')

  export default {
    layout: DocumentTemplate,
    props: ['client', 'project', 'templates'],
    data() {
      return {


      };
    },
    mounted () {

    },
    computed: {
      dynamicComponents() {
        return this.templates.map((template) => () => import(`../../../document_templates/${this.project.type}/${template}`));
      }
    },



  };
</script>

<style scoped>
 </style>
