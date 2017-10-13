import MainPage from './components/MainPage.vue';
import Auth from './components/Auth.vue';
import AuthSuccess from './components/AuthSuccess.vue';
import DataSelection from './components/DataSelection.vue';
import TimeTracker from './components/TimeTracker.vue';

export default [
    { path: '/', component: MainPage },
    { path: '/auth', component: Auth },
    { path: '/success', component: AuthSuccess },
    { path: '/date', component: DataSelection },
    { path: '/time-tracker', component: TimeTracker }
];
