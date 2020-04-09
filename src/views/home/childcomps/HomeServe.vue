<template>
  <div class="home-serve">
    <div class="home-serve-main wrap">
      <ul>
        <li>
          <h2>短租自驾</h2>
          <div class="dz"></div>
          <p>24小时轻松取车/还车</p>
          <a href="#">我要租车</a>
        </li>
        <li>
          <h2>长租服务</h2>
          <div class="cz"></div>
          <p>长租一次告别常租</p>
          <a href="#">我要租车</a>
        </li>
        <li>
          <h2>企业租车</h2>
          <div class="qy"></div>
          <p>企业出行一步搞定</p>
          <a href="#">我要租车</a>
        </li>
        <li>
          <h2>顺风车站</h2>
          <div class="sf"></div>
          <p>价格便宜就是任性</p>
          <a href="#">我要租车</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeServe"
  }
</script>

<style scoped>
  .home-serve {
    width: 100%;
    height: 400px;
    padding: 80px 0;
    background-color: #f2f3f5;
  }
  .home-serve-main {
    height: 400px;
  }
  .home-serve-main ul {
    display: flex;
    justify-content: space-between;
  }
  .home-serve-main ul li {
    height: 400px;
    width: 330px;
    background-color: #fff;
  }
  .home-serve-main ul li h2 {
    font-size: 20px;
    color: #2f2f39;
    text-align: center;
    font-weight: 400;
    line-height: 75px;
    padding: 6px 0;
  }
  .dz, .cz, .qy, .sf{
    width: 120px;
    height: 120px;
    margin: 0 auto;
  }
  .dz {
    background-image: url("https://image.zuchecdn.com/newversion/news/common/index_icon.png");
    background-position: 0 -89px;
    background-repeat: no-repeat;
  }
  .cz {
    background-image: url("https://image.zuchecdn.com/newversion/news/common/index_icon.png");
    background-position: -127px -89px;
    background-repeat: no-repeat;
  }
  .qy {
    background-image: url("https://image.zuchecdn.com/newversion/news/common/index_icon.png");
    background-position: 0 -210px;
    background-repeat: no-repeat;
  }
  .sf {
    background-image: url("https://image.zuchecdn.com/newversion/news/common/index_icon.png");
    background-position: -127px -210px;
    background-repeat: no-repeat;
  }
  .home-serve-main ul li p {
    color: #939a9f;
    font-size: 14px;
    text-align: center;
    line-height: 42px;
    padding: 9px 0 18px 0;
  }
  .home-serve-main ul li a {
    display: block;
    width: 160px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    margin: 20px auto;
    text-align: center;
    color: #60606c;
    border-radius: 3px;
    border: 1px solid #e4e6e9;
    background-color: #fafbfc;
  }
</style>