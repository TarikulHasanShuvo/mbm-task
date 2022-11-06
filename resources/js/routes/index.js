import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../pages/dashboard/Dashboard.vue'),
        },
        {
            path: '/reports',
            name: 'reports',
            component: () => import('../pages/reports/Reports.vue'),
        },
    ]
});
