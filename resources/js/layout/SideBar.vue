<template>
    <ul class="list-group">
        <router-link to="/" class="list-group-item list-group-item-action" :class="{'active': $route.name =='home' }" aria-current="true">
            <i class="fas fa-tachometer-alt"></i> Dashboard </router-link>

        <router-link to="/reports" class="list-group-item list-group-item-action" :class="{'active': $route.name =='reports' }" aria-current="true">
            <i class="fas fa-book-open"></i> Reports </router-link>
    </ul>
</template>

<script>
export default {
    name: "SideBar"
}
</script>

<style scoped>
.active {
    background-color: #7c6aef;
}
</style>
