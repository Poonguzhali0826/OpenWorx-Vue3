import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact-us',
      component: () => import('../views/contact-us.vue')
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('../views/sign-in.vue')
    },
    {
      path: '/contact/add',
      name: 'AddContact',
      component: () => import('../views/AddContact.vue')
    },
    {
      path: '/contact/edit/:contactId',
      name: 'EditContact',
      component: () => import('../views/EditContact.vue')
    },
    {
      path: '/contact/view/:contactId',
      name: 'ViewContact',
      component: () => import('../views/ViewContact.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: () => import('../views/PageNotFound.vue')
    }
  ]
})

export default router
