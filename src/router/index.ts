import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// 定义路由表
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/HomePage.vue'),
  },
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(), // history 模式（也可用 createWebHashHistory）
  routes,
})

export default router
