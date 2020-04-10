<template>
  <div id="login">
    <Login-tab-bar></Login-tab-bar>
    <login-content></login-content>
    <feature-views></feature-views>
    <fast-into></fast-into>
  </div>
</template>

<script>
  import LoginTabBar from './childcomps/LoginTabBar'
  import LoginContent from './childcomps/LoginContent'

  import FeatureViews from 'components/content/featureviews/FeatureViews'
  import FastInto from 'components/content/fastinto/FastInto'

  export default {
    name: "Login",
    components: {
      LoginTabBar,
      LoginContent,
      FastInto,
      FeatureViews
    }
  }
</script>

<style scoped>
  #login {
    height: 100vh;
    background-color: #f6fafb;
    position: relative;
    top: 58px;
  }
</style>