import { createRouter, createWebHashHistory } from 'vue-router'
import GlobalFeed from '@/views/GlobalFeed.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed
  },
  {
    path: '/feed',
    name: 'yourFeed',
    component:  Register
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component:  Register
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    component:  Register
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component:  Register
  },
  {
    path: '/articles/:slug/edit',
    name: 'editArticle',
    component:  Register
  },
  {
    path: '/settings',
    name: 'settings',
    component:  Register
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component:  Register
  },
  {
    path: '/profiles/:slug/favourites',
    name: 'userProfileFavourites',
    component:  Register
  },
  {
    path: '/login',
    name: 'login',
    component:  Login
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
