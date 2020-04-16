<template>
  <div id="hitch">
    <hitch-tab-bar></hitch-tab-bar>
    <P>顺风车</P>
  </div>
</template>

<script>
  import HitchTabBar from './childcomps/HitchTabBar'

  export default {
    name: "Hitch",
    components: {
      HitchTabBar,
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