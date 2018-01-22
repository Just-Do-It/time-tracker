<template>
  <v-layout align-center class="subtask">
    <v-icon>subdirectory_arrow_right</v-icon>
    <template v-if="modeEdit == subtaskData.id">
      <v-text-field
        name="subtask-name"
        label="Subtask name"
        v-model="editedName"
        autofocus
        hide-details
      ></v-text-field>
      <v-btn class="success" @click="onSaveChanges">Save</v-btn>
      <v-btn class="error" @click="modeEdit = false">Close</v-btn>
    </template>
    <template v-else>
      <v-checkbox hide-details :label="subtaskData.name" v-model="subtaskData.status" @click.native="changeStatus"></v-checkbox>
      <v-btn icon @click="editSubtask"><v-icon>mode_edit</v-icon></v-btn>
      <v-btn icon @click="deleteSubtask(subtaskData.id, subtaskData.taskId)"><v-icon>delete</v-icon></v-btn>
    </template>
  </v-layout>
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
      subtaskData: Object,
      deleteSubtask: {
        type: Function
      }
    },
    methods: {
      editSubtask() {
        this.editedName = this.subtaskData.name
        this.modeEdit = this.subtaskData.id
      },
      onSaveChanges() {
        if (this.editedName.trim() === '') {
          return
        }
        this.modeEdit = false
        this.$store.dispatch('updateSubtaskData', {
          id: this.subtaskData.id,
          name: this.editedName
        })
      },
      changeStatus() {
        this.$store.dispatch('updateSubtaskData', {
          id: this.subtaskData.id,
          status: this.subtaskData.status
        })
      }
    }
  }
</script>

<style scoped>
  .subtask >>> .input-group--active label {
    font-style: italic;
    text-decoration: line-through;
  }
</style>
