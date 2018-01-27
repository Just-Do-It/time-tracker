<template>
  <v-container>
    <date-picker></date-picker>
    <task-list v-if="!loading"></task-list>
    <v-layout>
     <v-flex xs12 class="text-xs-center">
       <v-progress-circular
         indeterminate
         class="primary--text"
         :width="7"
         :size="70"
         v-if="loading"></v-progress-circular>
     </v-flex>
   </v-layout>
   <total-time></total-time>
  </v-container>
</template>

<script>
  import TaskList from './TaskList.vue'
  import TotalTime from './TotalTime.vue'
  import DatePicker from './DatePicker.vue'
  import mockTaskList from '../../model/mock-task-list'

  export default {
    components: {
      'task-list': TaskList,
      'date-picker': DatePicker,
      'total-time': TotalTime
    },
    mounted() {
      window.addEventListener('beforeunload', this.checkActiveTaskWhenClosing);
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      checkActiveTaskWhenClosing(event) {
        if(this.$store.getters.activeTask) {
          event.returnValue = 'Are you sure?';
          return "You have active task!"
        }
      }
    }
  }
</script>

<style>
  ol, ul {
    padding-left: 0;
    width: 100%;
  }
  @media only screen and (max-width: 960px) {
    .container {
      max-width: 100%;
    }
  }
</style>
