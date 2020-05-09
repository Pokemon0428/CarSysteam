import {
  ADD_USER_INFO,
  CHANGE_MANAGER_LOGIN,
  CHANGE_NORMAL_LOGIN,
  QUIT,
  ADD_ORDER_ONE,
  ADD_ORDER_TWO,
  ADD_CAR_ID
} from './mutations-types'

export default {
  // mutations的唯一目的是修改state中的状态
  // mutations中的每个方法尽可能完成的事件比较单一
  [ADD_USER_INFO](state,payload) {
    state.user.length = 0;
    state.user.push(payload)
    // console.log(typeof state.user)
    // console.log(state.user)
  },
  [CHANGE_MANAGER_LOGIN](state,payload) {
    state.userNow.length = 0;
    state.userNow.push(payload)
    state.isManagerLogin = true;
    // console.log(state.userNow[0].sqlUserName)
  },
  [CHANGE_NORMAL_LOGIN](state,payload) {
    state.userNow.length = 0;
    state.userNow.push(payload)
    state.isLogin = true;
    // console.log(state.userNow[0].sqlUserName)
  },
  [QUIT](state,payload) {
    state.isLogin = false;
    state.isManagerLogin = false;
    state.userNow.length = 0;
  },
  [ADD_ORDER_ONE](state,payload) {
    state.order.place = payload.place
    state.order.startTime = payload.startTime
    state.order.endTime = payload.endTime
  },
  [ADD_ORDER_TWO](state,payload) {
    state.order.phone = payload.phone
    state.order.code = payload.code
    console.log(state.order)
  },
  [ADD_CAR_ID](state,payload) {
    state.order.carId = payload
    console.log(state.order)
  }
}