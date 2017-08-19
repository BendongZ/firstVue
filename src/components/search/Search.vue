<template>
  <div class="m-index">
    <section>
      <div class="searchText">
        <!--<input type="text"  />-->
        <!--<mt-search v-model="value" @keyup.enter="getValue" placeholder="请输入房间 / 主播 / 分类"></mt-search>-->
        <input class="stext" type="text" v-model="value" @keyup.enter="goSearch"  placeholder="请输入房间 / 主播 / 分类"/>
        <i @click="goSearch" class="mintui icon-search-light"></i>
      </div>
      <div class="search-list">
        <h2>最近热搜</h2>
        <ul>
           <router-link tag='li' :key="i" v-for="(hs,i) in hotSearch" :to="{name: 'searchList', params: {ques: hs}}">
              <i>{{i+1}}</i>
              <span>{{hs}}</span>
           </router-link>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'hello',
  data() {
    return {
      msg: 'shhss',
      value:'',
      result:['11','11','11','11','11','11','11'],
      hotSearch:[]
    }
  },
  methods:{
    getValue(){
      console.log(this.value);
    },
    goSearch(){
      if(this.value === ''){
        Toast({
          message: '搜索内容不能为空',
          position: 'middle',
          duration: 3000
        });
      }else{
        this.$router.push({name:'searchList',params:{ques:this.value}})
      }
    },
    getHotSearch(){
      this.$axios({
        url:'/search/getTodayTopData?limit=10&isAjax=1',
        method:'GET'
      })
      .then(res => {
        this.hotSearch = res.data;
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  created(){
    this.getHotSearch();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../../static/style/usage/app.scss';
@import '../../../static/style/usage/tabbar.scss';
.m-index {
  width: 100%;
  height: 100%;
  @include flexbox();
  @include flex-direction(column);
  section {
    @include flex(1);
    background: #fff;
    width: 100%;
    padding-bottom: .55rem;
    .searchText{
      height: .44rem;
      @include flexbox();
      @include flex-direction(row);
      @include align-items(center);
      @include border(1px 0);
      .stext{
        border:0;
        outline: none;
        @include flex(1);
        height: .44rem;
        font-size: 16px;
        padding-left: .15rem;
      }
      i{
        display: inline-block;
        width: .49rem;
        @include border(0 0 0 1px);
        font-size: 20px;
        height: .44rem;
        line-height: .42rem;
        text-align: center;
      }
    }
    .search-list{
      margin-top: .15rem;
      padding: 0 .15rem;
      ul{
        width: 100%;
        @include flexbox();
        @include flex-direction(row);
        @include flex-wrap(wrap);
        li{
          line-height: .24rem;
          @include flex(1 0 50%);
          @include flexbox();
          @include flex-direction(row);
          @include align-items(center);
          i{
            display: inline-block;
            line-height: .15rem;
            text-align: center;
            height: .15rem;
            width: .15rem;
          }
          span{
            margin-left: .1rem;
          }
          &:nth-child(1){
            i{
              background-color: #f00;
            }
          }
          &:nth-child(2){
            i{
              background-color: #f74;
            }
          }
          &:nth-child(3){
            i{
              background-color: #fa3;
            }
          }
        }
      }
    }
  }
}
</style>
