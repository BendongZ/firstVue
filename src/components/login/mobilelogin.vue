<template>
<div class="mobilelogin">
  <mt-header title="手机登录">
    <router-link :to="{name:'account'}" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
    <router-link :to="{name:'nicklogin'}" slot="right">
      <mt-button icon="">昵称登录</mt-button>
    </router-link>
  </mt-header>
  <section>
    <div class="form">
      <div class="address">
        <span>国家与地区</span>
        <p>中国</p>
        <i class="mintui icon-right-arrow"></i>
      </div>
      <div class="username">
        <i>+86</i>
        <input type="text" name="" placeholder="请输入手机号" value="">
      </div>
      <div class="password">
        <i class="mintui mintui-mima"></i>
        <input type="text" name="" placeholder="输入密码" value="">
      </div>
    </div>
    <div class="login">
      <mt-button size="large">登录</mt-button>
    </div>
    <div class="forgetCode">
      <router-link to="">
        忘记密码？
      </router-link>
      <router-link :to="{name:'register'}">
        快速注册
      </router-link>
    </div>
  </section>
</div>
</template>

<script>
import Vue from 'vue'
import {
  Button
} from 'mint-ui';
Vue.component(Button.name, Button);
export default {
  name: 'login',
  data() {
    return {

    }
  },
  methods: {
    back() {
      this.$router.isBack = true
      this.$router.goBack();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../../static/style/usage/header.scss';
.mobilelogin {
    height: 100%;
    width: 100%;
    @include flexbox();
    @include flex-direction(column);
    section {
        @include flex(1);
        width: 100%;
        height: 100%;
        overflow-x: inherit;
        overflow-y: scroll;
        .form {
            width: 100%;
            padding: 14px 10px;
            div {
                height: 0.4rem;
                width: 100%;
                background-color: #fff;
                @include flexbox();
                @include border-radius(5px);
                i {
                    display: inline-block;
                    text-align: center;
                    line-height: 0.4rem;
                    width: 0.4rem;
                    height: 100%;
                    color: #9e9e9e;
                }
                input {
                    height: 100%;
                    line-height: 0.4rem;
                    @include flex(1);
                    color: #9e9e9e;
                }
            }
            .address{
              @include flexbox();
              span{
                display: inline-block;
                height: 100%;
                line-height: .4rem;
                text-align: left;
                padding-left: .15rem;
                color: #9e9e9e;
                @include flex(1);
              }
              p{
                @include flex(2);
                line-height: .4rem;
                height: 100%;
                text-align: right;
              }
              i{
                display: inline-block;
                text-align: center;
                height: 100%;
                line-height: .4rem;
                width: .4rem;
              }
            }
            .username {
              margin-top: 10px;
                i {
                    width: .7rem;
                    color: #ff7700;
                    @include border(0 2px 0 0, #999);
                }
                input{
                  padding-left: 10px;
                }
            }
            .password {
                margin-top: 0.2rem;
            }
        }
        .login {
            color: #fff;
            padding: 20px 10px 10px;
            button {
                color: #fff;
                background: #ff7700;
            }
        }
        .forgetCode {
            padding: 0 10px;
            @include flexbox();
            @include justify-content(space-between);
            a {
                &:nth-of-type(1) {
                    color: #9e9e9e;
                }
                &:nth-of-type(2) {
                    color: #ff7700;
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>
