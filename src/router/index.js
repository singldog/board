import Vue from 'vue'
import Router from 'vue-router'
import BoardMain from '../components/BoardMain'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/BoardMain'
    },
    {
      path:'/BoardMain',
      name:'BoardMain',
      component:BoardMain
    }
  ]
})
