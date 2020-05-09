<template>
  <div class="search">
    <div class="search-main wrap">
      <city class="city" @citySelect='citySelect'></city>
      <input-box class="input-box" @detailPlace='detailPlace'></input-box>
      <date-picker class="date-picker" @timeSelect='timeSelect'></date-picker>
      <slow class="slow"></slow>
      <div class="choose">
        <a target="" @click='selectCar'>立即选车</a>
      </div>
    </div>
  </div>
</template>

<script>
  import City from 'components/element-ui/City'
  import DatePicker from 'components/element-ui/DatePicker'
  import InputBox from 'components/element-ui/InputBox'
  import Slow from 'components/element-ui/Slow'

  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'

  export default {
    name: "AutoSearch",
    components: {
      City,
      DatePicker,
      InputBox,
      Slow
    },
    data() {
      return {
       city: '',
       place: '',
       startTime: '',
       endTime: ''
      }
    },
    methods: {
      ...mapActions(['addOrderOne']),
      citySelect(city){
        this.city = city
      },
      detailPlace(place) {
        this.place = place
      },
      timeSelect(t1,t2){
        this.startTime = t1;
        this.endTime = t2;
      },
      selectCar() {
        if (this.normal || this.manager) {
          const product = {};
          product.place = this.city + '-' + this.place;
          product.startTime = this.startTime;
          product.endTime = this.endTime
          this.addOrderOne(product).then(res => {

          })
        } else {
          this.$toast.show("您还未登陆")
        }
      }
    },
    computed: {
      ...mapGetters({
        normal: 'changeNormal',
        manager: 'changeManager'
      })
    },
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
    cursor: pointer;
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