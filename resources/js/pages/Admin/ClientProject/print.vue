<template>
  <v-container>
    <component :is="project.type" :project.sync="project"
               :client.sync="client"/>
  </v-container>
</template>

<script>
  import DeclarationOfTrust from '../../../document_templates/DeclarationOfTrust';
  import TrustIndenture from '../../../document_templates/TrustIndenture';
  import DocumentTemplate from '../../../layouts/Admin/DocumentTemplate';

  export default {
    layout: DocumentTemplate,
    props: ['client', 'project'],
    data() {
      return {

      };
    },
    computed: {

    },


    components: {
      DeclarationOfTrust,
      TrustIndenture
    }


  };
</script>

<style scoped>

</style>
