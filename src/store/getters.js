export default {
  user(state) {
    return state.user;
  },
  changeManager(state) {
    return state.isManagerLogin
  },
  changeNormal(state) {
    return state.isLogin
  },
  userNow(state) {
    return state.userNow;
  },
  order(state) {
    return state.order
  }
}