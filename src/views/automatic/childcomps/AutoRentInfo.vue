<template>
  <div class="rent-info">
    <div class="rent-info-main wrap">
      <div class="content">
        <div class="rent-info-title">
          <p>选车记录</p>
        </div>
        <div class="rent-info-content">
          <div v-for='item in newOrder' v-show='newOrder.length != 0'>
            <p>{{item.carId}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name:"AutoRentInfo",
    data() {
      return {
        orderData: {},
        newOrder: []
      }
    },
    activated() {
      this.showOrder()
    },
    computed: {
      ...mapGetters({
        userNow: 'userNow'
      }),
    },
    mounted() {
      this.$axios.get('/api/orderinfo',{}).then(response => {
        console.log(response)
        console.log('00000000')
        this.orderData = response
      })
    },
    methods: {
      showOrder() {
        for (let i=0; i<this.orderData.data.length; i++) {
          if (this.orderData.data[i].phone == this.userNow.sqlUserPhone) {
            this.newOrder.push(this.orderData.data[i])
          }
        }
      }
    },
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
    height: 250px;
    text-align: center;
    position: relative;
    font-size: 14px;
    color: #60606c;
    display: flex;
    justify-content: space-around;
  }
  .rent-info-content p {
    text-align: center;
  }
</style>