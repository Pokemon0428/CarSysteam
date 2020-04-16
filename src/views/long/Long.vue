<template>
  <div id="long">
    <long-tab-bar></long-tab-bar>
    <P>长租</P>
  </div>
</template>

<script>
  import LongTabBar from './childcomps/LongTabBar'

  export default {
    name: "Long",
    components: {
      LongTabBar,
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