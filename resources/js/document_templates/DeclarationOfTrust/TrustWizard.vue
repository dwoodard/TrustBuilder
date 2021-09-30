<template>
  <div>
    <template>
      <v-stepper v-model="step" alt-labels>
        <v-stepper-header>
          <v-stepper-step
            :complete="step > 1"
            step="1">
            Client Info
          </v-stepper-step>

          <v-divider/>

          <v-stepper-step
            :complete="step > 2"
            :rules="[() => true]"
            step="2">
            Trust Basic Info
            <small v-if="step == 2">Lorem ipsum dolor sit amet</small>
          </v-stepper-step>

          <v-divider/>

          <v-stepper-step
            :complete="step > 3"
            step="3">
            Trustees
          </v-stepper-step>

          <v-divider/>

          <v-stepper-step step="4">
            Beneficiaries
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"/>

            <v-btn
              color="primary"
              @click="step = 2">
              Continue
            </v-btn>

            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"/>

            <v-btn
              color="primary"
              @click="step = 3">
              Continue
            </v-btn>

            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"/>

            <v-btn
              color="primary"
              @click="step = 4">
              Continue
            </v-btn>

            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="4">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"/>

            <v-btn
              color="primary"
              @click="step = 1">
              Continue
            </v-btn>

            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </template>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        step: 1
      };
    }
  };
</script>
