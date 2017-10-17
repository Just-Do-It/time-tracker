<template>
  <v-app>
    <date-picker :date="date"></date-picker>
    <div class="task-list">
      <ul>
        <task
          v-for="task in taskList"
          :key="task.id"
          :taskData="task">
        </task>
      </ul>
    </div>
  </v-app>
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
        date: null, // 2017-10-03
        taskList: mockTaskList
      }
    }
  }
</script>

<style scoped>
  .task-list {
    width: 100%;
  }
  .task-list > ul {
    list-style: none;
  }
  .task-list > ul > li {
    display: flex;
    align-items: center;
  }
</style>
