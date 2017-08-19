<template>
  <div class="account">
    <mt-header title="个人中心">
      <router-link to="" @click.native="back" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <section>
      <div class="aheader">
        <div class="a-img">
          <img src="/static/images/splash1.jpg" />
        </div>
        <div class="a-right">
          <router-link :to="{ name: 'nicklogin'}">
            <span>登录</span>
          </router-link>
          <router-link :to="{ name: 'register', params: {} }">
            <span>注册</span>
          </router-link>
        </div>
      </div>
      <div class="amiddle">
        <div class="am-left">
          <i class="mintui mintui-xiaoxi"></i>
          <p>消息</p>
        </div>
        <div class="am-zhong">
          <i class="mintui mintui-huangguan"></i>
          <p>斗鱼贵族</p>
        </div>
        <div class="am-right">
          <i class="mintui mintui-fish"></i>
          <p>鱼翅充值</p>
        </div>
      </div>
      <div class="a-bottom">
        <div class="wrap dengji a-margin-top">
          <div class="item">
            <div class="icon-first">
              <i class="mintui mintui-dengji"></i>
            </div>
            <p>我的等级</p>
            <p>未登录</p>
            <div class="icon-last">
              <i class="mintui icon-arrow_right"></i>
            </div>
          </div>
        </div>
        <div class="wrap a-margin-top fensi">
          <div class="item">
            <div class="icon-first">
              <i class="mintui mintui-fans"></i>
            </div>
            <p>我的粉丝徽章</p>
            <p></p>
            <div class="icon-last">
              <i class="mintui icon-arrow_right"></i>
            </div>
          </div>
        </div>
        <div class="wrap kaihei">
          <div class="item">
            <div class="icon-first">
              <i class="mintui mintui-erji"></i>
            </div>
            <p>语音开黑</p>
            <p>五人语音开黑房间</p>
            <div class="icon-last">
              <i class="mintui icon-arrow_right"></i>
            </div>
          </div>
        </div>
        <div class="wrap youxi">
          <div class="item">
            <div class="icon-first">
              <i class="mintui mintui-youxi"></i>
            </div>
            <p>游戏中心</p>
            <p>玩游戏领鱼丸</p>
            <div class="icon-last">
              <i class="mintui icon-arrow_right"></i>
            </div>
          </div>
        </div>
        <div class="wrap yugou">
          <div class="item">
            <div class="icon-first">
              <i class="mintui mintui-gouwu"></i>
            </div>
            <p>我的鱼购</p>
            <p></p>
            <div class="icon-last">
              <i class="mintui icon-arrow_right"></i>
            </div>
          </div>
        </div>
        <div class="wrap a-margin-top zhubo">
          <div class="item">
            <div class="icon-first">
              <i class="mintui mintui-tianjiahaoyou"></i>
            </div>
            <p>主播招募</p>
            <p></p>
            <div class="icon-last">
              <i class="mintui icon-arrow_right"></i>
            </div>
          </div>
        </div>
        <div class="wrap paihang">
          <div class="item">
            <div class="icon-first">
              <i class="mintui mintui-paihangbang"></i>
            </div>
            <p>排行榜</p>
            <p></p>
            <div class="icon-last">
              <i class="mintui icon-arrow_right"></i>
            </div>
          </div>
        </div>
        <div class="wrap a-margin-top myvideo">
          <div class="item">
            <div class="icon-first">
              <i class="mintui mintui-shipin"></i>
            </div>
            <p>我的视频</p>
            <p></p>
            <div class="icon-last">
              <i class="mintui icon-arrow_right"></i>
            </div>
          </div>
        </div>
        <div class="wrap videoCollection">
          <div class="item">
            <div class="icon-first">
              <i class="mintui mintui-shoucang"></i>
            </div>
            <p>视频收藏</p>
            <p></p>
            <div class="icon-last">
              <i class="mintui icon-arrow_right"></i>
            </div>
          </div>
        </div>
        <div class="wrap a-margin-top user">
          <div class="item">
            <div class="icon-first">
              <i class="mintui mintui-account"></i>
            </div>
            <p>我的账户</p>
            <p></p>
            <div class="icon-last">
              <i class="mintui icon-arrow_right"></i>
            </div>
          </div>
        </div>
        <div class="wrap liuliang">
          <div class="item">
            <div class="icon-first">
              <i class="mintui mintui-liuliang"></i>
            </div>
            <p>免流量特权</p>
            <p></p>
            <div class="icon-last">
              <i class="mintui icon-arrow_right"></i>
            </div>
          </div>
        </div>
        <div class="wrap a-margin-top guanzhu">
          <div class="item">
            <div class="icon-first">
              <i class="mintui mintui-guanzhu"></i>
            </div>
            <p>关注管理</p>
            <p></p>
            <div class="icon-last">
              <i class="mintui icon-arrow_right"></i>
            </div>
          </div>
        </div>
        <div class="wrap kaibo">
          <div class="item">
            <div class="icon-first">
              <i class="mintui mintui-naozhong"></i>
            </div>
            <p>开播提醒</p>
            <p></p>
            <div class="icon-last">
              <i class="mintui icon-arrow_right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'shhss',
      time:10
    }
  },
  methods: {
    back() {
      this.$router.isBack = true
      this.$router.push('/home')
    },
    gologin(){

    }
  },
  mounted() {
    console.log(this.$q("#haha").text());
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../../static/style/usage/header.scss';
@import '../../../static/style/usage/tabbar.scss';
.account {
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
  @include flexbox();
  @include flex-direction(column);
  section {
    @include flex(1);
    width: 100%;
    overflow-x: none;
    overflow-y: scroll;
    .aheader {
      height: 1.3rem;
      width: 100%;
      @include flexbox();
      // background-color: #379bf2;
      background-color: #379bf2;
      .a-img {
        height: 1.3rem;
        line-height: 1.3rem;
        text-align: center;
        width: .8rem;
        img {
          height: .7rem;
          width: .7rem;
          @include border-radius(50%);
        }
      }
      .a-right {
        @include flex(1);
        line-height: 1.3rem;
        span {
          display: inline-block;
          height: .35rem;
          color: #fff;
          width: .6rem;
          border: solid 1px #fff;
          @include border-radius(4px);
          text-align: center;
          line-height: .35rem;
          margin-left: .05rem;
        }
      }
    }
    .amiddle {
      height: .7rem;
      width: 100%;
      @include flexbox();
      background-color: #fff;
      div {
        text-align: center;
        i {
          font-size: 22px;
        }
        p {
          color: #333;
        }
      }
      .am-left {
        @include flex(1);
        border-right: 1px #dedede solid;
      }
      .am-zhong {
        @include flex(1);
        border-right: 1px #dedede solid;
        i {
          color: #ff7700;
        }
      }
      .am-right {
        @include flex(1);
        i {
          color: #ff7700;
        }
      }
    }
    .a-bottom {
      width: 100%;
      background-color: #eeeeee;
      .wrap {
        width: 100%;
        padding: 0 .1rem;
        background-color: #fff;
        .item {
          height: .44rem;
          width: 100%;
          @include flexbox();
          @include border(0 0 1px 0);
          &:nth-child(1) {
            // margin-top: .1rem;
          }
          p {
            color: #676767;
            line-height: .44rem;
            &:nth-of-type(1) {
              @include flex(1);
            }
            &:nth-of-type(2) {
              @include flex(2);
              text-align: right;
            }
          }
          div {
            line-height: .44rem;
            text-align: center;
            i {
              display: inline-block;
              width: .4rem;
            }
          }
          .icon-first {
            i {
              font-size: 20px;
              color: #BD82FE;
            }
          }
          .icon-last {
            i {
              font-size: 16px;
              color: #dedede;
            }
          }
        }
      }

      .a-margin-top {
        margin-top: .1rem;
      }
      .dengji{
        .item{
          @include border(0);
          .icon-first{
            i{
              color: #f56c6c;
            }
          }
        }
      }
      .fensi{
        .item{
          .icon-first{
            i{
              color: #f56c6c;
            }
          }
        }
      }
      .kaihei{
        .item{
          .icon-first{
            i{
              color: #ffa524;
            }
          }
        }
      }
      .youxi{
        .item{
          .icon-first{
            i{
              color: #f56c6c;
            }
          }
        }
      }
      .yugou{
        .item{
          @include border(0);
          .icon-first{
            i{
              color: #ffa524;
            }
          }
        }
      }
      .zhubo{
        .item{
          .icon-first{
            i{
              color: #5fc2f5;
            }
          }
        }
      }
      .paihang{
        .item{
          @include border(0);
          .icon-first{
            i{
              color: #f68a42;
            }
          }
        }
      }
      .myvideo{
        .item{
          @include border(0);
          .icon-first{
            i{
              color: #38d5ae;
            }
          }
        }
      }
      .videoCollection{
        .item{
          @include border(0);
          .icon-first{
            i{
              color: #8c9ffd;
              font-size: 25px;
            }
          }
        }
      }
      .user{
        .item{
          @include border(0);
          .icon-first{
            i{
              color: #ff7700;
            }
          }
        }
      }
      .liuliang{
        .item{
          @include border(0);
          .icon-first{
            i{
              color: #fc802d;
              font-size: 23px;
            }
          }
        }
      }
      .guanzhu{
        .item{
          @include border(0);
          .icon-first{
            i{
              color: #fa5151;
            }
          }
        }
      }
      .kaibo{
        .item{
          .icon-first{
            i{
              color: #ffbc46;
            }
          }
        }
      }
    }
  }
}
</style>
