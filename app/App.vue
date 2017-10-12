<template>
    <div class="app-container">
        <app-navigation></app-navigation>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navigation from './components/Navigation.vue';

    export default {
        components: {
            'app-navigation': Navigation
        }
    }
</script>

<style>

</style>