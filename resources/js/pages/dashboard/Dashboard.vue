<template>
    <div class="row">
        <SearchComponent></SearchComponent>
        <div class="col-md-2">
            <ul class="list-group list-group-flush mt-4">
                <li class="list-group-item" v-for="column in columnList">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="column.value" :value="column.value"
                               :id="`flexCheckDefault-${column.name}`">
                        <label class="form-check-label" for="flexCheckDefault">
                            {{ column.name }}
                        </label>
                    </div>
                </li>

            </ul>
        </div>
        <div class="col-md-10">
            <div>
                <table class="table table-striped ">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th v-if="filterColumn('Name')" scope="col">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <span class="me-1">Name</span>
                                    <input type="text" v-model.trim="search.name" @keyup="searchHandaler()">
                                </div>
                                <i role="button" @click="sorting()" class="fa fa-sort mt-2"></i>
                            </div>
                        </th>
                        <th v-if="filterColumn('Phone')" scope="col">
                            <div class="d-flex justify-content-between">
                                <div><span>Phone</span>
                                    <input type="tel" v-model.trim="search.phone" @keyup="searchHandaler()"></div>
                                <i role="button" @click="sorting()" class="fa fa-sort mt-2"></i>
                            </div>
                        </th>
                        <th v-if="filterColumn('Address')" scope="col">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <span>Address</span>
                                    <input type="text" v-model.trim="search.address" @keyup="searchHandaler()">
                                </div>
                                <i role="button" @click="sorting()" class="fa fa-sort mt-2"></i>
                            </div>
                        </th>
                        <th v-if="filterColumn('City')" scope="col">
                            <div class="d-flex justify-content-between">
                                <span>City</span>
                                <i role="button" @click="sorting()" class="fa fa-sort"></i>
                            </div>
                        </th>
                        <th v-if="filterColumn('Zip')" scope="col">
                            <div class="d-flex justify-content-between">
                                <span>Zip</span>
                                <i role="button" @click="sorting()" class="fa fa-sort"></i>
                            </div>
                        </th>
                        <th v-if="filterColumn('Method')" scope="col">
                            <div class="d-flex justify-content-between">
                                <span>Method</span>
                                <i role="button" @click="sorting()" class="fa fa-sort"></i>
                            </div>
                        </th>
                        <th v-if="filterColumn('Amount')" scope="col">
                            <div class="d-flex justify-content-between">
                                <span>Amount</span>
                                <i role="button" @click="sorting()" class="fa fa-sort"></i>
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody v-if="customers.length">
                    <tr v-for="(customer,index) in customers">
                        <th @contextmenu="mouseRightClickEvent($event,customer,'id',index)" scope="row">
                            {{ customer ? customer.id : '' }}
                            <DropDownMenu cell-name="id" :cell-index="index"/>
                        </th>
                        <td @contextmenu="mouseRightClickEvent($event,customer,'name',index)" v-if="filterColumn('Name')">
                            {{ customer.name ? customer.name : '-' }}
                            <DropDownMenu cell-name="name" :cell-index="index"/>
                        </td>
                        <td @contextmenu="mouseRightClickEvent($event,customer,'phone',index)" v-if="filterColumn('Phone')">
                            {{ customer.phone ? customer.phone : '-' }}
                            <DropDownMenu cell-name="phone" :cell-index="index"/>
                        </td>
                        <td @contextmenu="mouseRightClickEvent($event,customer,'address',index)" v-if="filterColumn('Address')">
                            {{ customer.customer_address ? customer.customer_address.address : '-' }}
                            <DropDownMenu cell-name="address" :cell-index="index"/>
                        </td>
                        <td @contextmenu="mouseRightClickEvent($event,customer,'city',index)" v-if="filterColumn('City')">{{
                                customer.customer_address ? customer.customer_address.city : '-'
                            }}
                            <DropDownMenu cell-name="city" :cell-index="index"/>
                        </td>
                        <td @contextmenu="mouseRightClickEvent($event,customer,'zip',index)" v-if="filterColumn('Zip')">{{
                                customer.customer_address ? customer.customer_address.zip : '-'
                            }}
                            <DropDownMenu cell-name="zip" :cell-index="index"/>
                        </td>
                        <td @contextmenu="mouseRightClickEvent($event,customer,'method',index)" v-if="filterColumn('Method')">
                        <span v-if="customer.customer_purchase.length"
                              v-for="customer_purchase in customer.customer_purchase">
                            <span> {{ customer_purchase.method }}</span><br>
                        </span>
                            <DropDownMenu cell-name="method" :cell-index="index"/>
                        </td>
                        <td @contextmenu="mouseRightClickEvent($event,customer,'max_amount',index)"
                            v-if="filterColumn('Amount')">
                        <span v-if="customer.customer_purchase.length"
                              v-for="customer_purchase in customer.customer_purchase">
                            <span> {{ customer_purchase.max_amount }}</span><br>
                        </span>
                            <DropDownMenu cell-name="max_amount" :cell-index="index"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="pagination mt-5" v-if="customers.length">
                    <pagination v-model="pagination.page" :perPage="parseInt(pagination.perPage)"
                                :records="pagination.totalItems"
                                @paginate="getCustomers()"/>
                </div>
                <h3 v-else class="text-muted mt-4 text-center">No Data Found...</h3>
            </div>
        </div>
        <ViewOrEdit></ViewOrEdit>
    </div>
