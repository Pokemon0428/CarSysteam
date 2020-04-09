<template>
  <div class="tab-bar-item">
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#fff'
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path)
      },
      activeStyle(){
        return this.isActive ? {} : {color: this.activeColor}
      }
    },
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    color: #fff;
    text-align: center; 
    line-height: 58px;
    font-size: 16px;
  }
  .tab-bar-item:hover {
    color: #fabe00;
    cursor: pointer;
  }
</style>