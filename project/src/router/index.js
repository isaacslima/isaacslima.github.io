import { createRouter, createWebHistory } from 'vue-router'
import Portifolio from '../components/Portifolio'

const routes = [
    { path: '/', component: Portifolio }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
