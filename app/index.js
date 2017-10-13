import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase'
import firebaseui from 'firebaseui';
import routes from './routes';
import {config} from './firebaseConfig'
import App from './App.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
});

new Vue({
    router,
    created() {
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged((user) => {
            console.log('user', user);

            if(user) {
                this.$router.push('/success');
            } else {
                this.$router.push('/auth')
            }
        });
    },
    el: '#app',
    template: '<app></app>',
    components: { App }
});