<template>
  <div>
    <p>MINUTES OF MEETING # <b>{{ meeting_number }}</b>, BOARD OF TRUSTEES (hereafter BOARD)</p>

    <div v-if="mailing_address" class="preview-field">
      <b>{{ trust_name }}</b> <br/>
      {{ mailing_address.address }}<br/>
      {{ mailing_address.city }} {{ mailing_address.zip }} <br/>

      <b class="preview-field">
        <br/>
        {{ moment(document_created_at).format("MMMM D, YYYY") }}
      </b>
    </div>
    <div v-else class="preview-field">
      Need Mailing Address
    </div>


    <pre>{{ minute }}</pre>
    <pre>{{ project }}</pre>
  </div>
</template>

<script>
  import moment from 'moment';


  export default {
    props: ['minute', 'client', 'project'],
    computed: {
      document_created_at() {
        return new Date();
      },
      trust_name() {
        return this.project?.project_data?.name;
      },
      mailing_address() {
        return this.project?.project_data?.trust?.mailing_address;
      },
      meeting_number() {
        return this.minute?.meeting_number.toString().padStart(3, '0') || 0;
      }
    },
    methods: {
      moment
    }


  };
</script>

<style scoped>

</style>
