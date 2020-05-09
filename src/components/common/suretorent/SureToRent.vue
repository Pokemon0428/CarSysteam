<template>
  <div class="sure-to-rent">
    <div class="phone">
      <span>电话：</span>
      <input type="text" v-model='phone'>
    </div>
    <div class="code">
      <span>证件：</span>
      <input type="text" v-model='code'>
    </div>
    <button class="sure" @click='makeSure'>确认</button>
    <button class="close" @click='closeWindow'>关闭</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'

  export default {
    name: "SureToRent",
    data() {
      return {
        phone: '',
        code: '',
      }
    },
    methods: {
      ...mapActions(['addOrderTwo']),
      makeSure() {
        if (this.phone == '' || this.code == '' || this.order.place == '' || this.order.startTime == '' || this.order.endTime == '') {
            this.$toast.show("请将信息填写完整")
        } else {
          const product = {};
          product.phone = this.phone;
          product.code = this.code
          this.addOrderTwo(product).then(res => {
            this.$toast.show(res, 1500)
          })
          this.$emit('makeSure', false)
          // console.log(this.order.carId)
          this.sentToSQL()
        }
      },
      closeWindow() {
        this.$emit('makeSure', false)
      },
      sentToSQL() {
        const orderInfo = [];
        orderInfo[0] = this.order.carId;
        orderInfo[1] = this.order.phone;
        orderInfo[2] = this.order.code;
        orderInfo[3] = this.order.place;
        orderInfo[4] = this.order.startTime;
        orderInfo[5] = this.order.endTime;

        this.$axios.post('/api/addorder',[orderInfo]).then((response) => {
          console.log(response);
        })
      }
    },
    computed: {
      ...mapGetters({
        normal: 'changeNormal',
        manager: 'changeManager',
        order: 'order'
      })
    },
  }
</script>

<style scoped>
  .sure-to-rent {
    position: fixed;
    left: 43%;
    top: 300px;
    width: 250px;
    height: 200px;
    border: 1px solid #000;
    background-color: #fff;
  }
  .phone ,.code {
    line-height: 70px;
  }
  span {
    margin-left: 10px;
    font-size: 14px;
  }
  input {
    height: 28px;
    width: 170px;
    border: 1px solid rgba(0, 0, 0, .3);
    outline: none;
  }
  .sure {
    width: 60px;
    height: 30px;
    margin-left: 60px;
    margin-top: 10px;
    cursor: pointer;
    border: 1px solid #000;
    background-color: #fabe00;
  }
  .close {
    width: 60px;
    height: 30px;
    margin-left: 10px;
    margin-top: 10px;
    cursor: pointer;
    border: 1px solid #000;
    background-color: #fabe00;
  }
</style>