<template>
  <div id="app">
    <mt-header :title="title">
      <mt-button icon="person" @click="haha" slot="right"></mt-button>
    </mt-header>
    <!--<keep-alive>-->
      <router-view></router-view>
    <!--</keep-alive>-->
    <mt-tabbar>
      <router-link :to="{name:'home'}" exact active-class="active" tag="li" @click.native="changeIndex(0)">
        <mt-tab-item id="首页">
          <i slot="icon" class="mintui"></i>
          首页
        </mt-tab-item>
      </router-link>
      <router-link :to="{name:'fenlei'}" exact active-class="active" tag="li" @click.native="changeIndex(1)">
        <mt-tab-item id="分类">
          <i slot="icon" class="mintui"></i>
          分类
        </mt-tab-item>
      </router-link>
      <router-link :to="{name:'recommend'}" exact active-class="active" tag="li" @click.native="changeIndex(2)">
        <mt-tab-item id="推荐">
          <i slot="icon" class="mintui"></i>
          推荐
        </mt-tab-item>
      </router-link>
      <router-link :to="{name:'search'}" exact active-class="active" tag="li" @click.native="changeIndex(3)">
        <mt-tab-item id="搜索">
          <i slot="icon" class="mintui"></i>
          搜索
        </mt-tab-item>
      </router-link>
    </mt-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header, Button, Tabbar, TabItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Button.name, Button)
export default {
  name: 'app',
  data() {
    return {
      title: this.$store.state.indexTitle
    }
  },
  methods: {
    changeIndex: function (index) {
      switch (index) {
        case 0:
          this.title = '首页';
          this.$store.commit({
            type: 'changeTitle',
            title: '首页'
          })

            ; break;
        case 1:
          this.title = '分类';
          this.$store.commit({
            type: 'changeTitle',
            title: '分类'
          })
            ; break;
        case 2:
          this.title = '推荐';
          this.$store.commit({
            type: 'changeTitle',
            title: '推荐'
          })
            ; break;
        case 3:
          this.title = '搜索';
          this.$store.commit({
            type: 'changeTitle',
            title: '搜索'
          })
            ; break;
      }
    },
    haha(){
      this.$router.push('/account');
    }
  },
  mounted(){
    let pathname = this.$route.fullPath;
    if(pathname.includes('/recommend')){
      this.title = '推荐';
    }else if(pathname.includes('/home')){
      this.title = '首页';
    }else if(pathname.includes('/search')){
      this.title = '搜索';
    }else if(pathname.includes('/fenlei')){
      this.title = '分类';
    }
  }
}
</script>

<style lang='scss'>
@import '../../static/style/usage/app.scss';
@import '../../static/style/usage/tabbar.scss';

#app {
  height: 100%;
  width: 100%;
  @include flexbox();
  @include flex-direction(column);
}

.mint-header-title {
  font-size: .18rem;
}

.mint-header {
  height: .44rem;
  line-height: .44rem;
  // background-color: #0dad51;
  background-color: #ff7700;
  // i:before { content: "\E6D4"; }
}

.mint-tabbar {
  // background-color: #0dad51;
  background-color: #ff7700;
  @include flexbox();
  li {
    @include flex(1);

    &:nth-child(1) i::before {
      content: "\e6b8";
    }
    &:nth-child(2) i::before {
      content: "\e7b1";
    }
    &:nth-child(3) i::before {
      content: "\e7e1";
    }
    &:nth-child(4) i::before {
      content: "\e7da";
    }
    &:nth-child(1).active i::before {
      content: "\e6bb";
    }
    &:nth-child(2).active i::before {
      content: "\e7b0";
    }
    &:nth-child(3).active i::before {
      content: "\e7ec";
    }
    &:nth-child(4).active i::before {
      content: "\e7da";
    }
    .mint-tab-item-icon {
      i {
        color: #fff;
        font-size: .20rem;
      }
    }
    .mint-tab-item-label {
      color: #fff;
    }
  }
  li.active i{
    font-size: .22rem;
  }
}
</style>
