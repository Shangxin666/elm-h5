import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: () => import('@/views/tabs/TabsView.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/tabs/home/HomeView.vue'),
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('@/views/tabs/order/orderView.vue'),
      },
      {
        path: '/me',
        name: 'me',
        component: () => import('@/views/tabs/me/meView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(), // history 模式（也可用 createWebHashHistory）
  routes,
})

export default router
