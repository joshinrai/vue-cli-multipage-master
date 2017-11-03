import Vue from 'vue'
import Router from 'vue-router'
import Info from '../../components/info'
import Test from '../../components/test'

Vue.use(Router)

require('assets/b.css')

// 准备、定义路由
var routers = [
    {path: '/test', component: Test},
    {path: '/', component: Info}
]

// 创建router实例
var router = new Router({
  routes: routers
})

/* eslint-disable no-new */
new Vue({
  el: '#info',
  components: {Info, Test},
  router: router
}).$mount('#info')
