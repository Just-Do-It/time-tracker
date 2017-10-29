<template>
  <v-container class="container_subtask">
    <v-layout justify-end>
      <v-flex xs11>
        <v-list>
          <v-list-tile v-for="subtask in taskData.subTasks" :key="subtask.id">
            <v-layout align-center>
              <v-icon>subdirectory_arrow_right</v-icon>
              <template v-if="idSubtask == subtask.id">
                <v-text-field
                  name="subtask-name"
                  label="Subtask name"
                  v-model="subtask.name"
                  autofocus
                  hide-details
                ></v-text-field>
                <v-btn class="success" @click="editSubtask">OK</v-btn>
              </template>
              <template v-else>
                <v-checkbox hide-details :label="subtask.name" v-model="subtask.status"></v-checkbox>
                <v-btn icon @click="editSubtask(subtask.id)"><v-icon>mode_edit</v-icon></v-btn>
                <v-btn icon @click="deleteSubtask(subtask.id)"><v-icon>delete</v-icon></v-btn>
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
        <v-btn block @click="createSubtask">Add subtask</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default{
    data() {
      return {
        idSubtask: null
      }
    },
    props: {
      taskData: Object
    },
    methods: {
      createSubtask() {
        let lastId = this.taskData.subTasks.length > 0 ? this.taskData.subTasks[this.taskData.subTasks.length - 1].id : 0
        let newSubtask = {
          id: lastId + 1,
          name: "subtask name",
          status: false
        }
        this.taskData.subTasks.push(newSubtask)
      },
      deleteSubtask(id) {
        this.taskData.subTasks.some((element, index, array) => {
          if(element.id === id) {
            this.taskData.subTasks.splice(index, 1)
            return element
          }
        })
      },
      editSubtask(id) {
        this.idSubtask = id || null
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
