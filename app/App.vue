<template>
  <v-app>
    <template v-if="userIsAuthenticated">
      <app-navigation></app-navigation>
      <router-view></router-view>
    </template>
    <template v-else>
      <main>
        <app-signin></app-signin>
      </main>
    </template>
  </v-app>
</template>

<script>
  import Navigation from './components/Navigation.vue'
  import SignIn from './components/Auth/SignIn.vue'

  export default {
    components: {
      'app-navigation': Navigation,
      'app-signin': SignIn
    },
    computed: {
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    }
  }
</script>

<style>

</style>
