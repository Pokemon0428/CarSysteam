<template>
  <el-switch
    v-model="value1"
    active-text="上门取送"
    inactive-text="到店取还">
  </el-switch>
</template>

<script>
  export default {
    data() {
      return {
        value1: true
      }
    }
  };
</script>