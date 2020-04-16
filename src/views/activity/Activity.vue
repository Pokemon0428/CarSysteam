<template>
  <div id="activity">
    <active-tab-bar></active-tab-bar>
    <activity-list></activity-list>
  </div>
</template>

<script>
  import ActiveTabBar from './childcomps/ActiveTabBar'
  import ActivityList from './childcomps/ActivityList'

  export default {
    name: "Activity",
    components: {
      ActiveTabBar,
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