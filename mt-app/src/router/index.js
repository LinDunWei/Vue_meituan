import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import BlankPage from '@/layout/blank.vue'
import Index from '@/page/index.vue'
import ChangeCity from '@/page/changeCity.vue'
import goodsList from '@/page/goodsList.vue'
import Login from '@/page/login.vue'
import Register from '@/page/register.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children:[{
        path:'/index',
        name: 'index',
        component: Index
      },
      { 
        path: '/changeCity',
        name: 'changeCity',
        component: ChangeCity
      },
      {
        path: 's/:name',
        name: 'goods',
        component: goodsList
      }
    ]
    },
    {
      path:'/blank',
      name: 'blank',
      component: BlankPage,
      children:[
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'register',
          name: 'register',
          component: Register
        }
      ]
    }
  ]
})
