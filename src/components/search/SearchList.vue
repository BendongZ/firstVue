<template>
  <div class="searchList">
    <mt-header title="搜索列表">
      <router-link to="" @click.native="back" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <section>
      <div class="footerbar">
        <div :class="{active:styleSet.active0}" @click="changeTab(0)">
          全部
        </div>
        <div :class="{active:styleSet.active1}" @click="changeTab(1)">
          主播
        </div>
        <div :class="{active:styleSet.active2}" @click="changeTab(2)">
          直播
        </div>
      </div>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
// let styleSet1 = this.$store.state.searchList;
export default {
  name: 'hello',
  data() {
    return {
      styleSet: {}
    }
  },
  created(){
    this.styleSet = this.$store.state.searchList;
  },
  updated(){
    this.styleSet = this.$store.state.searchList;
  },
  methods: {
    changeTab(index) {
      switch (index) {
        case 0:
          this.$store.commit({
            type:'changeListStatus',
            active0: true,
            active1: false,
            active2: false
          })
          this.$router.push({ name: 'allresult' , params:{ques:this.$route.params.ques}});
          ; break;
        case 1:
          this.$store.commit({
            type:'changeListStatus',
            active0: false,
            active1: true,
            active2: false
          })
          this.$router.push({ name: 'zhubo' });
          ; break;
        case 2:
          this.$store.commit({
            type:'changeListStatus',
            active0: false,
            active1: false,
            active2: true
          })
          this.$router.push({ name: 'zhibo' });
          ; break;
      }
    },
    back(){
      this.$store.commit({
        type:'changeListStatus',
        active0: true,
        active1: false,
        active2: false
      })
      this.$router.isBack = true
      this.$router.push('/search')
    }
  },
  computed:{
    // let pathname = this.$route.fullPath
    // if(){

    // }
  },
  mounted() {
    console.log(this.$store.state.searchList);
    let pathname = this.$route.fullPath;
    if (pathname.includes('/allresult')) {
      this.styleSet = {
        active0: true,
        active1: false,
        active2: false,
      }
    } else if (pathname.includes('/zhubo')) {
      this.styleSet = {
        active0: false,
        active1: true,
        active2: false,
      }
    } else if (pathname.includes('/zhibo')) {
      this.styleSet = {
        active0: false,
        active1: false,
        active2: true,
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../../static/style/usage/header.scss';
.searchList {
  width: 100%;
  height: 100%;
  @include flexbox();
  @include flex-direction(column);
  background-color: #666;
  section {
    @include flex(1);
    width: 100%;
    overflow: scroll;
    .footerbar {
      @include flexbox(); 
      @include flex-direction(row);
      @include border(0 0 1px 0);
      background: #666;
      position: fixed;
      top: .43rem;
      left: 0;
      width: 100%;
      z-index: 1000;
      div {
        @include flex(1);
        text-align: center;
        height: .4rem;
        line-height: .4rem;
        opacity: 0.7;
        font-size: .15rem;
        color: #fff;
        font-weight: 700;
        &.active {
          color: #0ff;
          opacity: 1;
          @include border(0 0 3px 0, '#f00');
        }
      }
    }
  }
}
</style>
