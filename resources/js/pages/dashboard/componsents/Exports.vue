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
            const columnList = this.$parent.$parent.columnList;
            this.$parent.$parent.customers.forEach((customer) => {
                let method = ""
                let amount = ""
                if (customer.customer_purchase.length) {
                    customer.customer_purchase.forEach((purchase,index) => {
                        method += purchase.method + (customer.customer_purchase.length > (index+1) ? ", " : ".");
                        amount += purchase.max_amount +(customer.customer_purchase.length > (index+1) ? ", " : "");
                    })
                }
                let customerData = {}
                if (columnList.find((column) => column.name == "Name").value) customerData["Name"] = customer.name;
                if (columnList.find((column) => column.name == "Phone").value) customerData["Phone"] = customer.phone;
                if (columnList.find((column) => column.name == "Address").value) customerData["Address"] = customer.customer_address ? customer.customer_address.address : '';
                if (columnList.find((column) => column.name == "City").value) customerData["City"] = customer.customer_address ? customer.customer_address.city : '';
                if (columnList.find((column) => column.name == "Zip").value) customerData["Zip"] = customer.customer_address ? customer.customer_address.zip : '';
                if (columnList.find((column) => column.name == "Method").value) customerData["Method"] = method;
                if (columnList.find((column) => column.name == "Amount").value) customerData["Amount"] = amount;

                customersData.push(customerData)
            })
                return customersData;
        }
    }
    }
</script>

<style scoped>

</style>
