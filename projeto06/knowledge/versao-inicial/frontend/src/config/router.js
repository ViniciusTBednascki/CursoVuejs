import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home.vue'
import AdminPages from '../components/admin/AdminPages.vue'
import ArticlesByCategory from '../components/article/ArticlesByCategory.vue'
import ArticleById from '../components/article/ArticleById.vue'
import Auth from '../components/auth/Auth.vue'

import { userKey } from '@/global'

Vue.use(VueRouter)

const routes = [{
    name: 'Home',
    path: '/',
    component: Home
}, {
    name: 'AdminPages',
    path: '/admin',
    component: AdminPages,
    meta: { requiresAdmin: true }
}, {
    name: 'ArticlesByCategory',
    path: '/categories/:id/articles',
    component: ArticlesByCategory
}, {
    name: 'ArticleById',
    path: '/articles/:id',
    component: ArticleById
}, {
    name: 'Auth',
    path: '/auth',
    component: Auth
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey)

    if(to.matched.some(record => record.meta.requiresAdmin)) {
        const user = JSON.parse(json)
        user && user.admin ? next() : next({ path: '/'})
    } else {
        next()
    }
})

export default router