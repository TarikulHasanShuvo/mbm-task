// app.js
window._ = require('lodash');
import Vue from 'vue';
import axios from 'axios';
import Pagination from 'vue-pagination-2';
import excel from 'vue-excel-export'
import 'bootstrap';
import router from './routes';
import store from './store';
Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://localhost:8000/api/'

Vue.component('app', require('./App.vue').default);
Vue.component('pagination', Pagination);
Vue.use(excel)


const app = new Vue({
    el: "#app",
    router,
    store,
});





