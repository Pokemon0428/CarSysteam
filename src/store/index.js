import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  // 用户注册信息会暂存于此
  user: [],
  // 判断是否是管理员登录
  isManagerLogin: false,
  // 判断是否是用户登录
  isLogin: false,
  // 当前登录用户信息
  userNow: [],
  // 订单信息
  order: {
    carId: '',
    place: '',
    startTime: '',
    endTime: '',
    phone: '',
    code: ''
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})

export default store