<template>
  <transition :name="transitionName">
    <!--<keep-alive>-->
    <router-view class="child-view"></router-view>
    <!--</keep-alive>-->
  </transition>
</template>

<script>
export default {
  data() {
    return {
      transitionName: 'ss'
    }
  },
  mounted() {
    console.log('1111111111111111111111');
  },
  watch: {
    '$route'(to, from) {
      let isBack = this.$router.isBack
      if (isBack) {
      this.transitionName = 'slideInRight'
      } else {
      this.transitionName = 'slideInLeft'
      }
      this.$router.isBack = false
      // const toDepth = to.path.split('/').length
      // console.log(toDepth)
      // const fromDepth = from.path.split('/').length
      // console.log(fromDepth)
      // this.transitionName = toDepth < fromDepth ? 'slideInRight' : 'slideInLeft'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped='true'>
.child-view {
 // position: absolute;
 height: 100%;
 width:100%;
//  transition: all .8s cubic-bezier(.55,0,.1,1);
 transition: all .3s linear;
}
.slideInLeft-enter, .slideInRight-leave-active {
 opacity: 1;
 -webkit-transform: translate(100%, 0);
 transform: translate(100%, 0);
}
.slideInLeft-leave-active, .slideInRight-enter {
 opacity: 1;
 -webkit-transform: translate(-100%, 0);
 transform: translate(-100%, 0);
}
// @keyframes slideInLeft {
//   from {
//     transform: translate3d(-100%, 0, 0);
//     visibility: visible;
//   }

//   to {
//     transform: translate3d(0, 0, 0);
//   }
// }

// .slideInLeft-enter-active {
//   animation: slideInLeft 1s linear;
// }

// .slideInLeft-leave-active {
//   animation: slideInLeft 1s linear reverse;
// }

// @keyframes slideInRight {
//   from {
//     transform: translate3d(100%, 0, 0);
//     visibility: visible;
//   }

//   to {
//     transform: translate3d(0, 0, 0);
//   }
// }

// .slideInRight-enter-active {
//   animation: slideInRight 1s linear;
// }

// .slideInRight-leave-active {
//   animation: slideInRight 1s linear reverse;
// }
</style>
