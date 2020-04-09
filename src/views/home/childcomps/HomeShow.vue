<template>
  <div class="home-show">
    <home-title></home-title>
    <show :show-image="showImage"></show>
  </div>
</template>

<script>
  import HomeTitle from "./HomeTitle"
  import Show from "components/common/show/Show"

  export default {
    name: "HomeShow",
    components: {
      HomeTitle,
      Show
    },
    data() {
      return {
        showImage: [
          {image: "https://fimg.zuchecdn.com/upload/web/modepic/4.jpg", desc: "别克凯越/三厢/1.6自动/乘坐5人", name: "别克凯越"},
          {image: "https://fimg.zuchecdn.com/upload/web/modepic/87.jpg", desc: "雪佛兰科鲁兹/三厢/1.5自动/乘坐5人", name: "雪佛兰科鲁兹"},
          {image: "https://fimg.zuchecdn.com/upload/web/modepic/480.jpg", desc: "起亚K2/三厢/1.4自动/乘坐5人", name: "起亚K2"},
          {image: "https://fimg.zuchecdn.com/upload/web/modepic/87.jpg", desc: "2014雪铁龙爱丽舍/三厢/1.6自动/乘坐5人", name: "2014雪铁龙爱丽舍"},
          {image: "https://fimg.zuchecdn.com/upload/web/modepic/743.jpg", desc: "丰田致炫/两厢/1.3自动/乘坐5人", name: "丰田致炫"},
          {image: "https://fimg.zuchecdn.com/upload/web/modepic/61.jpg", desc: "丰田凯美瑞/三厢/2.0自动/乘坐5人", name: "丰田凯美瑞"},
          {image: "https://fimg.zuchecdn.com/upload/web/modepic/460.jpg", desc: "大众帕萨特/三厢/1.8T自动/乘坐5人", name: "大众帕萨特"},
          {image: "https://fimg.zuchecdn.com/upload/web/modepic/176.jpg", desc: "别克GL8/7座/2.4自动/乘坐5人", name: "别克GL8"},
          {image: "https://fimg.zuchecdn.com/upload/web/modepic/101.jpg", desc: "大众逸朗/三厢/1.6自动/乘坐5人", name: "大众逸朗"},
          {image: "https://fimg.zuchecdn.com/upload/web/modepic/748.jpg", desc: "大众斯柯达明锐/三厢/1.4自动/乘坐5人", name: "打红柯斯达明锐"},
          {image: "https://fimg.zuchecdn.com/upload/web/modepic/302.jpg", desc: "本田锋范/三厢/1.5自动/乘坐5人", name: "本田锋范"},
          {image: "https://fimg.zuchecdn.com/upload/web/modepic/161.jpg", desc: "本田飞度/两厢/1.3自动/乘坐5人", name: "本田飞度"},
          {image: "https://fimg.zuchecdn.com/upload/web/modepic/128.jpg", desc: "本田雅阁/三厢/2.0自动/乘坐5人", name: "本田雅阁"},
          {image: "https://fimg.zuchecdn.com/upload/web/modepic/127.jpg", desc: "宝马3系/三厢/2.0自动/乘坐5人", name: "宝马3系"},
          {image: "https://fimg.zuchecdn.com/upload/web/modepic/166.jpg", desc: "起亚狮跑/SUV/2.0自动/乘坐5人", name: "起亚狮跑"},
          {image: "https://fimg.zuchecdn.com/upload/web/modepic/870.jpg", desc: "宝沃BX5/三厢/1.4T自动/乘坐5人", name: "宝沃BX5"}
        ]
      }
    },
  }
</script>

<style scoped>
  .home-show {
    width: 100%;
    height: 900px;
  }
</style>