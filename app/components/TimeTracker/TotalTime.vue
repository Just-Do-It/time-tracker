<template>
  <v-container>
    <v-layout>
     <v-flex xs12 class="text-xs-center">
       <span>Total: {{formatHours(totalTime) | formatTwo}}:{{formatMinutes(totalTime) | formatTwo}}:{{formatSeconds(totalTime) | formatTwo}}</span>
     </v-flex>
   </v-layout>
  </v-container>
</template>

<script>
  import formatTime from '../../mixins/formatTime.js'
  export default {
    mixins: [formatTime],
    computed: {
      totalTime () {
        let taskList = this.$store.getters.loadedTasks
        return taskList.reduce(function(previousValue, currentValue, index, array) {
          return previousValue.timeTask + currentValue.timeTask;
        })
      }
    }
  }
</script>

<style scoped>

</style>
