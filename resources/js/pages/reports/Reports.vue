<template>
<div class="">
    <h1 class="mb-4">Reports</h1>
    <table class="table table-striped">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">
                Name
            </th>
            <th scope="col"> Phone
            </th>
            <th scope="col">
                Address
            </th>
            <th scope="col">
                City
            </th>
            <th scope="col">
                Zip
            </th>
            <th scope="col">
                Method
            </th>
            <th scope="col">
                Amount
            </th>
        </tr>
        </thead>
        <tbody v-if="$store.state.customerRecords.length">
        <tr v-for="(customer) in $store.state.customerRecords">
            <th scope="row">
                {{ customer ? customer.id : '' }}
            </th>
            <td>
                {{ customer.name ? customer.name : '-' }}
            </td>
            <td>
                {{ customer.phone ? customer.phone : '-' }}
            </td>
            <td>
                {{ customer.customer_address ? customer.customer_address.address : '-' }}
            </td>
            <td>{{
                    customer.customer_address ? customer.customer_address.city : '-'
                }}
            </td>
            <td>{{
                    customer.customer_address ? customer.customer_address.zip : '-'
                }}
            </td>
            <td>
                        <span v-if="customer.customer_purchase.length"
                              v-for="customer_purchase in customer.customer_purchase">
                            <span> {{ customer_purchase.method }}</span><br>
                        </span>
            </td>
            <td>                        <span v-if="customer.customer_purchase.length"
                                              v-for="customer_purchase in customer.customer_purchase">
                            <span> {{ customer_purchase.max_amount }}</span><br>
                        </span>
            </td>
        </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    name: "Reports"
}
</script>

<style scoped>

</style>
