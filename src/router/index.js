import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Help from '../pages/Help.vue'
import Get from '../pages/Get.vue'
import Put from '../pages/Put.vue'
import Eat from '../pages/Eat.vue'
import Tx from '../pages/Tx.vue'
import Qr from '../pages/Qr.vue'
import Account from '../pages/Account.vue'
import Walk from '../pages/Walk.vue'
import User from '../pages/User.vue'
import Car from '../pages/Car.vue'



const routes = [
  { path: '/', component: Home },
  { path: '/get', component: Get },
  { path: '/put', component: Put },
  { path: '/help', component: Help },
  { path: '/eat', component: Eat },
  { path: '/tx', component: Tx },
  { path: '/qr', component: Qr },
  { path: '/account', component: Account },
  { path: '/walk', component: Walk },
  { path: '/user/:id', component: User, name: 'user' },
  { path: '/car', component: Car },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
