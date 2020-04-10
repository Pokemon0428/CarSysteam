import Vue from 'vue'
import App from './App.vue'
import router from './router'

import toast from 'components/common/toast'

Vue.use(toast)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
