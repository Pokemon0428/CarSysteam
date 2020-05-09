<template>
  <div class="car-item">
    <img :src="CarItem.img" alt="">
    <div class="des">
      <p>{{CarItem.brand}}</p>
      <p>{{CarItem.type + '|' +CarItem.power + '|' + CarItem.seat + '座' }}</p>
    </div>
    <div class="price">
      <span>
        <em>￥</em>
        <em>{{CarItem.price}}</em>
        <em>/日均</em>
      </span>
    </div>
    <div class="rent" @click='rent'>租车</div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    name: "CarInfoItem",
    props: {
      CarItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      ...mapActions(['addCarId']),
      rent() {
        if (this.normal || this.manager) {
          this.$bus.$emit('rentCar', 'true')
          this.addCarId(this.CarItem.carid).then(res => {

          })
        } else {
          this.$toast.show("您还未登陆")
        }
      },

    },
    computed: {
      ...mapGetters({
        normal: 'changeNormal',
        manager: 'changeManager'
      })
    },
  }
</script>

<style scoped>
  .car-item {
    width: 100%;
    height: 180px;
    position: relative;
    background-color: #fff;
    border-bottom: 1px solid rgba(125, 125, 125, .2);
  }
  .car-item:hover {
    border-color: #fabe00;
  }
  .car-item div {
    display: inline-block;
    text-align: center; 
  }
  .car-item img {
    display: inline-block;
    width: 230px;
    height: 130px;
    margin-top: 25px;
    margin-left: 25px;
    vertical-align: middle;
  }
  .des {
    position: absolute;
    top: 60px;
    left: 305px;
  }
  .des p:nth-child(1) {
    font-size: 18px;
    color: #60606c;
  }
  .des p:nth-child(2) {
    margin-top: 10px;
    font-size: 12px;
    color: #93939e;
  }
  .price {
    margin-left: 150px;
    position: absolute;
    left: 500px;
    top: 75px;
  }
  .price span em:nth-child(1), .price span em:nth-child(2) {
    display: inline-block;
    font-size: 30px;
    color: #fabe00;
    font-style: normal;
    line-height: 30px;
  }
  .price span em:nth-child(3) {
    display: inline-block;
    font-size: 12px;
    font-style: normal;
    margin-top: 12px;
  }
  .rent {
    width: 100px;
    height: 50px;
    position: absolute;
    left: 1000px;
    top: 65px;
    background-color: #fabe00;
    text-align: center;
    line-height: 50px;
    border-radius: 3px;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
  }
</style>