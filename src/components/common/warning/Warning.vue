<template>
  <div class="warning">
    <span></span>
    {{warning}}
    <div class="arrow"></div>
  </div>
</template>

<script>
  export default {
    name:"Warning",
    props: {
      warning: String
    }
  }
</script>

<style scoped>
  .warning {
    width: 288px;
    height: 38px;
    line-height: 38px;
    border: 1px solid #dadadf;
    border-radius: 5px;
    padding-left: 10px;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0,0,0,.25);

    position: absolute;
    left: 340px;
    top: 0;
  }
  .warning span {
    display: inline-block;
    width: 17px;
    height: 17px;
    background: url("https://image.zuchecdn.com/newStatic/newversion/common/icon_new.png") no-repeat;
    background-position: -440px 0;
    vertical-align: middle;
  }
  .arrow {
    width: 10px;
    height: 10px;
    border-top: 1px solid #dadadf;
    border-left: 1px solid #dadadf;
    transform: rotate(-45deg);
    background-color: #fff;
    position: absolute;
    top: 13px;
    left: -6px;
  }
</style>
