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
        <span>
          <v-icon>
            mdi-alert
          </v-icon>
          Sorry, No Invoices
        </span>
      </template>

      <template #items="rows">
        <td v-for="(element, label, index) in rows.item" :key="index"
            @click="cellClick(element)">
          {{ element }}
        </td>
      </template>

      <template #item.actions="{ item }">
        <inertia-link :href="`/admin/invoices/${item.id}/edit`" as="button">
          <v-icon small class="mr-2">
            mdi-pencil
          </v-icon>
        </inertia-link>
        <v-icon
          small
          @click="deleteItem(item)">
          mdi-delete
        </v-icon>
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
