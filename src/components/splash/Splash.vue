<template>
  <div class="splash">
    <section>
      <mt-swipe :continuous='false' :auto="0">
        <mt-swipe-item :key="i" v-for="(md,i) in msgData">
            <img class="banner" @click="gotoHome(i)" :src="md.img1" />
        </mt-swipe-item>
      </mt-swipe>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import {
  Swipe,
  SwipeItem,
} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  name: 'hello',
  data() {
    return {
      msgData: [
        {
          img1:'/static/images/splash1.jpg'
        },
        {
          img1:'/static/images/splash2.jpg'
        },
        {
          img1:'/static/images/splash3.jpg'
        }
      ]
    }
  },
  methods:{
    gotoHome(index){
      if(index === 2){
        this.$store.commit({
          type:'changeLaunch',
          launch:false
        })
        this.$router.push('/home');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../../static/style/usage/app.scss';
.splash {
  height: 100%;
  width: 100%;
  @include flexbox();
  section {
    @include flex(1);
    overflow-y: hidden;
    .mint-swipe{
      .mint-swipe-items-wrap{
        .mint-swipe-item{
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
