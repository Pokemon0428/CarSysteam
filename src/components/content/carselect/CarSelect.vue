<template>
  <div class="car-select">
    <div class="car-select-main wrap">
      <div class="screen">
        <p>品牌</p>
        <ul>
          <li><a>不限</a></li>
          <li><a>奥迪</a></li>
          <li><a>宝马</a></li>
          <li><a>奔驰</a></li>
          <li><a>本田</a></li>
          <li><a>比亚迪</a></li>
          <li><a>别克</a></li>
          <li><a>大众</a></li>
          <li><a>丰田</a></li>
          <li><a>福特</a></li>
          <li><a>凯迪拉克</a></li>
          <li><a>路虎</a></li>
          <li><a>起亚</a></li>
          <li><a>奇瑞</a></li>
          <li><a>日产</a></li>
          <li><a>三菱</a></li>
          <li><a>斯柯达</a></li>
          <li><a>沃尔沃</a></li>
          <li><a>现代</a></li>
          <li><a>雪佛兰</a></li>
        </ul>
      </div>
      <div class="car">
        <car-info :car="car"></car-info>
      </div>
    </div>
  </div>
</template>

<script>
  import CarInfo from 'components/common/carinfo/CarInfo'

  export default {
    name: "CarSelect",
    components: {
      CarInfo
    },
    data() {
      return {
        car: {
          xuefulan: [{
            image: "https://fimg.zuchecdn.com/upload/web/modepic/848.jpg",
            name: "雪佛兰新科鲁兹",
            des: "三厢|1.5自动|乘坐5人",
            price: "124"
          },{
            image: "https://fimg.zuchecdn.com/upload/web/modepic/848.jpg",
            name: "雪佛兰新科鲁兹",
            des: "三厢|1.5自动|乘坐5人",
            price: "124"
          },{
            image: "https://fimg.zuchecdn.com/upload/web/modepic/848.jpg",
            name: "雪佛兰新科鲁兹",
            des: "三厢|1.5自动|乘坐5人",
            price: "124"
          },{
            image: "https://fimg.zuchecdn.com/upload/web/modepic/848.jpg",
            name: "雪佛兰新科鲁兹",
            des: "三厢|1.5自动|乘坐5人",
            price: "124"
          },{
            image: "https://fimg.zuchecdn.com/upload/web/modepic/848.jpg",
            name: "雪佛兰新科鲁兹",
            des: "三厢|1.5自动|乘坐5人",
            price: "124"
          },{
            image: "https://fimg.zuchecdn.com/upload/web/modepic/848.jpg",
            name: "雪佛兰新科鲁兹",
            des: "三厢|1.5自动|乘坐5人",
            price: "124"
          },{
            image: "https://fimg.zuchecdn.com/upload/web/modepic/848.jpg",
            name: "雪佛兰新科鲁兹",
            des: "三厢|1.5自动|乘坐5人",
            price: "124"
          },{
            image: "https://fimg.zuchecdn.com/upload/web/modepic/848.jpg",
            name: "雪佛兰新科鲁兹",
            des: "三厢|1.5自动|乘坐5人",
            price: "124"
          },{
            image: "https://fimg.zuchecdn.com/upload/web/modepic/848.jpg",
            name: "雪佛兰新科鲁兹",
            des: "三厢|1.5自动|乘坐5人",
            price: "124"
          },{
            image: "https://fimg.zuchecdn.com/upload/web/modepic/848.jpg",
            name: "雪佛兰新科鲁兹",
            des: "三厢|1.5自动|乘坐5人",
            price: "124"
          },{
            image: "https://fimg.zuchecdn.com/upload/web/modepic/848.jpg",
            name: "雪佛兰新科鲁兹",
            des: "三厢|1.5自动|乘坐5人",
            price: "124"
          },{
            image: "https://fimg.zuchecdn.com/upload/web/modepic/848.jpg",
            name: "雪佛兰新科鲁兹",
            des: "三厢|1.5自动|乘坐5人",
            price: "124"
          },{
            image: "https://fimg.zuchecdn.com/upload/web/modepic/848.jpg",
            name: "雪佛兰新科鲁兹",
            des: "三厢|1.5自动|乘坐5人",
            price: "124"
          },{
            image: "https://fimg.zuchecdn.com/upload/web/modepic/848.jpg",
            name: "雪佛兰新科鲁兹",
            des: "三厢|1.5自动|乘坐5人",
            price: "124"
          },]
        }
      }
    },
  }
</script>

<style scoped>
  .car-select {
    width: 100%;
    height: 1500px;
    margin-top: 20px;
  }
  .car-select-main {
    height: 100%;
    
    position: relative;
  }
  .screen {
    height: 204px;
    width: 268px;
    display: inline-block;
    position: sticky;
    top: 58px;
    background-color: #fff;
    margin-right: 5px;
    box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid #e7e8e9;
    vertical-align: top;
  }
  .screen p {
    line-height: 41px;
    padding-left: 20px;
    margin-bottom: 10px;
  }
  .screen ul {
    display: flex;
    flex-wrap: wrap;
  }
  .screen ul li a {
    flex: 1;
    display: inline-block;
    width: 67px;
    font-size: 12px;
    line-height: 30px;
    color: #93939e;
    text-align: center;
    cursor: pointer;
  }
  .screen ul li:nth-child(1) a {
    color: #fabe00;
  }
  .car {
    height: 100%;
    width: 1125px;
    position: absolute;
    right: 0;
    display: inline-block;
    overflow: scroll;
    background-color: darkcyan;
  }
  .car::-webkit-scrollbar {
    display: none;
  }
</style>