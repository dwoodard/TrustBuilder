<template>
  <v-container fluid>
    <v-app-bar>
      <v-toolbar-title>Invoices</v-toolbar-title>
      <v-spacer/>
      <v-btn color="primary" href="/invoices/create">Create</v-btn>
    </v-app-bar>
    <v-data-table
      dense
      :headers="headers"
      :items="invoices"
      :item-key="id"
      :footer-props="{'items-per-page-options': [5, 10, 25, 100]}">
      <template #no-data>
        <v-alert :value="true" color="error" icon="warning">
          Sorry, nothing to display here :(
        </v-alert>
      </template>
      <template #no-results>
        <v-alert :value="true" color="error" icon="warning">
          Sorry, no results match your query :(
        </v-alert>
      </template>
      <template #items="rows">
        <td v-for="(element, label, index) in rows.item"
            @click="cellClick(element)">
          {{ element }}
        </td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
  import Admin from '@/layouts/Admin/Layout';

  export default {
    name: 'Invoices',
    layout: Admin,
    props: ['invoices'],
    data() {
      return {
        showCreateInvoice: false,
        selectedInvoices: [],
        headers: [
          {
            text: 'ID', value: 'id', sortable: true
          },
          {
            text: 'Project', value: 'project', sortable: true
          },
          {
            text: 'Customer', value: 'customer', sortable: true
          },
          {
            text: 'Amount', value: 'amount', sortable: true
          },
          {
            text: 'Status', value: 'status', sortable: true
          },
          {
            text: 'Created At', value: 'created_at', sortable: true
          },
          {
            text: 'Actions', value: 'actions', sortable: false
          }
        ],
        items: this.invoices,
        itemKey: 'id'
      };
    },
    methods: {
      cellClick(invoice) {
        this.selectedInvoices = [invoice];
      }
    }
  };
</script>
