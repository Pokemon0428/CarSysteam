<template>
  <div id="register">
    <reg-tab-bar></reg-tab-bar>
    <reg-content></reg-content>
    <feature-views></feature-views>
    <fast-into></fast-into>
  </div>
</template>

<script>
  import RegTabBar from './childcomps/RegTabBar'
  import RegContent from './childcomps/RegContent'

  import FeatureViews from 'components/content/featureviews/FeatureViews'
  import FastInto from 'components/content/fastinto/FastInto'

  export default {
    name: "Register",
    components: {
      RegTabBar,
      RegContent,
      FastInto,
      FeatureViews
    }
  }
</script>

<style scoped>
  #register {
    height: 100vh;
    background-color: #f6fafb;
    position: relative;
    top: 58px;
  }
</style>