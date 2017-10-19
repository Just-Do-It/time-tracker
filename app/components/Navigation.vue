<template>
  <v-bottom-nav shift :value="true" class="main-menu">
    <v-btn v-for="item in menuItems" :to="item.path" exact >
      <span>{{ item.title }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
  export default {
    data() {
      return {
        menuItems: [
          {
            path: '/',
            title: 'Main',
            icon: 'home'
          },
          {
            path: '/date',
            title: 'Choice date',
            icon: 'date_range'
          },
          {
            path: '/time-tracker',
            title: 'Tab tracker',
            icon: 'access_time'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .main-menu {
    top: 0;
    position: static;
  }
</style>
