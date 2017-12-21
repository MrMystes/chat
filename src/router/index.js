import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import chat from '@/components/chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children:[{
        path:'/chat',
        name:'chat',
        component:chat
      }]
    }
  ]
})
