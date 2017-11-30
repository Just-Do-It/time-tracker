<template>
  <v-container class="container_subtask">
    <v-layout justify-end>
      <v-flex xs11>
        <v-list>
          <v-list-tile v-for="subtask in taskData.subtasks" :key="subtask.id">
            <v-layout align-center>
              <v-icon>subdirectory_arrow_right</v-icon>
              <template v-if="modeEdit == subtask.id">
                <v-text-field
                  name="subtask-name"
                  label="Subtask name"
                  v-model="editedName"
                  autofocus
                  hide-details
                ></v-text-field>
                <v-btn class="success" @click="onSaveChanges(subtask)">Save</v-btn>
                <v-btn class="error" @click="modeEdit = false">Close</v-btn>
              </template>
              <template v-else>
                <v-checkbox hide-details :label="subtask.name" v-model="subtask.status"></v-checkbox>
                <v-btn icon @click="editSubtask(subtask)"><v-icon>mode_edit</v-icon></v-btn>
                <v-btn icon @click="deleteSubtask(subtask.id, taskData)"><v-icon>delete</v-icon></v-btn>
              </template>
            </v-layout>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
    <v-layout justify-end align-center>
      <v-flex xs1>
        <v-layout><v-icon>subdirectory_arrow_right</v-icon></v-layout>
      </v-flex>
      <v-flex xs10>
        <v-btn block @click="createSubtask(taskData)">Add subtask</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default{
    data() {
      return {
        modeEdit: null,
        editedName: null
      }
    },
    props: {
      taskData: Object
    },
    methods: {
      createSubtask(taskData) {
        this.$store.dispatch('createSubtask', taskData)
      },
      deleteSubtask(subtaskId, taskData) {
        this.$store.dispatch('deleteSubtask', {taskId: taskData.id, subtaskId})
      },
      editSubtask(subtask) {
        this.editedName = subtask.name
        this.modeEdit = subtask.id
      },
      onSaveChanges(subtask) {
        if (this.editedName.trim() === '') {
          return
        }
        this.modeEdit = false
        this.$store.dispatch('updateSubtaskData', {
          id: subtask.id,
          name: this.editedName
        })
      },
      changeStatus(subtask) {
        console.log(subtask);
      }
    }
  }
</script>

<style>
  .container_subtask {
    padding-top: 0;
  }
  .application--light .list {
    background: transparent;
  }
  .input-group--active label {
    font-style: italic;
    text-decoration: line-through;
  }
</style>
