<template>
  <div id="login">
    <Login-tab-bar></Login-tab-bar>
    <login-content @userLogin='userLogin' @managerLogin='managerLogin'></login-content>
    <feature-views></feature-views>
    <fast-into></fast-into>
  </div>
</template>

<script>
  import LoginTabBar from './childcomps/LoginTabBar'
  import LoginContent from './childcomps/LoginContent'

  import FeatureViews from 'components/content/featureviews/FeatureViews'
  import FastInto from 'components/content/fastinto/FastInto'

  import { mapActions } from 'vuex'

  export default {
    name: "Login",
    components: {
      LoginTabBar,
      LoginContent,
      FastInto,
      FeatureViews
    },
    methods: {
      ...mapActions(['changeManagerLogin','changeNormalLogin']),
      userLogin(product) {
        this.changeNormalLogin(product).then(res => {
          this.$toast.show(res, 1500)
        })
      },
      managerLogin(product) {
        this.changeManagerLogin(product).then(res => {
          this.$toast.show(res, 1500)
        })
      }
    },
  }
</script>

<style scoped>3
  #login {
    height: 100vh;
    background-color: #f6fafb;
    position: relative;
    top: 58px;
  }
</style>