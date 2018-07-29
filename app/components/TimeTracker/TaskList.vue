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
          <v-container class="container-button-add-task">
            <v-layout align-center justify-center>
              <v-flex xs12>
                <v-btn class="button-add-task" color="info" block @click="createTask">Add Task</v-btn>
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
    computed: {
      taskList () {
        return this.$store.getters.loadedTasks
      }
    },
    methods: {
      createTask() {
        this.$store.dispatch('createTask')
      },
      deleteTask(taskData) {
        this.$store.dispatch('deleteTask', taskData)
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
  .container-button-add-task {
    padding: 10px 0 0 45px;
  }
  .button-add-task {
    height: 45px;
    font-weight: bold;
    font-size: 16px;
  }
</style>
