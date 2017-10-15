import MainPage from './components/MainPage.vue';
import Auth from './components/Auth.vue';
import DataSelection from './components/DataSelection.vue';
import TimeTracker from './components/TimeTracker.vue';

export default [
    { path: '/', component: MainPage },
    { path: '/auth', component: Auth },
    { path: '/date', component: DataSelection },
    { path: '/time-tracker', component: TimeTracker }
];
