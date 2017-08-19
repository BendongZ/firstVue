<template>
  <div class="register">
    <mt-header title="注册">
      <router-link to="" @click.native="back" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <section>
      <div class="form">
        <div class="username">
          <i class="mintui mintui-user"></i>
          <input type="text" name="" placeholder="昵称/用户名(5-30位字符)" value="">
        </div>
        <div class="password">
          <i class="mintui mintui-mima"></i>
          <input type="text" name="" placeholder="输入密码" value="">
        </div>
        <div class="ok_password">
          <i class="mintui mintui-mima"></i>
          <input type="text" name="" placeholder="确认密码" value="">
        </div>
      </div>
      <div class="ok_register">
        <mt-button size="large">登录</mt-button>
      </div>
      <div class="forgetCode">
        <router-link :to="{name:'nicklogin'}">
          马上登录
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
export default {
  name: 'login',
  data() {
    return {

    }
  },
  methods:{
    back(){
      this.$router.isBack = true
      this.$router.goBack();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../../static/style/usage/header.scss';
.register {
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
    .form{
      width: 100%;
      padding: 14px 10px;
      div{
        height: .4rem;
        width: 100%;
        background-color: #fff;
        @include flexbox();
        @include border-radius(5px);
        i{
          display: inline-block;
          text-align: center;
          line-height: .4rem;
          width: .4rem;
          height: 100%;
          color: #999;
        }
        input{
          height: 100%;
          line-height: .4rem;
          @include flex(1);
          color: #999;
        }
      }
      .username{
        i{
          line-height: .38rem;
        }
      }
      .password{
        margin-top: .2rem;
      }
      .ok_password{
        margin-top: .2rem;
      }
    }
    .ok_register{
      color: #fff;
      padding:20px 10px 10px;
      button{
        color: #fff;
        background: #ff7700;
      }
    }
    .forgetCode{
      padding: 0 10px;
      @include flexbox();
      @include justify-content(flex-end);
      a{
          color: #ff7700;
          text-decoration: underline;
      }
    }
  }
}
</style>
