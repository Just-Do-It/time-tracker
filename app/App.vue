<template>
    <div class="app-container">
        <div class="app-routes">
            <router-link to="/date">Choice date</router-link>
            <router-link to="/time-tracker">Tab tracker</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>

</style>