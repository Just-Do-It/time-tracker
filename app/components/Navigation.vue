<template>
        <!-- <nav class="navigation">
            <router-link to="/" exact>Main</router-link>
            <router-link to="/date">Choice date</router-link>
            <router-link to="/time-tracker">Tab tracker</router-link>
        </nav> -->
  <v-app class="navigation">
    <ul>
      <li v-for="item in menuItems">
        <router-link :to="item.path">
          <v-icon>{{ item.icon }}</v-icon>
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </v-app>
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

<style>
  .navigation .active {
      color: brown;
  }
  .navigation ul {
    list-style: none;
  }
  .navigation > ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
  }
  .navigation > ul > li > a {
    text-decoration: none;
  }
  .navigation > ul > li > a:hover {
    color: red;
  }
  .application {
    min-height: auto;
  }
</style>
