import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO!!!!!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6ImZ1bGFubyIsImVtYWlsIjoiZnVsYW5vQGVtYWlsLmNvbSIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjMxMjIwMDI4LCJleHB0IjoxNjMxMzA2NDI4fQ.pLqeuh_V1ewax_XSvtyQKQgmNN9BDdVJmWBk7KwQ5Qk'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')