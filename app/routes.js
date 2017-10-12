import MainPage from './components/MainPage.vue';
import DataSelection from './components/DataSelection.vue';
import TimeTracker from './components/TimeTracker.vue';

export default  [
    { path: '/', component: MainPage },
    { path: '/date', component: DataSelection },
    { path: '/time-tracker', component: TimeTracker }
];
