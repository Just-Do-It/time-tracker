<template>
  <div>
    <div class="modal-mask" v-if="showModal" @click="closeModal">
      <div class="modal-wrapper">
        <v-flex class="date">
          <v-date-picker v-model="date"></v-date-picker>
        </v-flex>
        <button class="modal-default-button" @click="closeModal">Ok</button>
      </div>
    </div>
    <button v-if="date" @click="openModal">{{date}}</button>
    <button v-else @click="openModal">{{new Date() | formatDate}}</button>
  </div>
</template>

<script>
  export default{
    props: {
      date: Date
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
    data() {
      return {
        showModal: false
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
