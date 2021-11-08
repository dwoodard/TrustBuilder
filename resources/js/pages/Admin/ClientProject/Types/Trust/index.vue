<template>
  <div style="margin-top: 128px">
    <v-app-bar app style="margin-top: 128px">
      <v-tabs v-model="tab" fixed-tabs background-color="primary lighten-4">
        <v-tab href="#documents">
          Documents
        </v-tab>
      </v-tabs>
    </v-app-bar>


    <v-tabs-items v-model="tab">
      <v-tab-item value="documents">
        <Documents :current-document="currentDocument"/>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
  import Documents from './Documents/index.vue';

  export default {
    props: ['currentDocument'],
    data() {
      return {
        tab: null// 'meeting-minutes'
      };
    },

    components: {
      Documents
    }
  };
</script>
