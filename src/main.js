// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets


import Vant from 'vant';
import 'vant/lib/index.css';

import './styles/index.scss'  // global css

import App from './App'
import router from './router'

Vue.use(Vant);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
