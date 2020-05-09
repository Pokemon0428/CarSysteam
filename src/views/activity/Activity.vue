<template>
  <div id="activity">
    <main-tab-bar></main-tab-bar>
    <activity-list></activity-list>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/maintabbar/MainTabBar'
  import ActivityList from './childcomps/ActivityList'

  export default {
    name: "Activity",
    components: {
      MainTabBar,
      ActivityList
    }
  }
</script>

<style scoped>
  #activity {
    height: 100vh;
    background-color: #f6fafb;
    position: relative;
    top: 58px;
  }
</style>