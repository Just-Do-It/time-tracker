<template>
  <v-container>
    <date-picker></date-picker>
    <task-list v-if="!loading"></task-list>
    <v-layout>
     <v-flex xs12 class="text-xs-center">
       <v-progress-circular
         indeterminate
         class="primary--text"
         :width="7"
         :size="70"
         v-if="loading"></v-progress-circular>
     </v-flex>
   </v-layout>
  </v-container>
</template>

<script>
  import TaskList from './TaskList.vue'
  import DatePicker from './DatePicker.vue'
  import mockTaskList from '../../model/mock-task-list'

  export default {
    components: {
      'task-list': TaskList,
      'date-picker': DatePicker
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>

<style>
  ol, ul {
    padding-left: 0;
    width: 100%;
  }
</style>
