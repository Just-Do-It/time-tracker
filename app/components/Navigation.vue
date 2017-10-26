<template>
  <v-bottom-nav shift :value="true" class="main-menu">
    <v-btn v-for="item,i in menuItems" :to="item.path" :key="i" exact >
      <span>{{ item.title }}</span>
      <v-icon class="white--text">{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
  export default {
    data() {
      return {
        menuItems: [
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
  .active span {
    color: #fff;
  }
</style>
