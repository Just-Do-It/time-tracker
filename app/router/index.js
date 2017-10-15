import Vue from 'vue';
import Router from 'vue-router';

import MainPage from '../components/MainPage.vue';
import Auth from '../components/Auth.vue';
import DataSelection from '../components/DataSelection.vue';
import TimeTracker from '../components/TimeTracker.vue';

Vue.use(Router);

export default new Router({
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/auth',
            component: Auth
        },
        {
            path: '/date',
            component: DataSelection
        },
        {
            path: '/time-tracker',
            component: TimeTracker
        }
    ]
});
