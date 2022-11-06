<template>
    <div class="d-flex w-100">
        <export-excel
            class="btn btn-default"
            :data="customers"
            type="excel"
            name="filename.xls">
            <button class="btn btn-sm btn-success">Download Excel</button>
        </export-excel>
        <export-excel
            class="btn btn-default"
            :data="customers"
            type="csv"
            name="filename.xls">
            <button class="btn btn-sm btn-warning">Download CSV</button>
        </export-excel>
    </div>
</template>

<script>
export default {
    name: "Exports",
    computed: {
        customers() {
            let customersData = []
             this.$parent.$parent.customers.forEach((customer) =>{
                 let payment = ""
                 if(customer.customer_purchase.length){
                        customer.customer_purchase.forEach((purchase) =>{
                            payment += "Method = "+purchase.method + ", Amount = "+purchase.max_amount +" | "
                        })
                 }
                customersData.push({
                    'Name': customer.name,
                    'Phone': customer.phone,
                    'Address': customer.customer_address ?  customer.customer_address.address : '',
                    'City':  customer.customer_address ?  customer.customer_address.city : '',
                    'Zip':  customer.customer_address ?  customer.customer_address.zip : '',
                    'Payment':  payment,
                    'Created At': customer.created_at,
                    'Updated At': customer.updated_at,
                })
            })


            return customersData;
        }
    }
}
</script>

<style scoped>

</style>
