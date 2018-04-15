import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: resolve => require(['@/components/main/index'],resolve),
      children:[
        {
          path: 'groceries/:title/:subtitle', //杂货铺-待审核
          name: 'groceries',
          component: resolve => require(['@/components/groceries/index'],resolve),
        },
        {
          path: 'groceries/check/:title/:subtitle', //杂货铺-审核通过
          name: 'check',
          component: resolve => require(['@/components/groceries/check-success'],resolve),
        },
        {
          path: 'groceries/check-not/:title/:subtitle', //杂货铺-审核通过
          name: 'check-not',
          component: resolve => require(['@/components/groceries/check-not-success'],resolve),
        },
        {
          path: 'groceries/await/:title/:subtitle', //杂货铺-审核通过
          name: 'await',
          component: resolve => require(['@/components/groceries/await'],resolve),
        },
        {
          path: 'supplier',//供应商
          name: 'supplier',
          component: resolve => require(['@/components/supplier/index'],resolve)
        }
      ]
    }
  ]
})
