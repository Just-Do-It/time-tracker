<template>
  <v-layout class="task-list" align-center justify-center>
      <ul>
        <task
          v-for="task in taskList"
          :key="task.id"
          :taskData="task"
          :deleteTask="deleteTask"
          :stopTasks="stopTasks">
        </task>
        <li>
          <v-container>
            <v-layout align-center justify-center>
              <v-flex xs12>
                <v-btn block @click="createTask">Add Task</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </li>
      </ul>
  </v-layout>
</template>

<script>
  import Task from './Task.vue'

  export default {
    components: {
      'task': Task
    },
    props: {
      taskList: {
        type: Array
      }
    },
    methods: {
      createTask() {
        let lastId = this.taskList.length > 0 ? this.taskList[this.taskList.length - 1].id : 0
        let newTask = {
          id: lastId + 1,
          name: "task name",
          description: "",
          timeCreate: new Date(),
          play: false,
          timeTask: 0,
          status: true,
          states: [],
          subTasks: []
        }
        this.taskList.push(newTask)
      },
      deleteTask(id) {
        this.taskList.some((element, index, array) => {
          if(element.id === id) {
            this.taskList.splice(index, 1)
            return element
          }
        })
      },
      stopTasks(id) {
        this.taskList.forEach((element, index, array) => {
          if(element.id !== id) {
            clearTimeout(this.$store.state.timerId);
            element.play = false
          }
        })
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
