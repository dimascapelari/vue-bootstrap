import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestesView from '../views/TestesView.vue'
import GridView from '../views/GridView.vue'
import ColumnsView from '../views/ColumnsView.vue'
import TextosView from '../views/TextosView.vue'
import ImagensView from '../views/ImagensView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/testes',
    name: 'testes',
    component: TestesView
  },
  {
    path: '/grid',
    name: 'grid',
    component: GridView
  },
  {
    path: '/columns',
    name: 'columns',
    component: ColumnsView
  },
  {
    path: '/textos',
    name: 'textos',
    component: TextosView
  },
  {
    path: '/imagens',
    name: 'imagens',
    component: ImagensView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
