import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO!!!!!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6InZpbmljaXVzIiwiZW1haWwiOiJ2aW5pY2l1c0BlbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjMxNjQ3NjE0LCJleHB0IjoxNjMxNzM0MDE0fQ.VekTqKaOplKzyLQSUFOH6R-ruel99ZQdWPfkGUyTu4Y'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')