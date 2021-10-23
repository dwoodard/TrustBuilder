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
        <Documents :current-document="currentDocument"/>
      </v-tab-item>
      <v-tab-item value="meeting-minutes">
        <MeetingMinutes/>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
  import MeetingMinutes from '../../pages/Admin/ClientProject/Types/Trust/MeetingMinutes/index.vue';
  import Documents from '../../pages/Admin/ClientProject/Types/Trust/Documents/index.vue';

  export default {
    props: ['currentDocument'],
    data() {
      return {
        tab: 'meeting-minutes'
      };
    },

    components: {
      Documents,
      MeetingMinutes
    }
  };
</script>
