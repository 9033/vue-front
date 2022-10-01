import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/cal',
    name: 'Cal',
    component: () => import('../views/Cal.vue')
  },
  // {
  //   path: '/table',
  //   name: 'Table',
  //   component: () => import('../views/Table.vue')
  // },
  {
    path: '/sw',
    name: 'Sw',
    component: () => import('../views/Soulworker.vue')
  },
  {
    path: '/css-ani',
    name: 'CssAni',
    component: () => import('../views/CssAni.vue')
  },
  {
    path: '/transition-and-animation',
    name: 'TransitionAndAnimation',
    component: () => import('../views/TransitionAndAnimation.vue')
  },
  {
    path: '/message-button',
    name: 'MessageButton',
    component: () => import('../views/MessageButton.vue')
  },
  {
    path: '/sync-values',
    name: 'sync input values',
    component: () => import('../views/SyncValues.vue')
  },
  {
    path: '/inline-template',
    name: 'inline template',
    component: () => import('../views/Component.vue')
  },
  {
    path: '/dynamic-component',
    name: 'dynamic-component',
    component: () => import('../views/DataView.vue')
  },
  {
    path: '/recursion-component',
    name: 'recursion-component',
    component: () => import('@/views/Component-2.vue')
  },
  {
    path: '/top-scroll-bar',
    name: 'top-scroll-bar',
    component: () => import('@/views/TopScrollBar.vue')
  },
  {
    path: '/depth-components',
    name: 'depth-components',
    component: () => import('@/views/DepthComponents.vue')
  },
]

let router = new VueRouter({
  routes
})
router.routes=routes;//router목록도 같이 내보내서 동적으로 메뉴를 만들게함.

export default router
