<template>
  <div>
    {{ meeting_minute }}
  </div>
</template>

<script>
  export default {
    model: {
      prop: 'meeting_minute',
      event: 'change'
    },
    props: ['meeting_minute'],
    data() {
      return {};
    },
    methods: {
      change(meetingMinute) {
        this.$emit('change', meetingMinute);
      }
    }
  };
</script>

<style scoped>

</style>
