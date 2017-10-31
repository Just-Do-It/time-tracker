<template>
  <v-bottom-nav shift :value="true" class="main-menu">
    <v-btn
      v-for="item,i in menuItems"
      :to="item.path"
      :key="i"
      exact>
      <span>{{ item.title }}</span>
      <v-icon class="white--text">{{ item.icon }}</v-icon>
    </v-btn>
    <v-btn class="logout" @click="onLogout">
      <v-icon class="white--text" >
        exit_to_app
      </v-icon>
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
          },
        ]
      }
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style scoped>
  .main-menu {
    top: 0;
    position: relative;
  }
  .active span {
    color: #fff;
  }
  .logout{
    position: absolute;
    right: 0;
    color: #fff;
    opacity: 0.8;
  }
  .logout .icon {
    transform: translate3d(0,0,0) !important;
  }
</style>
