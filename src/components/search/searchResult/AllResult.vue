<template>
  <div class="allresult">
    <section>
      <div class="zhubo">
        <div class="bt">
          <h2>主播</h2>
          <a @click.prevent="moreZhubo">
            <span>更多</span>
            <i class="mintui icon-right-arrow"></i>
          </a>
        </div>
        <ul class="zhuboul">
          <router-link tag='li' :key="i" v-for="(azd,i) in allzhuboData" :to="{name: 'roomDetail', params: {id: azd.room_id}}">
              <img :src="azd.avatar"/>
              <p class="room_name">{{azd.room_name}}</p>
              <p>{{azd.fans}} 人关注</p>
          </router-link>
        </ul>
      </div>
      <div class="zhibo">
        <div class="bt">
          <h2>直播</h2>
          <a @click.prevent="moreZhibo">
            <span>更多</span>
            <i class="mintui icon-right-arrow"></i>
          </a>
        </div>
        <ul class="zhiboul">
          <router-link tag='li' :key="i" v-for="(azd,i) in allzhiboData" :to="{name: 'roomDetail', params: {id: azd.room_id}}">
              <img :src="azd.room_src"/>
              <p class="room_name">{{azd.room_name}}</p>
              <span class="online"><i class="mintui icon-watching"></i>{{azd.online}}</span>
              <span class="guanzhu"><i class="mintui icon-person"></i>{{azd.fans}}</span>
          </router-link>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      allzhuboData:[],
      allzhiboData:[]
    }
  },
  mounted() {
    console.log(this.$route.params.ques);
  },
  methods: {
    getAllZhubiData() {
      return this.$axios({
        url: `/v1/searchNew/${this.$route.params.ques}/1?limit=6&offset=0`,
        method: 'GET'
      })
    },
    getAllZhiboData() {
      return this.$axios({
        url: `/v1/searchNew/${this.$route.params.ques}/1?limit=16&offset=0`,
        method: 'GET'
      })
    },
    moreZhubo(){
      this.$store.commit({
        type:'changeListStatus',
        active0:false,
        active1:true,
        active2:false
      })
      this.$router.push({ name: 'zhubo' });
    },
    moreZhibo(){
      this.$store.commit({
        type:'changeListStatus',
        active0:false,
        active1:false,
        active2:true
      })
      this.$router.push({ name: 'zhibo' });
    }
  },
  mounted() {
    this.$nextTick(()=> {
      this.$axios.all([this.getAllZhubiData(),this.getAllZhiboData()])
      .then(this.$axios.spread((res1,res2)=>{
        console.log(res1,res2)
        if(res1.data.data.room.length !== 0){
          console.log(res1.data.data.room);
          this.allzhuboData = res1.data.data.room;
        }
        if(res2.data.data.room.length !== 0){
          this.allzhiboData = res2.data.data.room;
        }
      }))
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../../../static/style/usage/header.scss';
@import '../../../../static/style/usage/tabbar.scss';
.allresult {
  height: 100%;
  width: 100%;
  background: #fff;
  margin-top: .4rem;
  section {
    width: 100%;
    height: 100%;
    div {
      width: 100%;
      .bt{
        @include flexbox();
        @include flex-direction(row);
        height: .4rem;
        h2{
          // color:#000;
          margin-left: .15rem;
          font-size: 15px;
          height: .2rem;
          line-height: .2rem;
          @include flex(1);
          padding-left:.15rem;
          margin-top: 10px;
          // @include border(0 0 0 4px);
          border-left: solid 4px #f00;
          border-radius: 3px 0 0 3px;
        }
        a{
          color: #666;
          font-size: 13px;
          display: inline-block;
          width: .6rem;
          // line-height: .4rem;
          @include flexbox();
          @include flex-direction(row);
          @include justify-content(center);
          @include align-items(center);
          i{
            margin-left: .05rem;
            color: #ccc;
            font-size: 17px;
            margin-top: -2px;
          }
        }
      }
    }
    .zhuboul{
      @include flexbox();
      @include flex-direction(row);
      @include flex-wrap(wrap);
      li{
        height: 1.5rem;
        width: 33%;
        @include flexbox();
        @include flex-direction(column);
        @include align-items(center);
        img{
          @include border-radius(5px);
          height: 1rem;
          width: 85%;
        }
        p{
          text-align: center;
          max-width: 85%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          height: .2rem;
          color: #551a8b;
          font-size: 12px;
          &:nth-child(2){
            margin-top: .1rem;
          }
          &:nth-child(3){
            opacity: .8;
          }
        }
      }
    }
    .zhiboul{
      @include flexbox();
      @include flex-direction(row);
      @include flex-wrap(wrap);
      background-color: #fff;
      li{
        height: 1.5rem;
        width: 50%;
        @include flexbox();
        @include flex-direction(column);
        @include align-items(center);
        position: relative;
        img{
          @include border-radius(5px);
          height: 1rem;
          width: 85%;
        }
        span{
          color: #fff;
        }
        i{
          margin-right: 5px;
          color: #fff;
        }
        .online{
          position: absolute;
          left: 20px;
          top: 0px;
        }
        .guanzhu{
          position: absolute;
          left: 20px;
          bottom: 50px;
        }
        p{
          text-align: center;
          max-width: 85%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          height: .2rem;
          opacity: 1;
          font-size: 12px;
          margin-top: .15rem;
        }
      }
    }
  }
}
</style>
