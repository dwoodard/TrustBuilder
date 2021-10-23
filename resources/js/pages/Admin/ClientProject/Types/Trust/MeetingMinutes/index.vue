<template>
  <div id="meeting-minutes">
    <v-row no-gutters>
      <v-col cols="12" sm="2" style="height: 80vh; overflow-scrolling: touch"/>
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
  </div>
</template>
<script>
  export default {
    name: 'MeetingMinutes'
  };
</script>

<style scoped lang="scss">
  #meeting-minutes {}
</style>
