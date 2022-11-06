<template>
    <div class="dropdown">
        <a class="nav-link dropdown-toggle" href="#" :id="`navbarDropdown-${cellName}-${cellIndex}`" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        </a>
        <ul :id="`dropdown-menu-${cellName}-${cellIndex}`" :aria-labelledby="`navbarDropdown-${cellName}-${cellIndex}`" class="dropdown-menu">
            <li><a class="dropdown-item" @click="$parent.editable = false" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-eye me-2"></i> View</a></li>
            <li><a class="dropdown-item" @click="$parent.editable = true" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-edit  me-2"></i>Edit</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    props :['cellName','cellIndex'],
    name: "DropDownMenu"
}
</script>

<style scoped>
.dropdown-toggle::after {
    display: none!important;
}
</style>
