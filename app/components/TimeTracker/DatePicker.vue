<template>
  <v-container>
    <v-dialog v-model="showDialog">
      <v-layout class="grey lighten-4" column align-center>
        <v-date-picker v-model="selectedDate"></v-date-picker>
        <v-btn class="success" @click.native="showDialog = false">OK</v-btn>
      </v-layout>
    </v-dialog>
    <v-layout justify-center>
      <v-btn @click.native.stop="showDialog = true">
        <v-icon left>date_range</v-icon>
        {{  selectedDate | formatDate }}
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
  export default{
    data() {
      return {
        showDialog: false
      }
    },
    computed: {
      selectedDate: {
        get () {
          const date = new Date(this.$store.getters.selectedDate)
          return date
        },
        set (date) {
          this.$store.dispatch('updateSelectedDate', new Date(date))
        }
      }
    },
    filters: {
      formatDate(date) {
        let dd = date.getDate()
        if (dd < 10) dd = '0' + dd
        let mm = date.getMonth() + 1
        if (mm < 10) mm = '0' + mm
        let yy = date.getFullYear()
        if (yy < 10) yy = '0' + yy
        return yy + '-' + mm + '-' + dd
      }
    }
  }
</script>

<style scoped>

</style>