</template>

<script>
import axios from "axios";

import SearchComponent from "./componsents/SearchComponent";
import DropDownMenu from "./componsents/DropDownMenu";
import ViewOrEdit from "./componsents/ViewOrEdit";

export default {
    name: "Dashboard",
    components: {ViewOrEdit, DropDownMenu, SearchComponent},
    data() {
        return {
            pagination: {
                page: 1,
                perPage: 10,
                totalItems: 0,
            },
            customers: [],
            columnList: [
                {
                    name: 'Name',
                    value: true,
                },
                {
                    name: 'Phone',
                    value: true,
                },
                {
                    name: 'Address',
                    value: true,
                },
                {
                    name: 'City',
                    value: false,
                },
                {
                    name: 'Zip',
                    value: false,
                },
                {
                    name: 'Method',
                    value: false,
                },
                {
                    name: 'Amount',
                    value: false,
                }
            ],
            search: {
                name: "",
                phone: "",
                address: "",
                any: ""
            },
            timer: null,
            editable : false,
            editData : {},
        }
    },
    mounted() {
        this.getCustomers();
    },
    methods: {
        getCustomers() {
            const prams = this.makePrams()
            axios.get(`customers${prams}`).then(res => {
                this.customers = res.data.customers.data
                this.pagination.totalItems = res.data.customers.total;
                this.$store.commit('setCustomerRecords', this.customers)
            })
        },
        filterColumn(menu) {
            return this.columnList.find(item => item.name == menu).value
        },
        searchHandaler() {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.pagination.page = 1;
                this.getCustomers();
            }, 300)

        },
        sorting() {
            this.customers.reverse()
        },
        makePrams() {
            let prams = "";
            prams += this.search.name ? '&name=' + this.search.name : '';
            prams += this.search.phone ? '&phone=' + this.search.phone : '';
            prams += this.search.address ? '&address=' + this.search.address : '';
            prams += this.search.any ? '&any=' + this.search.any : '';
            return `?page=${this.pagination.page}&per_page=${this.pagination.perPage + prams}`;
        },
        mouseRightClickEvent(e,customer, name, index) {
            e.preventDefault()
            document.getElementById(`navbarDropdown-${name}-${index}`).click();
            this.editData = {
                'name' : customer.name,
                'phone' : customer.phone,
                'address' : customer.customer_address ? customer.customer_address.address : '',
                'city' : customer.customer_address ? customer.customer_address.city : "",
                'zip' : customer.customer_address ? customer.customer_address.zip : "",
            }
        }
    },
    watch: {
        'pagination.perPage': function () {
            this.pagination.page = 1;
            this.getCustomers();
        },
        'search.any': function () {
            this.pagination.page = 1;
            this.getCustomers();
        },
    }
}
</script>

<style scoped>

</style>
