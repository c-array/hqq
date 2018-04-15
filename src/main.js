// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

Vue.config.productionTip = false

import "element-ui/lib/theme-chalk/index.css";
import {Form,FormItem,Input,Button,Select,Option,DatePicker} from "element-ui";
Vue.use(Form,FormItem,Input,Button,Select,Option,DatePicker);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
