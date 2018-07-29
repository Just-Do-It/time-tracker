<template>
  <div class="time-create">
    <span>{{taskData.timeCreate | formatTime}}</span>
  </div>
</template>

<script>
  export default{
    props: {
      taskData: Object
    },
    filters: {
      formatTime(value) {
        const date = new Date(value)
        let h = date.getHours()
        if (h < 10) h = '0' + h
        let m = date.getMinutes()
        if (m < 10) m = '0' + m
        return h + ":" + m
      }
    }
  }
</script>

<style scoped>
  .time-create {
    padding: 5px;
  }
</style>
