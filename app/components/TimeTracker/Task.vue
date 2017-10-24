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

        <!-- <v-flex xs1>
          <v-text-field
            name="hours"
            label="Hours"
            v-model="taskData.timeTask | formatHours"
            single-line
            hide-details
            class="task-time"
          ></v-text-field>

        </v-flex> -->
        <input type="text"
        v-bind:value="valueH"
        v-on:input="updateValue($event.target.value, 'h')"
        v-on:blur="formatHours">
        <input type="text"
        v-bind:value="valueM"
        v-on:input="updateValue($event.target.value, 'm')"
        v-on:blur="formatMinutes">
        <v-layout align-center>
          <span>:</span>
        </v-layout>

        <!-- <v-flex xs1>
          <v-text-field
            name="minutes"
            label="Minutes"
            v-model="minutes"
            single-line
            hide-details
            class="task-time"
          ></v-text-field>
        </v-flex> -->
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
    // mounted: function () {
    //   this.formatHours()
    //   this.formatMinutes()
    // },
    // updated: function () {
    //   this.formatHours()
    //   this.formatMinutes()
    // },
    computed: {
      valueH() {
        return this.formatHours()
      },
      valueM() {
        return this.formatMinutes()
      }
    },
    methods: {
      formatHours() {
        console.log("hour");
        return Math.floor(this.taskData.timeTask / 1000 / 60 / 60)
      },
      updateValue(value, type) {
        let temporaryH = this.valueH * 1000 * 60 * 60;
        let temporaryM = this.valueM * 1000 * 60;

        if (type == 'h') {
          temporaryH = value * 1000 * 60 * 60
        }
        if (type == 'm') {
          temporaryM = value * 1000 * 60
        }
        console.log("temporaryH " + temporaryH);
        console.log("temporaryM " + temporaryM);
        this.taskData.timeTask = temporaryH + temporaryM;
        this.$emit('input', value)
      },
      formatMinutes() {
        console.log("min");
        return Math.floor(this.taskData.timeTask / 1000 / 60) % 60
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
  .task-time .input-group--text-field input {
    text-align: center;
  }
</style>
