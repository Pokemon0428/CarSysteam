<template>
  <div id="main-tab-bar">
    <div class="tab-bar wrap">
      <tab-bar-left class="tab-bar-left">

        <tab-bar-item path="/home" activeColor="#fabe00">
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/automatic" activeColor="#fabe00">
          <div slot="item-text">上门取送</div>
        </tab-bar-item>
        <tab-bar-item path="/byyourself" activeColor="#fabe00">
          <div slot="item-text">到店取还</div>
        </tab-bar-item>
        <tab-bar-item path="/long" activeColor="#fabe00">
          <div slot="item-text">长租</div>
        </tab-bar-item>
        <tab-bar-item path="/company" activeColor="#fabe00">
          <div slot="item-text">企业租车</div>
        </tab-bar-item>
        <tab-bar-item path="/hitch" activeColor="#fabe00">
          <div slot="item-text">顺风车</div>
        </tab-bar-item>
        <tab-bar-item path="/activity" activeColor="#fabe00">
          <div slot="item-text">活动</div>
        </tab-bar-item>
        <tab-bar-item path="/manage" activeColor="#fabe00" v-show='manager'>
          <div slot="item-text">管理</div>
        </tab-bar-item>

      </tab-bar-left>
      <tab-bar-right class="tab-bar-right">

        <tab-bar-item path="/login" activeColor="#fabe00" :class="{showuser: manager || normal}">
          <div slot="item-text">登录</div>
        </tab-bar-item>

        <tab-bar-item path="" activeColor="#fabe00" :class="{showuser: !(manager || normal)}">
          <div slot="item-text">欢迎登录，{{manager || normal ? userNow[0].sqlUserName : ''}}</div>
        </tab-bar-item>
        <tab-bar-item path="" activeColor="#fff" :class="{showuser: !(manager || normal)}" @click.native='quitLogin'>
          <div slot="item-text" >退出</div>
        </tab-bar-item>

        <tab-bar-item path="/register" activeColor="#fabe00">
          <div slot="item-text">注册</div>
        </tab-bar-item>

      </tab-bar-right>
    </div>
  </div>
</template>

<script>
  import TabBarLeft from 'components/common/tabbar/TabBarLeft.vue'
  import TabBarRight from 'components/common/tabbar/TabBarRight.vue'
  import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    name: "MainTabBar",
    components: {
      TabBarLeft,
      TabBarRight,
      TabBarItem
    },
    data() {
      return {
        
      }
    },
    computed: {
      ...mapGetters({
        user:"user",
        manager: 'changeManager',
        normal: 'changeNormal',
        userNow: 'userNow'
      })
    },
    methods: {
      ...mapActions(['quit']),
      quitLogin() {
        this.quit().then(res => {
          this.$toast.show(res, 1500)
        })
      }
    },
  }
</script>

<style scoped>
  #main-tab-bar {
    height: 58px;
    width: 100%;
    background-color: #1b2b3b;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1999;
  }
  .tab-bar {
    height: 100%;
    background-color: #1b2b3b;
    position: relative;
    display: flex;
  }
  .showuser {
    display: none;
  }
</style>