<template>
  <v-app>
    <app-navigation></app-navigation>
    <router-view></router-view>
  </v-app>
</template>

<script>
  import Navigation from './components/Navigation.vue'

  export default {
    components: {
      'app-navigation': Navigation
    }
  }
</script>

<style>

</style>
