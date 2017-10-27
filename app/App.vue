<template>
  <v-app>
    <!--<template v-if="userIsAuthenticated">-->
      <app-navigation></app-navigation>
    <!--</template>-->

    <!--<template v-else-if="userIsSignIn">-->
      <!--<main>-->
        <!--<app-signin></app-signin>-->
      <!--</main>-->
    <!--</template>-->

    <router-view></router-view>
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
      },

      userIsSignIn () {
        return this.$route.fullPath === '/'
      }
    }
  }
</script>

<style>

</style>
