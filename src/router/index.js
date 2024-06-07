import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoView from '../views/TodoView.vue'
import KanbanView from '../views/KanbanView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todo',
      name: 'TodoList',
      component: TodoView
    },
    {
      path: '/kanban',
      name: 'Kanban',
      component: KanbanView
    }
  ]
})

export default router
