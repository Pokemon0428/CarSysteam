<template>
  <div class="manage-info">
    <div class="manage-info-main wrap">
      <div class="select-info">
        <div v-for="(item, index) in infoList" 
             :key="index" 
             @click='infoSelect(index)' 
             class="select-info-item"
             :class="{active: currentIndex == index}">{{item}}</div>
      </div>
      <div class="info">
        <div class="user-info" v-show='currentIndex == 0'>
          <div v-for='(item, index) in userInfo.data' :key="index" class="user-info-item">
            <p>{{item.username}}</p>
            <p>{{item.phone}}</p>
          </div>
        </div>
        <div class="car-info" v-show='currentIndex == 1'>
          <div v-for='(item, index) in carInfo.data' :key="index" class="car-info-item">
            <p>{{item.carid}}</p>
            <p>{{item.brand}}</p>
            <p>{{item.power}}</p>
            <p>{{item.seat}}</p>
            <p>{{item.type}}</p>
          </div>
        </div>
        <div class="order-info" v-show='currentIndex == 2'>
          <div v-for='(item, index) in orderInfo.data' :key="index" class="order-info-item">
            <p>{{item.carid}}</p>
            <p>{{item.phone}}</p>
            <p>{{item.usercode}}</p>
            <p>{{item.place}}</p>
            <p>{{item.starttime}}</p>
            <p>{{item.endtime}}</p>
          </div>
        </div>
        <div class="add-new-car" v-show='currentIndex == 3'>
          <add-car @newCar='newCar'></add-car>
          <el-button type="primary" style="margin-left: 500px;" @click.native='addCar'>添加</el-button>
        </div>
      </div>
      <div class="save">
        保存修改
      </div>
    </div>
  </div>
</template>

<script>
  import AddCar from 'components/element-ui/AddCar'
  
  export default {
    name: 'ManageInfo',
    components: {
      AddCar
    },
    data() {
      return {
        infoList: ["用户信息管理", "车辆信息管理", "订单信息管理", "添加车辆"],
        aNewCar: [],
        userInfo: {},
        carInfo: {},
        orderInfo: {},
        currentIndex: 0
      }
    },
    created() {
      this.$axios.get('/api/userinfo',{}).then((response) => {
        console.log(response);
        this.userInfo = response
      })
      this.$axios.get('/api/carinfo',{}).then((response) => {
        console.log(response);
        this.carInfo = response
      })
      this.$axios.get('/api/orderinfo',{}).then((response) => {
        console.log(response);
        this.orderInfo = response
      })
    },
    methods: {
      addCar() {
        this.$axios.post('/api/addcar',[this.aNewCar]).then((response) => {
          console.log(response);
        })
        console.log(this.aNewCar)
      },
      newCar(product) {
        this.aNewCar[0] = product.brand
        this.aNewCar[1] = product.seat
        this.aNewCar[2] = product.type
        this.aNewCar[3] = product.power
        this.aNewCar[4] = product.img
        this.aNewCar[5] = product.price
      },
      infoSelect(index) {
        this.currentIndex = index;
      }
    },
  }
</script>

<style scoped>
  .manage-info {
    width: 100%;
    height: 1000px;
    background-color: #f6fafb;
  }
  .manage-info-main {
    height: 100%;
    display: flex;
    background-color: #f6fafb;
  }
  .select-info {
    width: 150px;
    height: 100%;
    display: inline-block;
    background-color: cadetblue;
  }
  .select-info-item {
    width: 100%;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    border: 1px solid #e9ebee;
  }
  .info {
    display: inline-block;
    width: 1000px;
    height: 100%;
    margin-left: 20px;
    border: 1px solid #e9ebee;
    background-color: #fff;
  }
  .save {
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    margin-left: 60px;
    margin-top: 20px;
    border-radius: 10%;
    background-color: #fabe00;
  }
  .user-info-item, .car-info-item, .order-info-item {
    width: 100%;
    display: flex;
    margin-top: 10px;
  }
  .car-info-item p {
    width: 20%;
    text-align: center;
  }
  .user-info-item p {
    width: 50%;
    text-align: center;
  }
  .order-info-item p {
    width: 16%;
    text-align: center;
  }
  .active {
    background-color: #fff;
  }
</style>