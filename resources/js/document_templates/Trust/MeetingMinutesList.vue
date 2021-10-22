<template>
  <div>
    <div class="d-flex justify-space-between">
      <v-icon class="pa-2">mdi-plus</v-icon>
    </div>
    <ul id="meeting-minutes-list">
      <li v-for="n in Array.from(Array(10).keys()).reverse()" :key="n">
        Meeting Minutes {{ (n+1).toString().padStart(3, '0') }}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'MeetingMinutesList'
  };
</script>

<style scoped lang="scss">
#meeting-minutes-list{
  padding: 0;
  list-style: none;

  li{
    padding: 12px;
    border-bottom: 1px solid #e1e1e1;
    cursor: pointer;
    background: #f1f1f1;

    &:hover{
      background: #f8f8f8;
    }
  }
}


</style>
