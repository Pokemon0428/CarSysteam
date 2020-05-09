<template>
  <div id="automatic">
    <main-tab-bar></main-tab-bar>
    <auto-search></auto-search>
    <car-select></car-select>
    <!-- <auto-rent-info></auto-rent-info> -->
    <fast-into></fast-into>
    <sure-to-rent @makeSure='makeSure' v-show='isRent'></sure-to-rent>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/maintabbar/MainTabBar'
  import AutoSearch from './childcomps/AutoSearch'
  // import AutoRentInfo from './childcomps/AutoRentInfo'

  import CarSelect from 'components/content/carselect/CarSelect'
  import FastInto from 'components/content/fastinto/FastInto'
  import SureToRent from 'components/common/suretorent/SureToRent'

  export default {
    name: "AutoMatic",
    components: {
      MainTabBar,
      AutoSearch,
      CarSelect,
      // AutoRentInfo,
      FastInto,
      SureToRent,
    },
    data() {
      return {
       isRent: false
      }
    },
    mounted() {
      this.$bus.$on('rentCar', (msg) => {
        this.isRent = msg
      })
    },
    methods: {
      makeSure(msg) {
        this.isRent =  msg
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