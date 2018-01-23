<template>
  <li>
    <v-container :class="{'close-task': !taskData.status}">
      <v-layout align-center>
        <task-time-info :taskData="taskData"></task-time-info>
        <v-container class="container_task" row>
          <v-layout v-if="this.modeEdit" class="task" align-center>
            <v-flex xs8>
              <v-text-field
                name="name"
                label="Task name"
                v-model="editedName"
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
                  v-on:blur="formatHours(checkState())"
                >
                <span>:</span>
                <input type="text"
                  v-bind:value="valueM"
                  v-on:input="updateValue($event.target.value, 'm')"
                  v-on:blur="formatMinutes(checkState())"
                >
                <span>:</span>
                <input type="text"
                  v-bind:value="valueS"
                  v-on:input="updateValue($event.target.value, 's')"
                  v-on:blur="formatSeconds(checkState())"
                >
              </v-flex>
            </v-layout>
            <v-layout justify-center class="buttons-save-task">
              <v-btn class="success" @click="onSaveChanges">Save</v-btn>
              <v-btn class="error" @click="modeEdit = false">Close</v-btn>
            </v-layout>
          </v-layout>
          <v-layout v-else class="task" align-center>
            <v-flex xs8>
              <span class="title">{{taskData.name}}</span>
            </v-flex>
            <v-layout>
              <v-flex>
                <span class="timer">{{valueH | formatTwo}}:{{valueM | formatTwo}}:{{valueS | formatTwo}}</span>
              </v-flex>
            </v-layout>
            <v-layout justify-center>
              <v-btn fab small @click="startTimer">
                <v-icon v-if="taskData.play">pause</v-icon>
                <v-icon v-else="taskData.play">play_arrow</v-icon>
              </v-btn>
            </v-layout>
            <v-layout justify-center class="container-edit-button">
              <v-btn fab small @click="editTask">
                <v-icon>mode_edit</v-icon>
              </v-btn>
            </v-layout>
            <v-layout justify-center>
              <v-btn fab small :color="taskData.status ? 'grey lighten-1' : 'green'" @click="changeStatus">
                <v-icon :color="taskData.status ? '' : 'white'">{{taskData.status ? 'close' : 'loop'}}</v-icon>
              </v-btn>
            </v-layout>
            <v-layout justify-center>
              <v-btn fab small color="red" @click="deleteTask(taskData)">
                <v-icon color="white">delete</v-icon>
              </v-btn>
            </v-layout>
          </v-layout>
        </v-container>
      </v-layout>
      <subtask-list :taskData="taskData"></subtask-list>
    </v-container>
  </li>
</template>

<script>
  import TaskTimeInfo from './TaskTimeInfo.vue'
  import SubtaskList from './SubtaskList.vue'
  import formatTime from '../../mixins/formatTime.js'

  export default {
    mixins: [formatTime],
    components: {
      'task-time-info': TaskTimeInfo,
      'subtask-list': SubtaskList
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
    data() {
      return {
        modeEdit: false,
        temporaryTime: null,
        editedName: this.taskData.name,
        editedTime: this.taskData.timeTask
      }
    },
    computed: {
      valueH() {
        return this.formatHours(this.checkState())
      },
      valueM() {
        return this.formatMinutes(this.checkState())
      },
      valueS() {
        return this.formatSeconds(this.checkState())
      }
    },
    methods: {
      updateValue(value, type) {
        if(isNaN(Number(value))) { value = 0 }
        let temporaryH = this.calcHours(this.valueH)
        let temporaryM = this.calcMinutes(this.valueM)
        let temporaryS = this.calcSeconds(this.valueS)
        value = this.formatNumberTime(value)

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
        this.editedTime = temporaryH + temporaryM + temporaryS
        this.$emit('input', value)
      },
      formatNumberTime(number) {
        if(number < 0) {
          return 0
        } else if(number > 59) {
          return 59
        } else {
          return number
        }
      },
      checkState() {
        return this.modeEdit ? this.editedTime : this.taskData.timeTask
      },
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
          this.$store.dispatch('updateTaskData', {
            id: this.taskData.id,
            timeTask: this.taskData.timeTask
          })
        } else {
          this.stopTasks(this.taskData.id)
          this.temporaryTime = new Date();
          this.$store.dispatch('setActiveTask', this.taskData)
          this.$store.state.timerId = setTimeout(this.counterTime, 1000);
        }
        this.taskData.play = !this.taskData.play
      },
      counterTime() {
        this.calcTime()
        this.$store.state.timerId = setTimeout(this.counterTime, 1000)
      },
      calcTime() {
        this.taskData.timeTask += new Date() - this.temporaryTime
        this.temporaryTime = new Date()
      },
      changeStatus() {
        this.taskData.status = !this.taskData.status
        this.$store.dispatch('updateTaskData', {
          id: this.taskData.id,
          status: this.taskData.status
        })
      },
      editTask() {
        this.editedName = this.taskData.name
        this.editedTime = this.taskData.timeTask
        if(this.taskData.play) {
          clearTimeout(this.$store.state.timerId)
          this.taskData.play = false
        }
        this.modeEdit = true
      },
      onSaveChanges() {
        if (this.editedName.trim() === '') {
          return
        }
        this.modeEdit = false
        this.$store.dispatch('updateTaskData', {
          id: this.taskData.id,
          name: this.editedName,
          timeTask: this.editedTime
        })
      }
    }
  }
</script>

<style scoped>
  .task {
    padding: 1% 0 1% 1%;
    background: #448aff;
    color: #fff;
  }
  .task >>> .input-group {
    padding: 0;
  }
  .task >>> .input-group__details:after {
    background: #fff;
  }
  .task >>> .primary--text input {
    caret-color: #fff !important;
  }
  .buttons-save-task >>> .btn {
    margin: 8px;
  }
  .task-name {
    font-size: 20px;
  }
  .timer {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
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
  .container-edit-button {
    border-left: 1px solid #f5f5f5;
  }
</style>
