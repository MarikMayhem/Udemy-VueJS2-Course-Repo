import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import 'bootstrap'
import { routes } from './routes.js'
import { store } from './store/store.js'


Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "https://vue-js-http-21ac3.firebaseio.com/";

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.filter('money', function (value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
