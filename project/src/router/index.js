import Portifolio from '../components/Portifolio'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/portifolio', component: Portifolio }
]


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;