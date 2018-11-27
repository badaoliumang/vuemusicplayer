import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from "@/pages/home"
import Artists from "@/pages/artists"
import ListCate from "@/pages/listcate"
import Ucenter from "@/pages/ucenter"
import Search from "@/pages/search"
Vue.use(Router)

export default new Router({
  routes: [

      {
      path: '/',
      name: 'Index',
      redirect:"/home",
      component: Index,
      children:[
        {
          path: 'home',
          component: Home
        },
        {
            path:"artists",
            component:Artists
          },
          {
            path:"listcate",
            component:ListCate
          },
          {
            path:"ucenter",
            component:Ucenter
          },
          {
            path:"search",
            component:Search
          }
      ]
    }

  ]
})
