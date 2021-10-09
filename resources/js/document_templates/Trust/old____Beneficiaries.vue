<template>
  <div>
    {{ beneficiaries }}

    {{ totalUnitCount }}

    <v-container>
      <v-layout column>
        <v-flex xs12>
          <v-card>
            <v-card-text>
              <v-list>
                <v-list-item v-for="(benificiary, index) in beneficiaries" :key="index">
                  <v-list-item-title>{{ benificiary.name }} {{ benificiary.units }}</v-list-item-title>
                  <v-list-item-action>
                    <v-icon
                      class="red--text"
                      @click="removeBenificiary(benificiary)">
                      mdi-trash-can
                    </v-icon>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card-text>
            <v-card-actions>
              <v-text-field
                v-model="newBeneficiary.name"
                label="name"/>
              <v-text-field
                v-model="newBeneficiary.units"
                label="units"/>
              <v-spacer/>
              <v-btn color="primary" @click="addBenificiary">
                Add Item
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
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
        newBeneficiary: {
          name: '',
          units: 0
        }
      };
    },
    computed: {
      totalUnitCount() {
        return this.benificiaries.map((item) => { return item.units; }).reduce((total, item) => {
          return total + item.unit_count;
        }, 0);
      }
    },
    methods: {
      addBenificiary() {
        this.$emit('input', this.newBeneficiary);
      },
      removeBenificiary(index) {
        this.beneficiaries.splice(index, 1);
        this.$emit('delete', this.beneficiaries);
      }
    }
  };
</script>
