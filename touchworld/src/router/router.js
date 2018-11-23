import Vue from 'vue'
import Router from 'vue-router'
const NavHome = () => import('../views/NavHome/NavHome.vue')
const NavVideo = () => import('../views/NavVideo/NavVideo.vue')
const NavAbout = () => import('../views/NavAbout/NavAbout.vue')
const Article = () => import('../views/Article/Article.vue')
const Video = () => import('../views/Video/Video.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'NavHome',
      component: NavHome
    },
    {
      path: '/navVideo',
      name: 'navVideo',
      component: NavVideo
    },
    {
      path: '/navAbout',
      name: 'navAbout',
      component: NavAbout
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article
    },
    {
      path: '/video/:id',
      name: 'video',
      component: Video
    }
  ]
})
