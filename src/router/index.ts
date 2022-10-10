import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestesView from '../views/TestesView.vue'
import GridView from '../views/GridView.vue'
import ColumnsView from '../views/ColumnsView.vue'
import TextosView from '../views/TextosView.vue'
import ImagensView from '../views/ImagensView.vue'
import TabelasView from '../views/TabelasView.vue'
import SpacingView from '../views/SpacingView.vue'
import FormsView from '../views/FormsView.vue'
import LayoutView from '../views/LayoutView.vue'
import ComponentsView from '../views/ComponentsView.vue'
import NavsView from '../views/NavsView.vue'
import NavbarView from '../views/NavbarView.vue'
import OffcanvasView from '../views/OffcanvasView.vue'

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
  },
  {
    path: '/tabelas',
    name: 'tabelas',
    component: TabelasView
  },
  {
    path: '/spacing',
    name: 'spacing',
    component: SpacingView
  },
  {
    path: '/forms',
    name: 'forms',
    component: FormsView
  },
  {
    path: '/layout',
    name: 'layout',
    component: LayoutView
  },
  {
    path: '/components',
    name: 'components',
    component: ComponentsView
  },
  {
    path: '/navs',
    name: 'navs',
    component: NavsView
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: NavbarView
  },
  {
    path: '/offcanvas',
    name: 'offcanvas',
    component: OffcanvasView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
