<template>
  <div class="m-index">
    <mt-swipe :auto="4000">
      <mt-swipe-item :key="i" v-for="(ban,i) in banners">
        <router-link :to="{name: 'roomDetail', params: {id: ban.room.room_id}}">
          <img class="banner" :src="ban.pic_url" />
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
    <a class="layout-ball" target="parent" href="https://www.douyu.com/client?platform=0" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"></a>
    <section>
      <!--<div>
                    <video-player  ref="videoPlayer"
                              :options="playerOptions"
                              title="you can listen some event if you need"
                              @play="onPlayerPlay($event)"
                              @pause="onPlayerPause($event)"
                              @statechanged="playerStateChanged($event)"
                              @ready="playerReadied">
                    </video-player>
                  </div>-->
      <ul class="room-list clearfix" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
        <router-link tag='li' :key="i" v-for="(room,i) in hotroom" :to="{name: 'roomDetail', params: {id: room.room_id}}">
          <a class="room">
            <img :src="room.room_src" />
            <div class="room-info">
              <span class="room-name">{{room.nickname}}</span>
              <span class="room-online">
                <i class="mintui icon-users"></i> {{room.online | fixed}}</span>
            </div>
            <div class="room-title">
              <i class="mintui icon-ondemand_video"></i> {{room.room_name}}</div>
          </a>
        </router-link>
      </ul>
      <div class="loading" v-if="loading">
        <mt-spinner class="spinner" color="#000" type="fading-circle"></mt-spinner>
        <span class="load-text">加载中...</span>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import VideoPlayer from 'vue-video-player'
import {
  Swipe,
  SwipeItem,
  InfiniteScroll,
  Spinner
} from 'mint-ui';

Vue.component(Spinner.name, Spinner);

Vue.use(InfiniteScroll);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.use(VideoPlayer)

export default {
  name: 'hello',
  data() {
    return {
      playerOptions: {
        // component options
        start: 0,
        playsinline: false,
        // videojs options
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          src: "http://10.9.166.125/c.mp4"
        }],
        poster: "/static/images/logo.png",
      },
      banners: [],
      hotroom: [],
      pageNo: 0,
      pageSize: 20,
      loading: false
    }
  },
  beforeRouteLeave (to, from, next) {
 // 如果isBack为true时，证明是用户点击了回退，执行slide-right动画
  console.log('hahhaha');
  let isBack = this.$router.isBack
  console.log(this.$router.isBack)
  if (isBack) {
   this.transitionName = 'slideInRight'
  } else {
   this.transitionName = 'slideInLeft'
  }
  // 做完回退动画后，要设置成前进动画，否则下次打开页面动画将还是回退
  this.$router.isBack = false
  console.log(this.$router.isBack)
  next()
},
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied(player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    },
    getHomeData(){
       this.$axios({
          url: `/index/getHomeData`,
          method: 'get'
        })
          .then(response => {
            console.log(response);
            this.banners = response.data.banner;
            // this.loading = false;
          })
          .catch(err => console.log(err))
    },
    loadMore() {
      this.loading = true;
      this.pageNo++;
      setTimeout(() => {
        this.$axios({
          url: `/api/RoomApi/live?limit=${this.pageSize}&offset=${this.pageNo * this.pageSize}`,
          method: 'get'
        })
          .then(response => {
            this.hotroom = this.hotroom.concat(response.data.data);
            this.loading = false;
          })
          .catch(err => console.log(err))

      }, 2500);
    }
  },
  mounted() {
    this.getHomeData()
    this.$axios({
      url: `/api/RoomApi/live?limit=${this.pageSize}&${this.pageNo}`,
      method: 'get'
    })
      .then(response => {
        // this.banners = response.data.data.slice(0, 10);
        this.hotroom = response.data.data;
      })
      .catch(err => console.log(err))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../../static/style/usage/app.scss';
@import '../../../static/style/usage/tabbar.scss';
.m-index {
  height: 100%;
  width: 100%;
  background-color: #ececec;
  @include flexbox();
  @include flex-direction(column);
  padding-bottom: .55rem!important;
  overflow: scroll;
  .mint-swipe {
    width: 100%;
    height: 1.8rem;
    overflow: initial;
    .banner {
      width: 100%;
      height: 1.8rem;
    }
  }
  .layout-ball{
    position: fixed;
    z-index: 50;
    bottom: .75rem;
    right: 0;
    width: .85rem;
    height: .75rem;
    background-image: url(/static/images/ball.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  section {
    @include flex(1);
    background: #f8f8f8;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    margin-top: .1rem;
    font-size: 12px;
    .loading {
      height: .5rem;
      line-height: .5rem;
      @include flexbox();
      @include flex-direction(row);
      @include justify-content(center);
      .spinner {
        margin-top: .11rem;
      }
      .load-text {
        margin-left: .05rem;
      }
    }
  }
} // @include clearfix();
// @include flexbox();
// @include flex-direction(column);
// width: 100%
// width: 50%;
// @include flex-wrap(nowrap);
.clearfix {
  overflow: hidden;
  li {
    float: left;
    width: 50%;
    padding: .1rem;
    .room {
      position: relative;
      display: block; // margin: .1rem;
      width: 100%;
      height: 1.3rem;
      color: #333;
      img {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 1rem;
        background-color: #000;
        border-radius: .1rem;
      }
      .room-title {
        position: absolute;
        bottom: 0;
        left: .2rem;
        width: .96rem;
        color: #3a3a3a;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: .15rem;
      }
      .room-info {
        position: absolute;
        bottom: .20rem;
        line-height: .2rem;
        left: 0;
        width: 100%;
        color: #fff;
        padding: .1rem 0;
        border-bottom-left-radius: .2rem;
        border-bottom-right-radius: .2rem;
        background: linear-gradient(top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .1) 30%, rgba(0, 0, 0, .8) 100%);
        background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .1) 30%, rgba(0, 0, 0, .8) 100%);
        background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .1) 30%, rgba(0, 0, 0, .8) 100%);
        .room-name {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          max-width: .67rem;
          display: inline-block;
          padding-left: .2rem;
        }
        .room-online {
          float: right;
          padding-right: .2rem;
        }
      }
    }
  }
}
</style>
      
