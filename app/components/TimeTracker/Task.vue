<template>
  <li>
    <task-time-info :taskData="taskData"></task-time-info>
    <v-container>
      <v-layout class="task">
        <v-flex xs10>
          <v-text-field
            name="name"
            label="Task name"
            v-model="taskData.name"
            single-line
            hide-details
          ></v-text-field>
        </v-flex>
        <v-layout align-center class="timer">
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
        </v-layout>
        <v-btn fab small @click="startTimer">
          <v-icon v-if="taskData.play">pause</v-icon>
          <v-icon v-else="taskData.play">play_arrow</v-icon>
        </v-btn>
      </v-layout>
    </v-container>
    <subtask></subtask>
  </li>
</template>

<script>
  import TaskTimeInfo from './TaskTimeInfo.vue'
  import Subtask from './Subtask.vue'

  export default{
    components: {
      'task-time-info': TaskTimeInfo,
      'subtask': Subtask
    },
    props: {
      taskData: {
        type: Object
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
        let timerId;
        if(this.taskData.play) {
          console.log("pause");
          clearTimeout(timerId)
        } else {
          timerId = setTimeout(this.counterTime, 1000);
        }
        this.taskData.play = !this.taskData.play
      },
      counterTime() {
        console.log("counterTime");
        this.taskData.timeTask += 1000;
        setTimeout(this.counterTime, 1000)
      }
    }
  }
</script>

<style scoped>
  .task {
    width: 100%;
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
    width: 25px;
    text-align: center;
  }
</style>
