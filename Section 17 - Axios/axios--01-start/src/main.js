import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vue-js-udemy-second.firebaseio.com';
axios.defaults.headers.common['Authorization'] = "SecretKey";
axios.defaults.headers.get['Accepts'] = 'application/json';

//Interceptors

axios.interceptors.request.use(config => {
  console.log('Request interceptor', config)
  // config.headers['SOMETHING']
  return config
})
axios.interceptors.response.use(res => {
  console.log('Response interceptor', res)
  res = Object.entries(res.data)

  return res
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
