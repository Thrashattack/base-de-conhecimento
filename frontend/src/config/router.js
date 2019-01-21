import Vue from 'vue'
import VueRoutes from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'

Vue.use(VueRoutes)

const routes = [{
    name: 'Home',
    path: '/',
    component: Home
}, {
    name: 'Admin',
    path: '/admin',
    component: AdminPages

}]

export default new VueRoutes({
    mode: 'history',
    routes
})

