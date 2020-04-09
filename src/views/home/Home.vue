<template>
  <div id="home">
    <home-swiper :swiper-images='swiperImages'></home-swiper>
    <feature-views></feature-views>
    <home-serve :serve-image="serveImage"></home-serve>
    <home-show></home-show>
    <fast-into></fast-into>
  </div>
</template>

<script>
  import HomeSwiper from './childcomps/HomeSwiper'
  import HomeServe from './childcomps/HomeServe'
  import HomeShow from './childcomps/HomeShow'

  import FeatureViews from 'components/content/featureviews/FeatureViews'
  import FastInto from 'components/content/fastinto/FastInto'

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      FeatureViews,
      HomeServe,
      HomeShow,
      FastInto
    },
    data() {
      return {
        swiperImages: [
          "https://fimg.zuchecdn.com/upload/yingxiao/XR200/2560-500-XR200-20200401-WEB.jpg",
          "https://fimg.zuchecdn.com/upload/yingxiao/YDGZ/2560-500-YD-20200401-WEB.jpg",
          "https://fimg.zuchecdn.com/upload/web/HomePage/HeadFigure/2018/2560-500-zizhu-20190426-WEB.jpg",
          "https://fimg.zuchecdn.com/upload/web/HomePage/HeadFigure/2018/2560-500-mian2-20180824-WEB.jpg"
        ],
        serveImage: "https://image.zuchecdn.com/newversion/news/common/index_icon.png",
        
      }
    },
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    background-color: #f6fafb;
    position: relative;
    top: 58px;
  }
</style>