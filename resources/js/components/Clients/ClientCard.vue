<!--
 using vuetify ClientCard takes a prop of client
 -->

<!---->
<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{ client.first_name }} {{ client.last_name }}</span>
    </v-card-title>

    <v-card-actions>
      <v-spacer/>
      <!--create a icon that has a dropdown button and expanding panel that shows a list of projects-->
      <v-btn icon @click="toggleProjects">
        <v-icon v-if="showProjects">mdi-menu-down</v-icon>
        <v-icon v-else>mdi-menu-up</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item,i) in 5" :key="i">
        <v-expansion-panel-header>
          Item
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>


<script>
  export default {
    props: {
      client: {
        type: Object,
        required: true
      },
      data() {
        return {
          showProjects: false
        };
      },
      methods: {
        toggleProjects() {
          this.showProjects = !this.showProjects;
        }
      }
    }
  };
</script>
