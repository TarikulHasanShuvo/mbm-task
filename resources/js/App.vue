<template>
    <div class="position-relative">
        <NavBar></NavBar>
        <div class="container-fluid row">
            <div class="col-1">
                <SideBar></SideBar>
            </div>
            <div class="col-11">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from "./layout/NavBar";
import Dashboard from "./pages/dashboard/Dashboard";
import SideBar from "./layout/SideBar";

export default {
    name: "App",
    components: {SideBar, Dashboard, NavBar},
}
</script>

<style>

</style>
