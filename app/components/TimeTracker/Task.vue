<template>
  <li>
    <task-time-info :taskData="taskData"></task-time-info>
    <div class="task">
      <input class="task-name" type="text" v-model="taskData.name">
    </div>
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
      taskData: Object
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
</style>
