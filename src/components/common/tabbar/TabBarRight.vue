<template>
  <div class="tab-bar-left">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBarRight"
  }
</script>

<style scoped>
  .tab-bar-right {
    flex: 1;
    height: 100%;
    display: flex;
  }
</style>