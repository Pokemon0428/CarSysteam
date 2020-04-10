<template>
  <div class="reg-content">
    <div class="reg-content-main wrap">
      <div class="reg-box">
        <p class="new-user">注册新用户</p>
        <form action=""> 
          <ul class="new-reg">
            <li>
              <span class="must">*</span>
              <label for="user-name">
                <span class="icon-name"></span>
              </label>
              <input type="text" 
                     class="user-name" 
                     id="user-name" 
                     placeholder="请输入您的真实姓名" 
                     autocomplete="off">
            </li>
            <li>
              <span class="must">*</span>
              <label for="user-phone">
                <span class="icon-phone"></span>
              </label>
              <input type="text" 
                     class="user-phone" 
                     id="user-phone" 
                     placeholder="请输入您的手机号" 
                     @input="phoneChange"
                     autocomplete="off"
                     maxlength='11'>
              <warning warning="手机号格式不正确" class="warning" v-show='isShowPhone'></warning>
            </li>
            <li id="code">
              <span class="must">*</span>
              <label for="user-check">
                <span class="icon-msg"></span>
              </label>
              <input type="text" 
                     class="user-check" 
                     id="user-check" 
                     placeholder="请输入手机动态码"
                     @input="codeChange"
                     autocomplete="off"
                     maxlenght='6'>
              <warning warning="验证码为六位数字" class="warning" v-show='isShowCode'></warning>
            </li>
            <li id="send-msg">
              <input type="button" value="获取手机动态码" class="check-button">
            </li>
            <li>
              <span class="must">*</span>
              <label for="user-password">
                <span class="icon-password"></span>
              </label>
              <input type="password" 
                     class="user-password" 
                     id="user-password" 
                     placeholder="建议6-18位数字、字母、._%的组合"
                     @input="passwordChange"
                     autocomplete="off">
              <warning warning="建议6-18位数字、字母、._%的组合" class="warning" v-show='isShowPsw'></warning>
            </li>
            <li>
              <span class="must">*</span>
              <label for="user-check-password">
                <span class="icon-password"></span>
              </label>
              <input type="password" 
                     class="user-check-password" 
                     id="user-check-password" 
                     placeholder="请重新确认密码"
                     @input="passwordCheck"
                     autocomplete="off">
              <warning warning="两次密码不一致" class="warning" v-show='isShowPswCheck'></warning>
            </li>
          </ul>
        </form>
        <p class="agree">
          <input type="checkbox" name="" id="" class="agreebox" checked>
          <span>我已阅读并同意<a href="">《xxxx用户服务条款》</a></span>
        </p>
        <a class="reg-button" @click="regClick">注册</a>
      </div>
    </div>
  </div>
</template>

<script>
  import Warning from "components/common/warning/Warning"

  export default {
    name: "RegContent",
    components: {
      Warning
    },
    data() {
      return {
        phoneNum: 0,
        codeMsg: 0,
        psword: 0,
        psCheck: 0,
        isShowPhone: false,
        isShowCode: false,
        isShowPsw: false,
        isShowPswCheck: false
      }
    },
    methods: {
      phoneChange() {
        this.phoneNum = document.querySelector('.user-phone').value;
        if (!(/^1[3456789]\d{9}$/).test(this.phoneNum)) {
          this.isShowPhone = true
        } else {
          this.isShowPhone = false
        }
      },
      codeChange() {
        this.codeMsg = document.querySelector('.user-check').value;
        if (!(/^\d{6}$/).test(this.codeMsg)) {
          this.isShowCode = true
        } else {
          this.isShowCode = false
        }
      },
      passwordChange() {
        this.psword = document.querySelector('.user-password').value;
        if (!(/^[a-z0-9A-Z._%]{6,18}$/).test(this.psword)) {
          this.isShowPsw = true
        } else {
          this.isShowPsw = false
        }
      },
      passwordCheck() {
        this.psCheck = document.querySelector('.user-check-password').value;
        if (this.psCheck != this.psword) {
          this.isShowPswCheck = true;
        } else {
          this.isShowPswCheck = false;
        }
      },
      regClick() {
        let agree = document.querySelector(".agreebox");
        if (!agree.checked) {
          this.$toast.show("请阅读并同意《xxxx用户服务条款》内容")
        }
      }
    },
  }
</script>

<style scoped>
  .reg-content {
    height: 600px;
    width: 100%;
    background-color: #f2f3f5;
  }
  .reg-content-main {
    height: 600px;
    position: relative;
  }
  .reg-box {
    width: 400px;
    height: 500px;
    position: absolute;
    left: 0;
    right: 0;
    top: 50px;
    margin: 0 auto;
    background-color: #fff;
  }
  .new-user {
    font-size: 24px;
    color: #2f2f39;
    line-height: 36px;
    margin-bottom: 20px;
    margin-top: 10px;
    margin-left: 20px;
  }
  .new-reg li {
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
  #code {
    width: 200px;
    margin-left: 40px;
    display: inline-block;
    vertical-align: bottom;
  }
  #send-msg {
    width: 100px;
    margin-left: 18px;
    border: 1px solid #ffde74;
    border-radius: 5px;
    display: inline-block;
  }
  .must {
    position: relative;
    left: -15px;
    top: 13px;
    color: red;
  }
  .icon-name {
    width: 14px;
    height: 20px;
    float: left;
    top: 10px;
    left: 14px;
    position: absolute;
    background: url("https://image.zuchecdn.com/newStatic/newversion/common/icon_new.png");
    background-position: 0 -50px;
  }
  .icon-phone {
    width: 14px;
    height: 20px;
    float: left;
    top: 10px;
    left: 14px;
    position: absolute;
    background: url("https://image.zuchecdn.com/newStatic/newversion/common/icon_new.png");
    background-position: -120px -50px;
  }
  .icon-msg {
    width: 14px;
    height: 20px;
    float: left;
    top: 10px;
    left: 14px;
    position: absolute;
    background: url("https://image.zuchecdn.com/newStatic/newversion/common/icon_new.png");
    background-position: -160px -50px;
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
  .user-name, .user-phone, .user-password, .user-check-password {
    height: 38px;
    width: 280px;
    float: right;
    border: 0px;
    outline: none;
  }
  .user-check {
    height: 38px;
    width: 160px;
    float: right;
    border: 0px;
    outline: none;
  }
  .check-button {
    height: 38px;
    width: 100px;
    border: 0px;
    outline: none;
    color: #fabe00;
    background-color: #fffaea;
    cursor: pointer;
  }
  .agree {
    text-align: center;
  }
  .agree input{
    width: 15px;
    height: 15px;
    vertical-align: middle;
    margin-right: 12px;
  }
  .agree span a {
    color: #6ab0ff;
  }
  .reg-button {
    display: block;
    width: 320px;
    height: 50px;
    position: relative;
    left: 0;
    right: 0;
    top: 20px;
    margin: 0 auto;
    text-align: center;
    line-height: 50px;
    background-color: #fabe00;
    border-radius: 5px;
    cursor: pointer;
  }
  li:focus-within{
    border: 1px solid #fabe00;
  }
</style>