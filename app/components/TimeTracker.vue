<template>
    <v-app>
      <div class="task-list">
        <ul>
          <li v-for="task in taskList" :key="task.id">
            <div class="time-create">
              <span>{{task.timeCreate}}</span>
            </div>
            <div class="task">
              <input class="task-name" type="text" v-model="task.name">
            </div>
          </li>
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
    export default {
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

<style>
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
  .task {
    width: 100%;
    padding: 2%;
    background: #448aff;
    color: #fff;
  }
  .task-name {
    font-size: 20px;
  }
</style>
