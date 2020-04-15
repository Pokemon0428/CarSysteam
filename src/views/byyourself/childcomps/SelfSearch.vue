<template>
  <div class="search">
    <div class="search-main wrap">
      <city class="city"></city>
      <input-box class="input-box"></input-box>
      <date-picker class="date-picker"></date-picker>
      <slow class="slow"></slow>
      <div class="choose">
        <a target="">立即选车</a>
      </div>
    </div>
  </div>
</template>

<script>
  import City from 'components/element-ui/City'
  import DatePicker from 'components/element-ui/DatePicker'
  import InputBox from 'components/element-ui/InputBox'
  import Slow from 'components/element-ui/Slow'

  export default {
    name: "SelfSearch",
    components: {
      City,
      DatePicker,
      InputBox,
      Slow
    },
    data() {
      return {
       
      }
    }
  }
</script>

<style scoped>
  .search {
    width: 100%;
    height: 110px;
    background-color: #fff;
  }
  .search-main {
    height: 100%;
    display: flex;
  }
  .input-box {
    margin-right: 30px;
  }
  .slow {
    margin-left: 50px;
    margin-top: 45px;
  }
  .city, .input-box, .date-picker{
    line-height: 110px;
  }
  .choose {
    display: inline-block;
    text-align: center;
    line-height: 50px;
    margin-left: 50px;
    margin-top: 25px;
  }
  .choose a {
    display: inline-block;
    width: 130px;
    height: 50px;
    font-size: 18px;
    border-radius: 3px;
    color: #fff;
    background-color: #fabe00;
  }
</style>