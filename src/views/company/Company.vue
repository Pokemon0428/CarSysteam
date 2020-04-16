<template>
  <div id="company">
    <company-tab-bar></company-tab-bar>
    <P>企业租车</P>
  </div>
</template>

<script>
  import CompanyTabBar from './childcomps/CompanyTabBar'

  export default {
    name: "Company",
    components: {
      CompanyTabBar,
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