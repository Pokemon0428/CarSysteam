<template>
  <swiper ref='swiper'>
    <swiper-item v-for='(item, index) in swiperImages' :key="index">
      <img :src="item" alt="" >
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: 'HomeSwiper',
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {
        
      }
    },
    props: {
      swiperImages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  
</style>