<template>
  <div id="company">
    <main-tab-bar></main-tab-bar>
    <P>企业租车</P>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/maintabbar/MainTabBar'

  export default {
    name: "Company",
    components: {
      MainTabBar,
    }
  }
</script>

<style scoped>
  #company {
    height: 100vh;
    background-color: #f6fafb;
    position: relative;
    top: 58px;
  }
</style>