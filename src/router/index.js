import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Post from '@/views/Post.vue'
import Admin from '@/views/Admin.vue'
import Creer from '@/views/Creer.vue'
import PostEdit from '@/views/PostEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
   
  },
  
  {
    path: '/creer',
    name: 'Creer',
    component: Creer
  },

  {
    path:'/post/:id/edit',
    name:'post-edit',
    component:PostEdit,
    params:true,
  },

  {
    path:'/post/:id',
    name:'post',
    component:Post,
    params:true,
  },
 
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
