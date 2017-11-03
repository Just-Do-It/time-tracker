<template>
  <li>
    <v-container :class="{'close-task': !taskData.status}">
      <v-layout align-center>
        <task-time-info :taskData="taskData"></task-time-info>
        <v-container class="container_task" row>
          <v-layout class="task" align-center>
            <v-flex xs8>
              <v-text-field
                name="name"
                label="Task name"
                v-model="taskData.name"
                single-line
                hide-details
                dark

              ></v-text-field>
            </v-flex>
            <v-layout align-center justify-center class="timer">
              <v-flex xs10 md7>
                <input type="text"
                  v-bind:value="valueH"
                  v-on:input="updateValue($event.target.value, 'h')"
                  v-on:blur="formatHours"
                >
                <span>:</span>
                <input type="text"
                  v-bind:value="valueM"
                  v-on:input="updateValue($event.target.value, 'm')"
                  v-on:blur="formatMinutes"
                >
                <span>:</span>
                <input type="text"
                  v-bind:value="valueS"
                  v-on:input="updateValue($event.target.value, 's')"
                  v-on:blur="formatSeconds"
                >
              </v-flex>
            </v-layout>
            <v-layout justify-center>
              <v-btn fab small @click="startTimer">
                <v-icon v-if="taskData.play">pause</v-icon>
                <v-icon v-else="taskData.play">play_arrow</v-icon>
              </v-btn>
            </v-layout>
            <v-layout justify-center>
              <v-btn fab small :color="taskData.status ? 'grey lighten-1' : 'green'" @click="changeStatus">
                <v-icon :color="taskData.status ? '' : 'white'">{{taskData.status ? 'close' : 'loop'}}</v-icon>
              </v-btn>
            </v-layout>
            <v-layout justify-center>
              <v-btn fab small color="red" @click="deleteTask(taskData.id)">
                <v-icon color="white">delete</v-icon>
              </v-btn>
            </v-layout>
          </v-layout>
        </v-container>
      </v-layout>
      <subtask :taskData="taskData"></subtask>
    </v-container>
  </li>
</template>

<script>
  import TaskTimeInfo from './TaskTimeInfo.vue'
  import Subtask from './Subtask.vue'

  export default {
    components: {
      'task-time-info': TaskTimeInfo,
      'subtask': Subtask
    },
    props: {
      taskData: {
        type: Object
      },
      deleteTask: {
        type: Function
      },
      stopTasks: {
        type: Function
      }
    },
    computed: {
      valueH() {
        return this.formatHours()
      },
      valueM() {
        return this.formatMinutes()
      },
      valueS() {
        return this.formatSeconds()
      }
    },
    methods: {
      updateValue(value, type) {
        if(isNaN(Number(value))) { value = 0 }
        let temporaryH = this.calcHours(this.valueH)
        let temporaryM = this.calcMinutes(this.valueM)
        let temporaryS = this.calcSeconds(this.valueS)

        switch (type) {
          case "h":
            temporaryH = this.calcHours(value)
            break;
          case "m":
            temporaryM = this.calcMinutes(value)
            break;
          case "s":
            temporaryS = this.calcSeconds(value)
            break;
        }
        this.taskData.timeTask = temporaryH + temporaryM + temporaryS
        this.$emit('input', value)
      },
      formatHours() {
        return Math.floor(this.taskData.timeTask / 1000 / 60 / 60)
      },
      formatMinutes() {
        return Math.floor(this.taskData.timeTask / 1000 / 60) % 60
      },
      formatSeconds() {
        return Math.floor(this.taskData.timeTask / 1000) % 60
      },
      // formatTwo(value) {
      //   console.log(value.toString().lenght <= 1 ? "0"+value.toString() : value);
      //   return value.toString().lenght <= 1 ? "0"+value : value
      // },
      calcHours(time) {
        return time * 1000 * 60 * 60
      },
      calcMinutes(time) {
        return time * 1000 * 60
      },
      calcSeconds(time) {
        return time * 1000
      },
      startTimer() {
        if(this.taskData.play) {
          clearTimeout(this.$store.state.timerId)
        } else {
          this.stopTasks(this.taskData.id)
          this.$store.state.timerId = setTimeout(this.counterTime, 1000);
        }
        this.taskData.play = !this.taskData.play
      },
      counterTime() {
        this.taskData.timeTask += 1000;
        this.$store.state.timerId = setTimeout(this.counterTime, 1000)
      },
      changeStatus() {
        this.taskData.status = !this.taskData.status
      }
    }
  }
</script>

<style scoped>
  .task {
    padding: 2%;
    background: #448aff;
    color: #fff;
  }
  .task-name {
    font-size: 20px;
  }
  .input-group {
    padding: 0;
  }
  .timer input {
    width: 20%;
    text-align: center;
  }
  .container_task {
    padding: 0;
  }
  .close-task {
    opacity: 0.7;
  }
</style>
