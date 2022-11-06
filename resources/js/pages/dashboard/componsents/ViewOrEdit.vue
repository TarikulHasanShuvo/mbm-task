<template>
    <div class="">
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Customer
                            {{ $parent.editable ? 'Edit' : 'View' }}</h5>
                        <div class="">
                            <button type="button" @click="$parent.editable=!$parent.editable" :class="`btn btn-${$parent.editable ? 'secondary' : 'warning'}`">
                                {{ $parent.editable ? 'View' : 'Edit' }}
                            </button>
                            <button type="button" class="ms-2 btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <label v-if="!$parent.editable" class="form-label fw-bold"> : {{ $parent.editData.name }}</label>
                            <input v-else v-model="$parent.editData.name" type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Phone</label>
                            <label v-if="!$parent.editable" class="form-label fw-bold"> :  {{ $parent.editData.phone }}</label>
                            <input v-else v-model="$parent.editData.phone" type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Address</label>
                            <label v-if="!$parent.editable" class="form-label fw-bold"> :  {{ $parent.editData.address }}</label>
                            <input v-else v-model="$parent.editData.address" type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">City</label>
                            <label v-if="!$parent.editable" class="form-label fw-bold"> :  {{ $parent.editData.city }}</label>
                            <input v-else v-model="$parent.editData.city" type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Zip</label>
                            <label v-if="!$parent.editable" class="form-label fw-bold"> :  {{ $parent.editData.zip }}</label>
                            <input v-else v-model="$parent.editData.zip" type="text" class="form-control">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button v-if="$parent.editable" type="button" data-bs-dismiss="modal" class="btn btn-success">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ViewOrEdit"
}
</script>

<style scoped>

</style>
