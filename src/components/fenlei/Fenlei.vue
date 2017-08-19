<template>
  <div class="m-index">
    <div v-data class="category">
      <span :class="{caitem:true, cur:itemStyle.item === 10}" @click="getShortName('',10)" data-type="all">
        全部
        <b :class="{curb:itemStyle.item === 10}"></b>
      </span>
      <span :class="{caitem:true,cur:itemStyle.item === i}" v-for="(cg,i) in category" :key="i" @click="getShortName(cg.shortName,i)" :data-type="cg.shortName">
        {{cg.cate1Name}}
        <b :class="{curb:itemStyle.item === i}"></b>
      </span>
    </div>
    <section>
      <div class="gird">
        <router-link class="item" v-for="(fd,i) in fenleiData" :key="i" @click.native="gotoNext(fd.cate2Id,fd.cate2Name)" to="">
          <img :src="fd.icon" />
          <p class="title">{{fd.cate2Name}}</p>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
  name: 'hello',
  data() {
    return {
      msg: 'shhss',
      fenleiData: [],
      category: [],
      cateColl:[],
      itemStyle:{
        item:10
      }
    }
  },
  created() {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    this.getGameCate('')
    // this.$axios({
    //   url: `/api/RoomApi/game`,
    //   method: 'get'
    // })
    //   .then(response => {
    //     // console.log(response.data.data);
    //     Indicator.close();
    //     this.fenleiData = response.data.data;
    //   })
    //   .catch(err => console.log(err))
  },
  directives:{
    data:{
      inserted(el,binding){
        // this.cateColl.push(el);
        // console.log(el.children[5]);
      }
    }
  },
  methods: {
    getShortName(name,i) {
      console.log(name,i);
      this.itemStyle.item = i;
      this.$axios({
        url: `/category?type=${name}`,
        method: 'get'
      })
        .then(response => {
          console.log(response.data);
          Indicator.close();
          // this.category = response.data.cate1Info;
          this.fenleiData = response.data.cate2Info
        })
        .catch(err => console.log(err))
    },
    gotoNext(id, name) {
      this.$store.commit({
        type: 'fenleiId',
        id: id,
        title: name,
      })
      this.$router.push({ name: 'fendetail', params: { cate_id: id, game_name: name } })
    },
    getGameCate(cate) {
      this.$axios({
        url: `/category?type=${cate}`,
        method: 'get'
      })
        .then(response => {
          console.log(response.data);
          Indicator.close();
          this.category = response.data.cate1Info;
          this.fenleiData = response.data.cate2Info
          // Indicator.close();
          // this.fenleiData = response.data.data;
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../../static/style/usage/app.scss';
.m-index {
  height: 100%;
  width: 100%;
  @include flexbox();
  @include flex-direction(column);
  .category {
    width: 100%;
    max-width: 10rem;
    height: .5rem;
    background-color: #fff;
    overflow-x: auto;
    overflow-y: hidden;
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap; // @include border(0 0 1px 0,'#dedede');
    border-bottom: solid 2px #dedede;
    .caitem {
      position: relative;
      display: inline-block;
      white-space: nowrap;
      border-right: .15rem solid transparent;
      border-left: .15rem solid transparent;
      font-size: .15rem;
      color: #676767;
      line-height: .5rem; // b{
      //   display: none;
      // }
      b {
        position: absolute;
        width: 100%;
        display: none;
        height: .02rem;
        left: 0;
        bottom: .1rem;
        background-color: #fa7122;
      }
      .curb{
        display: block;
      }
    }
    .cur {
      font-weight: 700;
      color: #fa7122;
    }
  }
  section {
    @include flex(1);
    height: 100%;
    width: 100%;
    padding-bottom: .55rem;
    overflow: scroll;
    .gird {
      width: 100%;
      @include flexbox();
      @include flex-direction(row);
      @include flex-wrap(wrap);
      background-color: #eee;
      flex: 0 1 auto;
      .item {
        height: 100px;
        border-width: 0 1px 1px 0;
        border-style: dashed;
        border-color: #dedede;
        @include flexbox();
        @include flex(1);
        @include flex-direction(column);
        @include align-items(center);
        @include justify-content(center);
        flex: 0 1 33.33333333333333333333333333333333333333333333333333333333333333%;
        // flex-grow: 1;
        img {
          border-radius: 50%;
          max-width: 42px;
          max-height: 42px;
          transition: opacity 1.2s ease;
          opacity: 1;
          width: 100%;
        }
        .title {
          color: #7E7E7E;
          margin: 0;
          text-align: center;
          font-size: 14px;
          padding: 5px 0 4px 6px;
          overflow: hidden;
          white-space: nowrap;
          word-break: break-all;
        }
      }
    }
  }
}
</style>
