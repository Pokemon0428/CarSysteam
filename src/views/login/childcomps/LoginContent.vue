<template>
  <div class="login-content">
    <div class="login-content-main wrap">
      <div class="login-box">
        <div class="text">登录</div>
        <div class="login-info">
          <ul class="login-info-ul">
            <li class="input-text">
              <label for="normal-id">
                <span class="icon-user"></span>
              </label>
              <input type="text" 
                     class="user-name" 
                     id="normal-id"  
                     v-model='userPhone'
                     placeholder="请输入手机号/证件号">
            </li>
            <li class="input-text">
              <label for="normal-password">
                <span class="icon-password"></span>
              </label>
              <input type="password" 
                     class="user-password" 
                     id="normal-password"  
                     v-model='password'
                     placeholder="请输入密码">
            </li>
          </ul>
          <div><a class="forget">忘记密码?</a></div>
          <ul class="sub">
            <li>
              <input type="submit" value="登录" class="submit" @click="login">
            </li>
            <li>
              <div class="reg">
                还没有注册？
                <a @click="regClick" class="toReg">立即注册</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginContent",
    data() {
      return {
        userPhone: '',
        password: '',
        userData: {},
        managerData: {},
        isSucss: false
      }
    },
    created() {
      this.getUserInfo()
    },
    methods: {
      regClick() {
        this.$router.push('/register')
      },
      login() {
        this.isSucss = false;
        this.userData.data.forEach(item => {
          if ((item.phone == this.userPhone) && (item.pw == this.password)) {
            const product = {};
            product.sqlUserPhone = item.phone;
            product.sqlPassword = item.pw;
            product.sqlUserName = item.username;
            this.$emit('userLogin', product)
            this.isSucss = true;
          }
        })
        this.managerData.data.forEach(item => {
          if ((item.code == this.userPhone) && (item.pw == this.password)) {
            const product = {};
            product.sqlUserName = '管理员';
            this.$emit('managerLogin', product)
            this.isSucss = true;
          }
        })
        if (!this.isSucss) {
          this.$toast.show('登陆失败，用户名或密码错误', 1500)
        }
        this.$router.push('/home')
      },
      getUserInfo() {
        this.$axios.get('/api/userinfo',{}).then(response => {
          // console.log(response)
          this.userData = response
        }),
        this.$axios.get('/api/managerinfo',{}).then(response => {
          // console.log(response)
          this.managerData = response
        })
      }
    },
  }
</script>

<style scoped>
  .login-content {
    height: 600px;
    width: 100%;
    background-color: #f2f3f5;
  }
  .login-content-main {
    height: 100%;
    position: relative;
  }
  .login-box {
    width: 360px;
    height: 400px;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: #fff;
  }
  .text {
    width: 100%;
    height: 50px;
    color: #6b7179;
    text-align: center;
    line-height: 50px;
    background-color: #fff;
  }
  .login-info {
    width: 100%;
    height: 270px;
    padding-top: 10px;
    /* background-color: chartreuse; */
  }
  .login-info-ul li {
    position: relative;
    min-height: 38px;
    font-size: 14px;
    color: #60606c;
    width: 320px;
    left: 0;
    right: 0;
    margin: 10px auto 20px auto;
    border: 1px solid rgb(233, 235, 238);
  }
  .icon-user {
    width: 14px;
    height: 20px;
    float: left;
    top: 10px;
    left: 14px;
    position: absolute;
    background: url("https://image.zuchecdn.com/newStatic/newversion/common/icon_new.png");
    background-position: 0 -50px;
  }
  .icon-password {
    width: 14px;
    height: 20px;
    float: left;
    top: 10px;
    left: 14px;
    position: absolute;
    background: url("https://image.zuchecdn.com/newStatic/newversion/common/icon_new.png");
    background-position: -40px -50px;
  }
  .user-name, .user-password {
    height: 38px;
    width: 280px;
    float: right;
    border: 0px;
    outline: none;
  }
  .forget {
    color: #6ab0ff;
    position: relative;
    float: right;
    right: 20px;
    cursor: pointer;
  }
  .submit {
    display: block;
    width: 100%;
    height: 50px;
    cursor: pointer;
    border: 0px;
    background-color: #fabe00;
  }
  .sub li {
    height: 50px;
    width: 320px;
    position: relative;
    left: 0;
    right: 0;
    margin: 50px auto 20px auto;
  }
  .reg {
    width: 320px;
    height: 50px;
    color: #60606c;
    text-align: center;
  }
  .reg a {
    color: #6ab0ff;
  }
  .input-text:focus-within{
    border: 1px solid #fabe00;
  }
  .toReg {
    cursor: pointer;
  }
</style>