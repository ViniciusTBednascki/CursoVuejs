import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home.vue'
import AdminPages from '../components/admin/AdminPages.vue'

Vue.use(VueRouter)

const routes = [{
    name: 'Home',
    path: '/',
    component: Home
}, {
    name: 'AdminPages',
    path: '/admin',
    component: AdminPages
}]

export default new VueRouter({
    mode: 'history',
    routes
})