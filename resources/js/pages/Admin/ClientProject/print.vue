<template>
  <v-container>
    <component :is="DocumentTemplateType"
               :project.sync="project"
               :client.sync="client"/>
  </v-container>
</template>

<script>
  import DocumentTemplate from '../../../layouts/Admin/DocumentTemplate';

  export default {
    layout: DocumentTemplate,
    props: ['client', 'project'],
    computed: {
      DocumentTemplateType() {
        return () => import(`../../../document_templates/${this.project.type}`);
      }
    },
  };
</script>

<style scoped>

</style>
