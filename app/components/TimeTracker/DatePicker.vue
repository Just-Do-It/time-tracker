<template>
  <v-container>
    <v-container fluid class="modal-mask" v-if="showModal">
      <v-container class="modal-wrapper">
        <v-layout column align-center>
          <v-date-picker v-model="selectedDate"></v-date-picker>
          <v-btn success @click="closeModal">OK</v-btn>
        </v-layout>
      </v-container>
    </v-container>
    <v-layout justify-center>
      <v-btn v-if="selectedDate" @click="openModal"><v-icon>date_range</v-icon>{{  selectedDate  }}</v-btn>
      <v-btn v-else @click="openModal"><v-icon>date_range</v-icon>{{ new Date() | formatDate }}</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
  export default{
    data() {
      return {
        showModal: false,
      }
    },
    computed: {
      selectedDate: {
        get () {
          return this.$store.state.selectedDate
        },
        set (date) {
          this.$store.commit('updateSelectedDate', date)
        }
      }
    },
    filters: {
      formatDate(date) {
        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;
        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
        let yy = date.getFullYear();
        if (yy < 10) yy = '0' + yy;
        return yy + '-' + mm + '-' + dd;
      }
    },
    methods: {
      openModal: function () {
        this.showModal = true;
      },
      closeModal: function () {
        this.showModal = false;
      }
    }
  }
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity .3s ease;
  }
  .modal-wrapper {
    width: 50%;
    height: 50%;
    background: #fff;
  }

</style>
