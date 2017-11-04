<template>
  <v-container>
    <date-picker></date-picker>
    <task-list :taskList="taskList"></task-list>
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
    data() {
      return {
        taskList: mockTaskList
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
