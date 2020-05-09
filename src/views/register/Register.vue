<template>
  <div id="register">
    <reg-tab-bar></reg-tab-bar>
    <reg-content @addUserInfo="addUserInfo"></reg-content>
    <feature-views></feature-views>
    <fast-into></fast-into>
  </div>
</template>

<script>
  import RegTabBar from './childcomps/RegTabBar'
  import RegContent from './childcomps/RegContent'

  import FeatureViews from 'components/content/featureviews/FeatureViews'
  import FastInto from 'components/content/fastinto/FastInto'

  import { mapActions } from 'vuex'

  export default {
    name: "Register",
    components: {
      RegTabBar,
      RegContent,
      FastInto,
      FeatureViews
    },
    methods: {
      ...mapActions(['addUser']),
      addUserInfo(product) {
        this.addUser(product).then(res => {
          this.$toast.show(res, 1500)
        })
      }
    },
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