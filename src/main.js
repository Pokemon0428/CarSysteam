import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import ElementUI from 'element-ui'
import store from './store'
import VueResource from 'vue-resource'

import 'element-ui/lib/theme-chalk/index.css';

import toast from 'components/common/toast'

Vue.use(toast)
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.prototype.$axios = Axios;

// bus是事件总线
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
