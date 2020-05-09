<template>
  <el-input
    style="width: 300px"
    placeholder="请输入具体地址"
    v-model="input"
    @change='textChange'
    clearable>
  </el-input>
</template>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    },
    methods: {
      textChange() {
        this.$emit('detailPlace', this.input)
      }
    },
  }
</script>

<style scoped>

</style>