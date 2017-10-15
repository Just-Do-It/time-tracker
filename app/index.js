import Vue from 'vue';
import router from './router';
import Vuetify from 'vuetify';
import App from './App.vue';

Vue.use(Vuetify);

new Vue({
    router,
    el: '#app',
    render: h => h(App)
});