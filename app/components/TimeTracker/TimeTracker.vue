<template>

  <v-app>
    <date-picker :date="date"></date-picker>
    <div class="task-list">
      <ul>
        <task v-for="task in taskList" :key="task.id" :taskData="task"></task>
      </ul>
    </div>
  </v-app>

</template>

<script>
  import Task from './Task.vue';
  import DatePicker from './DatePicker.vue';

  export default {
    components: {
      'task': Task,
      'date-picker': DatePicker
    },
    data() {
      return {
        date: null, //2017-10-03
        taskList: [
          {
            id: 1,
            name: "Task 1",
            description: "description task 1",
            timeCreate: "12:20",
            play: false,
            timeTask: "1h 20m",
            status: true, //open - true, close - false
            states: [
              {
                id: 1,
                timeStart: "12:20",
                timeEnd: "12:40"
              },
              {
                id: 2,
                timeStart: "12:50",
                timeEnd: "13:30"
              }
            ],
            subTasks: [
              {
                id: 1,
                name: "subtask 1",
                play: false,
                timeTask: "1h 20m"
              }
            ]
          }
        ]
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
