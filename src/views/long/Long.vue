<template>
  <div id="long">
    <main-tab-bar></main-tab-bar>
    <P>长租</P>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/maintabbar/MainTabBar'

  export default {
    name: "Long",
    components: {
      MainTabBar,
    }
  }
</script>

<style scoped>
  #long {
    height: 100vh;
    background-color: #f6fafb;
    position: relative;
    top: 58px;
  }
</style>