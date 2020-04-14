<template>
  <div class="rent-info">
    <div class="rent-info-main wrap">
      <div class="content">
        <div class="rent-info-title">
          <p>选车记录</p>
        </div>
        <div class="rent-info-content">
          <p>您还没有选车记录</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"AutoRentInfo"
  }
</script>

<style scoped>
  .rent-info {
    height: 340px;
    width: 100%;
    margin-top: 5px;
  }
  .rent-info-main {
    height: 100%;
    position: relative;
    background-color: #f2f3f5;
  }
  .content {
    width: 1125px;
    position: absolute;
    right: 0;
    background-color: #fff;
    border: 1px solid rgba(125, 125, 125, .2);
  }
  .rent-info-title {
    line-height: 42px;
    padding-left: 12px;
    height: 41px;
    font-size: 14px;
    color: #60606c;
    overflow: hidden;
    border-bottom: 1px solid #e9ebee;
  }
  .rent-info-content {
    text-align: center;
    position: relative;
    font-size: 14px;
    color: #60606c;
  }
  .rent-info-content p {
   padding: 135px 0;
  
  }
</style>