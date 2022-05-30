import { createRouter, createWebHashHistory } from 'vue-router'
import GlobalFeed from '@/views/GlobalFeed.vue'
import YourFeed from '@/views/YourFeed.vue'
import TagFeed from '@/views/TagFeed.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Article from '@/views/Article.vue'
import CreateArticle from '@/views/CreateArticle.vue'
import EditArticle from '@/views/EditArticle.vue'
import Settings from '@/views/Settings.vue'

const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed
  },
  {
    path: '/feed',
    name: 'yourFeed',
    component:  YourFeed
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component:  TagFeed
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    component:  CreateArticle
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component:  Article
  },
  {
    path: '/articles/:slug/edit',
    name: 'editArticle',
    component:  EditArticle
  },
  {
    path: '/settings',
    name: 'settings',
    component:  Settings
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
  {
    path: '/register',
    name: 'register',
    component:  Register
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
