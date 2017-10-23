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
        <!-- <input type="text" ref="inputH"
        v-bind:value="taskData.timeTask"
        v-on:input="updateValue($event.target.value, 'h')"
        v-on:blur="formatHours"> -->
        <input type="text" ref="inputH"
        v-bind:value="taskData.timeTask"
        v-on:input="updateValue($event.target.value, 'h')"
        v-on:blur="formatHours">
        <input type="text" ref="inputM"
        v-bind:value="taskData.timeTask"
        v-on:input="updateValue($event.target.value, 'm')"
        v-on:blur="formatMinutes">
        >
        <v-layout align-center>
          <span>:</span>
        </v-layout>

        <v-flex xs1>
          <v-text-field
            name="minutes"
            label="Minutes"
            v-model="minutes"
            single-line
            hide-details
            class="task-time"
          ></v-text-field>
        </v-flex>

        <!-- <input class="task-name" type="text" v-model="taskData.name">
        <input class="task-time" type="text" v-model="hours">
        <input class="task-time" type="text" v-model="minutes"> -->
      </v-layout>
    </v-container>

    <!-- <p>{{taskData.timeTask | formatHours}}:{{taskData.timeTask | formatMinutes}}</p> -->
    <subtask></subtask>
  </li>
</template>

<script>
  import TaskTimeInfo from './TaskTimeInfo.vue'
  import Subtask from './Subtask.vue'

  export default{
    data() {
      return {
        hours: 7000000,
        minutes: 0
      }
    },
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
    // },
    methods: {
      formatHours() {
        console.log("hour");
        this.$refs.inputH.value = Math.floor(this.taskData.timeTask / 1000 / 60 / 60)
      },
      updateValue(value, type) {
        this.hours = value
        if (type == 'h') this.$refs.inputH.value = value
        if (type == 'm') this.$refs.inputM.value = value
        console.log(this.$refs);
        this.$emit('input', value)
      },
      formatValue() {
        this.$refs.input.value = this.taskData.timeTask /2
      },
      formatMinutes(time) {
        console.log("min");
        this.$refs.inputM.value = Math.floor(this.taskData.timeTask / 1000 / 60) % 60
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
