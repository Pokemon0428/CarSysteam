<template>
  <div id="byyourself">
    <self-tab-bar></self-tab-bar>
    <self-search></self-search>
    <car-select></car-select>
    <self-rent-info></self-rent-info>
    <fast-into></fast-into>
  </div>
</template>

<script>
  import SelfTabBar from './childcomps/SelfTabBar'
  import SelfSearch from './childcomps/SelfSearch'
  import SelfRentInfo from './childcomps/SelfRentInfo'

  import CarSelect from 'components/content/carselect/CarSelect'
  import FastInto from 'components/content/fastinto/FastInto'

  export default {
    name: "ByYourSelf",
    components: {
      SelfTabBar,
      SelfSearch,
      CarSelect,
      SelfRentInfo,
      FastInto
    },
    data() {
      return {
       
      }
    },
  }
</script>

<style scoped>
  #byyourself {
    height: 100vh;
    background-color: #f6fafb;
    position: relative;
    top: 58px;
  }
</style>