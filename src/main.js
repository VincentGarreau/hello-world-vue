import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

console.log('main.js')

new Vue({
  render: h => h(App),
}).$mount('#app')
