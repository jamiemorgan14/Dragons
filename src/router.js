import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'
import Game from './views/Game.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Start'
    },
    {
      path: '/start',
      name: 'Start',
      component: Start
    },
    {
      path: '/game',
      name: 'Game',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Game
    }
  ]
})
