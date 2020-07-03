import 'babel-polyfill'

import Vue from 'vue'

import Vuetify from 'vuetify'

import App from './App.vue'

import router from './router'

import VTooltip from 'v-tooltip'


import 'vuetify/dist/vuetify.min.css'

require ('./book.css')

Vue.use(Vuetify)
Vue.use(VTooltip)

Vue.directive('plaintext', {
  bind(el, binding, vnode) {
    el.innerHTML = el.innerText;
    //el.innerHTML = el.innerHTML.replace(/<[^>]+>/gm, '');
  }
});

const app = new Vue({


  el: '#app',
  components: {App},
  template: '<App></App>',
  router

})
