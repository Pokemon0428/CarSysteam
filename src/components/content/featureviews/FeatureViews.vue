<template>
  <div class="feature-views">
    <div class="feature-views-main wrap">
      <ul class="feature-views-item">
        <li>
          <i class="icon1"></i>
          <p>100+车型</p>
        </li>
        <li>
          <i class="icon2"></i>
          <p>千家网点</p>
        </li>
        <li>
          <i class="icon3"></i>
          <p>100%保障</p>
        </li>
        <li>
          <i class="icon4"></i>
          <p>无限里程</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FeatureViews"
  }
</script>

<style scoped>
  .feature-views {
    width: 100%;
    height: 100px;
    background-color: #fff;
    border-top: 1px solid #e9ebee;
    border-bottom: 1px solid #e9ebee;
  }
  .feature-views-main {
    height: 100px;
  }
  .feature-views-item {
    display: flex;
    border-left: 1px solid #e9ebee;
  }
  .feature-views-item li {
    flex: 1;
    height: 77px;
    padding-top: 23px;
    text-align: center;
    border-right: 1px solid #e9ebee;
  }
  .feature-views-item li p {
    text-align: center;
    font-size: 16px;
    color: #71767a;
  }
  .feature-views-item li i {
    display: inline-block;
  }
  .icon1 {
    width: 42px;
    height: 34px;
    background-image: url("https://image.zuchecdn.com/newStatic/newversion/common/icon_new.png");
    background-position: -200px 0;
  }
  .icon2 {
    width: 29px;
    height: 34px;
    background-image: url("https://image.zuchecdn.com/newStatic/newversion/common/icon_new.png");
    background-position: -260px 0;
  }
  .icon3 {
    width: 28px;
    height: 34px;
    background-image: url("https://image.zuchecdn.com/newStatic/newversion/common/icon_new.png");
    background-position: -320px 0;
  }
  .icon4 {
    width: 33px;
    height: 34px;
    background-image: url("https://image.zuchecdn.com/newStatic/newversion/common/icon_new.png");
    background-position: -380px 0;
  }
</style>