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
  addUser(context, payload) {
    return new Promise((resolve, reject) => {
      context.commit(ADD_USER_INFO,payload)
      resolve('注册成功')
    })
  },
  changeManagerLogin(context, payload) {
    return new Promise((resolve, reject) => {
      context.commit(CHANGE_MANAGER_LOGIN,payload)
      resolve('管理员登录成功')
    })
  },
  changeNormalLogin(context, payload) {
    return new Promise((resolve, reject) => {
      context.commit(CHANGE_NORMAL_LOGIN,payload)
      resolve('用户登录成功')
    })
  },
  quit(context,payload) {
    return new Promise((resolve, reject) => {
      context.commit(QUIT,payload)
      resolve('退出登录')
    })
  },
  addOrderOne(context,payload) {
    return new Promise((resolve, reject) => {
      context.commit(ADD_ORDER_ONE,payload)
      resolve('预订成功')
    })
  },
  addOrderTwo(context,payload) {
    return new Promise((resolve, reject) => {
      context.commit(ADD_ORDER_TWO,payload)
      resolve('预订成功')
    })
  },
  addCarId(context,payload) {
    return new Promise((resolve, reject) => {
      context.commit(ADD_CAR_ID,payload)
      resolve()
    })
  }
}