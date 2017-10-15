import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import routes from './routes';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
});

new Vue({
    router,
    el: '#app',
    render: h => h(App)
});