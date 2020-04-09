<template>
  <div class="show wrap">
    <div class="show-title">热门推荐</div>
    <div class="show-content wrap"
        :class="[{moveOne: toOne},
                {moveTwo: toTwo}]">
      <div class="show-car" 
           v-for="(item, index) in showImage" 
           :key="index">
        <div class="textbox">
          <span class="car-name">{{item.name}}</span>
          <span class="car-desc">{{item.desc}}</span>
        </div>
        <div class="picbox">
          <img src="https://image.zuchecdn.com/newversion/news/common/car_mask.png" alt="" class="car">
          <img :src="item.image" alt="" >
        </div>
      </div>
    </div>
    <div class="indicator">
      <ul>
        <li @mouseover='one' :class="{active: indicatorIndex === 1}"></li>
        <li @mouseover='two' :class="{active: indicatorIndex === 2}"></li>
        <li @mouseover='three' :class="{active: indicatorIndex === 3}"></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeShow",
    props: {
      showImage: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        indicatorIndex: 1,
        // nowIndex: 1,
        showCarStyle: {},
        toOne: false,
        toTwo: false,
      }
    },
    methods: {
      one() {
        this.indicatorIndex = 1;
        this.toOne = false;
        this.toTwo = false;
      },
      two() {
        this.indicatorIndex = 2;
        this.toOne = true;
        this.toTwo = false;
      },
      three() {
        this.indicatorIndex = 3;
        this.toOne = false;
        this.toTwo = true;
      }
    },
  }
</script>

<style scoped>
  .show {
    width: 1170px;
    height: 760px;
    overflow: hidden;
  }
  .show-content {
    width: 3510px;
    height: 600px;
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
  }
  .show-title {
    font-size: 20px;
    color: #2f2f39;
  }
  .show-car {
    width: 385px;
    height: 260px;
    display: inline-block;
    padding-top: 12px;
    display: flex;
    position: relative;
    top: 30px;
    margin-right: 5px;
    cursor: pointer;
    background-color: #f2f3f5;;
  }
  .textbox {
    width: 100%;
    height: 50px;
    position: relative;
    top: 10px;
    /* background-color: yellow; */
  }
  .car-name {
    display: block;
    position: absolute;
    left: 15px;
    color: #60606c;
    font-size: 16px;
    line-height: 26px;
  }
  .car-desc {
    display: block;
    position: absolute;
    left: 15px;
    top: 25px;
    line-height: 24px;
    color: #93939e;
    font-size: 14px;
  }
  .picbox {
    width: 385px;
    height: 200px;
    position: absolute;
    bottom: 0;
    text-align: center;
  }
  .picbox img {
    width: 320px;
    height: 180px;
  }
  .car {
    position: absolute;
  }
  .indicator {
    position: relative;
    top: 40px;
  }
  .indicator ul {
    text-align: center;
  }
  .indicator ul li {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background: url("https://image.zuchecdn.com/newversion/news/common/icon.png") no-repeat;
    background-position: -416px -56px;
  }
  .indicator ul li.active {
    background-position: -352px -56px;
  }
  .moveOne {
    transform: translateX(-1170px);
  }
  .moveTwo {
    transform: translateX(-2340px);
  }

</style>