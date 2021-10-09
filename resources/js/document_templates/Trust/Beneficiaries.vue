<template>
  <v-card class="mt-4 mb-10" outlined>
    <v-card-title>Beneficiaries </v-card-title>

    <v-card-subtitle
      v-if="hasUnits">
      Units Left {{ totalUnitsLeft - newBeneficiary.units }}
    </v-card-subtitle>

    <v-card-text>
      <v-row v-show="hasUnits">
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="newBeneficiary.name"
            :rules="rules.name"
            :error-messages="errors.name"
            label="Beneficiary Name"
            prepend-icon="account_circle"
            append-icon-click="add"
            @keyup="checkForErrors"
            @keyup.enter="add"/>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field

            v-show="!!newBeneficiary.name"
            v-model="newBeneficiary.units"
            :error-messages="errors.units"
            label="Units"
            type="number"
            @keyup="checkForErrors"
            @keyup.enter="add"/>

          <v-slider

            v-show="!!newBeneficiary.name"
            v-model="newBeneficiary.units"
            min="0"
            :disabled="!hasUnits"
            :max="totalUnitsLeft"
            :hint="`${newBeneficiary.name} will receive ${newBeneficiary.units} Units`"
            persistent-hint/>
        </v-col>
      </v-row>
      <v-row v-if="hasUnits">
        <v-col cols="12" sm="6" offset="6">
          <v-btn color="primary" @click="add">Add Beneficiary</v-btn>
        </v-col>
      </v-row>


      <v-list>
        <v-list-item v-for="(item,index) in beneficiaries" :key="index" class="grey lighten-5 ">
          <v-text-field
            v-model="item.name"
            outlined
            single-line
            @change="update($event, index)"/>
          <v-spacer/>


          <v-text-field
            v-model="item.units"
            type="number"
            min="0"
            :max="totalUnitsLeft"
            :label="`${item.units} Units`"/>

          <v-icon color="danger" @click="remove(index)">mdi-trash-can</v-icon>
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
        newBeneficiary: {name: '', units: 0},
        rules: {
          name: [
            (value) => !!value || 'Required.'
          ],
          units: [
            // (value) => !!value || 'Required.',
            // (value) => value < 100 || 'Can not be over 100'
          ]

        },
        errors: {
          name: null,
          units: null
        }
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
      hasUnits() {
        return this.totalUnitsLeft > 0;
      }
    },
    methods: {
      add() {
        if (this.checkForErrors()) {
          return;
        }

        this.$emit('add', this.newBeneficiary);
        this.newBeneficiary = {
          name: '',
          units: 0
        };

        this.checkForErrors();
      },
      remove(index) {
        this.$emit('remove', index);
      },
      update(event, index) {
        this.beneficiaries[index].name = event;
        this.$emit('update', this.beneficiaries);
      },
      checkForErrors() {
        let hasError = false;
        Object.keys(this.rules).forEach((key) => {
          const rules = this.rules[key];
          const value = this.newBeneficiary[key];

          rules.forEach((rule) => {
            const error = rule(value);

            if (typeof error === 'string') {
              this.errors[key] = error;
              hasError = true;
            } else {
              this.errors[key] = null;
            }
          });
        });
        return hasError;
      }
    }
  };
</script>
