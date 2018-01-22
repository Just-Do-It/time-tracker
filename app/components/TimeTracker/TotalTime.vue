<template>
  <v-container>
    <v-layout>
     <v-flex xs12 class="text-xs-center">
       <span class="total-time"><b>Total:</b> {{formatHours(totalTime) | formatTwo}}:{{formatMinutes(totalTime) | formatTwo}}:{{formatSeconds(totalTime) | formatTwo}}</span>
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
        if(this.$store.getters.loadedTasks.length > 0) {
          if(this.$store.getters.loadedTasks.length === 1) {
            return this.$store.getters.loadedTasks[0].timeTask
          } else {
            return this.$store.getters.loadedTasks.reduce(function(previousValue, currentValue, index, array) {
              return previousValue.timeTask + currentValue.timeTask;
            })
          }
        } else {
          return 0
        }
      }
    }
  }
</script>

<style scoped>
  .total-time {
    font-size: 20px;
  }
</style>
