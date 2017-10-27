<template>
  <v-container>
    <date-picker></date-picker>
    <v-layout class="task-list">
        <ul>
          <task
            v-for="task in taskList"
            :key="task.id"
            :taskData="task">
          </task>
        </ul>
    </v-layout>
  </v-container>
</template>

<script>
  import Task from './Task.vue'
  import DatePicker from './DatePicker.vue'
  import mockTaskList from '../../model/mock-task-list'

  export default {
    components: {
      'task': Task,
      'date-picker': DatePicker
    },
    data() {
      return {
        taskList: mockTaskList
      }
    }
  }
</script>

<style scoped>
  .task-list > ul {
    list-style: none;
  }
  .task-list > ul > li {
    display: flex;
    align-items: center;
  }
</style>
