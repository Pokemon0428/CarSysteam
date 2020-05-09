<template>
  <div id="hitch">
    <main-tab-bar></main-tab-bar>
    <P>顺风车</P>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/maintabbar/MainTabBar'

  export default {
    name: "Hitch",
    components: {
      MainTabBar,
    }
  }
</script>

<style scoped>
  #hitch {
    height: 100vh;
    background-color: #f6fafb;
    position: relative;
    top: 58px;
  }
</style>