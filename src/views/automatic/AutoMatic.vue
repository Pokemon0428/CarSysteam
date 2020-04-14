<template>
  <div id="automatic">
    <auto-tab-bar></auto-tab-bar>
    <auto-search></auto-search>
    <car-select></car-select>
    <auto-rent-info></auto-rent-info>
    <fast-into></fast-into>
  </div>
</template>

<script>
  import AutoTabBar from './childcomps/AutoTabBar'
  import AutoSearch from './childcomps/AutoSearch'
  import AutoRentInfo from './childcomps/AutoRentInfo'

  import CarSelect from 'components/content/carselect/CarSelect'
  import FastInto from 'components/content/fastinto/FastInto'

  export default {
    name: "AutoMatic",
    components: {
      AutoTabBar,
      AutoSearch,
      CarSelect,
      AutoRentInfo,
      FastInto
    },
    data() {
      return {
       
      }
    },
  }
</script>

<style scoped>
  #automatic {
    height: 100vh;
    background-color: #f6fafb;
    position: relative;
    top: 58px;
  }
</style>