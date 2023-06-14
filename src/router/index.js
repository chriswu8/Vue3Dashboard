import { createRouter, createWebHistory } from 'vue-router'
import SignupForm from '../views/SignupForm.vue'
import Dashboard from '../views/Dashboard.vue';


const routes = [
  {
    path: '/signupForm',
    name: 'signupForm',
    component:  SignupForm
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component:  Dashboard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
