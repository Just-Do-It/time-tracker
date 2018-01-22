<template>
  <v-container class="container_subtask">
    <v-layout justify-end>
      <v-flex xs11>
        <v-list>
          <v-list-tile v-for="subtask in taskData.subtasks" :key="subtask.id">
            <subtask :subtaskData="subtask" :deleteSubtask="deleteSubtask"></subtask>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
    <v-layout justify-end align-center>
      <v-flex xs1>
        <v-layout><v-icon>subdirectory_arrow_right</v-icon></v-layout>
      </v-flex>
      <v-flex xs10>
        <v-btn block @click="createSubtask">Add subtask</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Subtask from './Subtask.vue'
  export default{
    components: {
      'subtask': Subtask
    },
    props: {
      taskData: Object
    },
    methods: {
      createSubtask() {
        this.$store.dispatch('createSubtask', this.taskData)
      },
      deleteSubtask(subtaskId, taskId) {
        this.$store.dispatch('deleteSubtask', {taskId: taskId, subtaskId})
      }
    }
  }
</script>

<style scoped>
  .container_subtask {
    padding-top: 0;
  }
  .application--light .list {
    background: transparent;
  }
</style>
