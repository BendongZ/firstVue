<template>
  <div class="m-index">
    <section>
      <div class="gxb" v-for="(gift,i) in userInfo.gift" :key="i">
       <div class="gxb-left">
         <img :src="gift.mimg" />
       </div>
       <div class="gxb-right">
          <h1>{{gift.name}}(+{{gift.gx/10}}鱼翅)</h1>
          <p>
            <span>贡献 +{{gift.gx}}</span>
				    <span>经验 +{{gift.pc}}</span>
          </p>
          <p>{{gift.desc}}</p>
		      <p>{{gift.intro}}</p>
          <p>
            <mt-button type="primary" size="small">批量赠送</mt-button>
          </p>
       </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);

export default {
  name: 'hello',
  props:{
    userInfo:''
  },
  data () {
    return {
    msg:'shhss'
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../../static/style/usage/app.scss';
.m-index{
  width: 100%;
  background-color: #fff;
    section{
      width: 100%;
      margin-top: .1rem;
      padding: 0 .05rem;
        .gxb{
            background-color: #ddd;
            @include border-radius(.2rem);
            width: 100%;
            height: 1.8rem;
            margin-bottom: .1rem;
            @include flexbox();
            @include flex-direction(row);
            .gxb-left{
              img{
                @include border-radius(.2rem);
                height: 1.8rem;
                width: 1.6rem;
              }
            }
            .gxb-right{
              @include flex(1);
              padding-left: .08rem;
              h1{
                color: #f00;
                text-align: center;
                height: .4rem;
                line-height: .4rem;
              }
              p{
                text-align: center;
                line-height: .3rem;
                &:nth-child(4){
                  color: #f00;
                }
              }
              button{
                  border-radius: 10px;
                  font-size: 14px;
                  height: .4rem;
                  font-weight: bold;
                  color: #fff;
                  background: #ff4500;
                  opacity: 0.9;
                  padding: 0 .05rem;
              }
            }
        }
    }
}
</style>
