<template>
    <div class="row">
        <div class="col-md-2">
            <Exports/>
        </div>
        <div class="col-md-10">
        <div class="d-flex justify-content-between">
            <div class="ms-2">
                <select v-model="$parent.pagination.perPage" class="form-select">
                    <option value="10" selected>10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option :value="$parent.pagination.totalItems">All</option>
                </select>
            </div>
            <div class="">
                <input v-model.trim="$parent.search.any" type="text" class="form-control"  placeholder="Search...">
            </div>
        </div>
        </div>
    </div>
</template>

<script>

import Exports from "./Exports";
export default {
    name: "SearchComponent",
    components: {Exports}
}
</script>

<style scoped>

</style>
