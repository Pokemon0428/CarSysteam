<template>
  <div class="backtop">
    <div class="totop" @click="backClick">TOP</div>
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    methods: {
      backClick() {
        scrollTo(0,0)
      }
    },
  }
</script>

<style scoped>
  .backtop {
    position: fixed;
    right: 20px;
    bottom: 50px;
  }
  .totop {
    width: 25px;
    height: 25px;
    cursor: pointer;
    border-radius: 50%;
    color: #fff;
    background-color: #1b2b3b;
    font-size: 10px;
    text-align: center;
    line-height: 25px;
  }
</style>