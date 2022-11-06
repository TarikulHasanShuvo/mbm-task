import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        customerRecords: [],
    },
    mutations: {
        setCustomerRecords(state, payload) {
            state.customerRecords = payload;
        }
    }
})

export default store;
