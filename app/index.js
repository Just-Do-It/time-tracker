import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import router from './router';
import App from './App.vue';

Vue.use(Vuetify);
Vue.use(Vuex);

new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
