<template>
  <v-card class="mt-4 mb-10" outlined>
    <v-card-title>Beneficiaries </v-card-title>

    <v-card-subtitle v-if="hasUnitsLeft">Units Left {{ totalUnitsLeft - newBeneficiary.units }}</v-card-subtitle>


    <v-card-text>
      <div class="d-flex flex-row">
        <v-text-field
          v-model="newBeneficiary.name"
          :rules="[
            ()=>{return !!newBeneficiary.name}
          ]"
          label="Beneficiary Name"
          prepend-icon="account_circle"
          append-icon-click="add"/>
        <v-btn color="primary" @click="add">Add Beneficiary</v-btn>
      </div>
      <div>
        <v-slider
          v-show="!!newBeneficiary.name"
          v-model="newBeneficiary.units"
          min="0"
          :disabled="!hasUnitsLeft"
          prepend-icon="mdi-percent"
          :max="totalUnitsLeft"
          label="Units"
          :hint="String(`${newBeneficiary.units} units left `)"
          persistent-hint


          append-icon-click="add"/>
      </div>


      <v-list>
        <v-list-item v-for="(item,index) in beneficiaries" :key="index" class="grey lighten-5 ">
          <v-text-field
            v-model="item.name"
            outlined
            single-line
            @change="update($event, index)">
            <v-spacer/>
            <v-icon color="danger">mdi-trash-can</v-icon>
          </v-text-field>
        </v-list-item>
      </v-list>
      <hr/>
      <div class=" ">
        {{ $props }}
        <br/>
        {{ totalUnits }} {{ totalUnitsLeft }}
      </div>
      <!-- add a new beneficiary -->
      <v-card-text/>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    props: {
      beneficiaries: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        newBeneficiary: {name: '', units: 0}
      };
    },
    computed: {
      totalUnits() {
        // convert units to a number and add all units up
        return this.beneficiaries.reduce((total, item) => {
          return total + Number(item.units);
        }, 0);
      },
      totalUnitsLeft() {
        return 100 - this.totalUnits;
      },
      hasUnitsLeft() {
        return this.totalUnitsLeft > 0;
      }
    },
    methods: {
      add() {
        this.$emit('add', this.newBeneficiary);
        this.newBeneficiary = {
          name: '',
          units: 0
        };
      },
      remove(index) {
        this.$emit('remove', index);
      },
      update(event, index) {
        this.beneficiaries[index].name = event;
        this.$emit('update', this.beneficiaries);
      }
    }
  };
</script>
