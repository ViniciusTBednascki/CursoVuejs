import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO!!!!!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6InZpbmljaXVzIiwiZW1haWwiOiJ0ZXN0ZUBlbWFpLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2MzEyOTk5NDIsImV4cHQiOjE2MzEzODYzNDJ9.2d-cue9YXICg4XVk6eDuy1tf9AwBFYknZ4OBZGqtr-w'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')