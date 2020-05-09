<template>
  <div class="block">
    <el-date-picker
      v-model="value1"
      @change="getDate"
      type="datetimerange"
      range-separator="至"
      format="yyyy-MM-dd HH:mm"
      value-format="yyyy-MM-dd HH:mm"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        startTime: '',
        endTime: ''
      }
    },
    methods: {
      getDate(val) {
        this.startTime = val[0]
        this.endTime = val[1]
        this.$emit('timeSelect',this.startTime,this.endTime)
      }
    },
  };
</script>