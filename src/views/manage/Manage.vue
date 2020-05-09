<template>
  <div id="manage">
    <main-tab-bar></main-tab-bar>
    <manage-info></manage-info>
    <feature-views class="feature-views"></feature-views>
    <fast-into></fast-into>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/maintabbar/MainTabBar'
  import FeatureViews from 'components/content/featureviews/FeatureViews'
  import FastInto from 'components/content/fastinto/FastInto'

  import ManageInfo from './childcomps/ManageInfo'

  export default {
    name: "Manage",
    components: {
      MainTabBar,
      ManageInfo,
      FeatureViews,
      FastInto
    }
  }
</script>

<style scoped>
  #manage {
    height: 100vh;
    background-color: #f6fafb;
    position: relative;
    top: 100px;
  }
  .feature-views {
    margin-top: 50px;
  }
</style>