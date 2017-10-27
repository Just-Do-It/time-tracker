<template>
  <v-container class="container_subtask">
    <v-layout justify-end>
      <v-flex xs10>
        <v-list>
          <v-list-tile
            v-for="subtask in taskData.subTasks"
            :key="subtask.id"
          >
            <v-layout align-center>
              <v-icon>subdirectory_arrow_right</v-icon>
              <!-- <v-checkbox hide-details :label="subtask.name" v-model="subtask.status"></v-checkbox>
              <v-btn icon @click="openDialogEdit(subtask)"><v-icon>mode_edit</v-icon></v-btn> -->
              <template v-if="idSubtask == subtask.id">
                <v-text-field
                  name="subtask-name"
                  label="Subtask name"
                  v-model="subtask.name"
                  hide-details
                ></v-text-field>
                <v-btn class="success" @click="editSubtask">OK</v-btn>
              </template>
              <template v-else>
                <v-checkbox hide-details :label="subtask.name" v-model="subtask.status"></v-checkbox>
                <v-btn icon @click="editSubtask(subtask.id)"><v-icon>mode_edit</v-icon></v-btn>
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
      <v-flex xs9>
        <v-btn block @click="createSubtask">Add subtask</v-btn>
      </v-flex>
    </v-layout>
    <!-- <v-dialog v-model="idSubtask">
      <edit-subtask :taskData="taskData" :idSubtask="idSubtask"></edit-subtask>
    </v-dialog> -->
  </v-container>
</template>

<script>
  export default{
    data() {
      return {
        idSubtask: null,
        editInfo: {
          currentEditSubtask: null
        },
      }
    },
    props: {
      taskData: Object
    },
    methods: {
      createSubtask() {
        let lastId = this.taskData.subTasks[this.taskData.subTasks.length - 1].id
        let newSubtask = {
          id: lastId + 1,
          name: "test",
          status: false
        }
        this.taskData.subTasks.push(newSubtask)
      },
      editSubtask(id) {
        this.idSubtask = id || null
        // this.currentEditSubtask = currentSubtask;
      }
    }
  }
</script>

<style scoped>
  .container_subtask {
    padding-top: 0;
  }
  .container_subtask ul {
    background: transparent;
  }
</style>
