<template>
  <div class="tab-bar-left">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBarLeft"
  }
</script>

<style scoped>
  .tab-bar-left {
    width: 950px;
    height: 100%;
    display: flex;
  }
</style>