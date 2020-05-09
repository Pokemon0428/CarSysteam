<template>
  <el-select v-model="value" filterable placeholder="城市名" propper-class="cityselect" @change="f($event)">
    <el-option-group
      v-for="group in options"
      :key="group.label"
      :label="group.label"
      :value="group">
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item">
      </el-option>
    </el-option-group>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Shengzhen',
            label: '深圳'
          }, {
            value: 'Chongqing',
            label: '重庆'
          }, {
            value: 'Changsha',
            label: '长沙'
          }, {
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Hangzhou',
            label: '杭州'
          }, {
            value: 'Kunming',
            label: '昆明'
          }, {
            value: 'Nanjing',
            label: '南京'
          }, {
            value: 'Wuhan',
            label: '武汉'
          }, {
            value: 'Xian',
            label: '西安'
          }, {
            value: 'Xiamen',
            label: '厦门'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Qingdao',
            label: '青岛'
          }, {
            value: 'Sanya',
            label: '三亚'
          }, {
            value: 'Tianjing',
            label: '天津'
          }, {
            value: 'Zhengzhou',
            label: '郑州'
          }, {
            value: 'Jinan',
            label: '济南'
          }, {
            value: 'Luoyang',
            label: '洛阳'
          }, {
            value: 'Xining',
            label: '西宁'
          }, {
            value: 'Beihai',
            label: '北海'
          }, {
            value: 'Dali',
            label: '大理'
          }]
        }],
        value: ''
      }
    },
    methods: {
      f(e) {
        this.$emit('citySelect',e.label)
        console.log(e.label)
      }
    },
  }
</script>