<template>
  <div class="car-info">
    <car-info-item v-for="(item, index) in car.xuefulan" :car-item="item" :key="index"></car-info-item>
  </div>
</template>

<script>
  import CarInfoItem from './CarInfoItem'

  export default {
    name: "CarInfo",
    components: {
      CarInfoItem
    },
    props: {
      car: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .car-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>