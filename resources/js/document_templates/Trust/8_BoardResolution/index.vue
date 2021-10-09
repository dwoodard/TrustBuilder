<template>
  <div class="document-template">
    <h3>BOARD RESOLUTION</h3>

    <div>
      <span>To: </span>BOARD OF TRUSTEES
      {{ trust_name }}
      7512 Dr. Phillips Blvd. Suite #50-185
      Orlando, Florida, USA
    </div>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    props: {
      client: {
        type: Object,
        required: true
      },
      project: {
        type: Object,
        required: true
      }
    },
    computed: {
      document_created_at() {
        return this.project?.document_data?.document_created_at || new Date();
      },
      first_trustee() {
        return this.project?.document_data?.first_trustee || `${this?.client?.first_name} ${this?.client?.last_name}`;
      },
      trust_name() {
        return this.project?.document_data?.trust_name || this?.project?.name;
      },
      settlor() {
        return this.project?.document_data?.settlor;
      }
    },
    methods: {
      moment
    }
  };
</script>

<style scoped>
.check{
  color:red
}
</style>
