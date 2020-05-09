<template>
  <div class="add-car">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="品牌">
        <el-input v-model="formLabelAlign.brand"></el-input>
      </el-form-item>
      <el-form-item label="座位">
        <el-input v-model="formLabelAlign.seat"></el-input>
      </el-form-item>
      <el-form-item label="规格">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
      <el-form-item label="排量">
        <el-input v-model="formLabelAlign.power"></el-input>
      </el-form-item>
      <el-form-item label="图片">
        <el-input v-model="formLabelAlign.img"></el-input>
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="formLabelAlign.price" @change='priceChange'></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    name: 'AddCar',
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          brand: '',
          seat: '',
          type: '',
          power: '',
          img: '',
          price: ''
        }
      }
    },
    methods: {
      sendMsg() {
        const product = {};
        product.brand =this.formLabelAlign.brand;
        product.seat = this.formLabelAlign.seat;
        product.type = this.formLabelAlign.type;
        product.power = this.formLabelAlign.power;
        product.img = this.formLabelAlign.img;
        product.price = this.formLabelAlign.price;

        this.$emit('newCar', product)
      },
      priceChange() {
        this.sendMsg()
      }
    },
  }
</script>

<style scoped>
  .add-car {
    margin-top: 50px;
    margin-left: 21%;
    margin: auto;
    width: 400px;
  }
</style>