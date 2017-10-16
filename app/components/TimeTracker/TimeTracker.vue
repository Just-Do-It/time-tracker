<template>

  <v-app>

    <div class="task-list">
      <ul>
        <task v-for="task in taskList" :key="task.id" :taskData="task"></task>
      </ul>
    </div>
    <div>
        <h1>Time Tracker</h1>
    </div>
    <v-flex class="hidden-xs-only">
      <v-date-picker v-model="picker2"></v-date-picker>
    </v-flex>
    {{picker2}}
  </v-app>

</template>

<script>
  import Task from './Task.vue';

  export default {
    components: {
      'task': Task
    },
    data() {
      return {
        picker2: null,
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
