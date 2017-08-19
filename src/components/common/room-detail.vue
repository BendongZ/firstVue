<template>
  <div class="roomDetail">
    <mt-header :title="title">
        <router-link to="" @click.native="back" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
    <section>
      <div class="videoDiv">
        <video src="http://192.168.23.1/c.mp4" controls="controls">
            您的浏览器不支持 video 标签。
        </video>
        <div class="host">
            <div class="ho-left">
                <span>主播：{{userInfo.owner_name}}</span>    
                <span>共<b>{{userInfo.online}}</b>人观看</span>    
            </div>
            <div class="ho-right">
                <div @click="share">
                    <span>分享</span>    
                    <i class="mintui icon-share"></i>   
                </div>
            </div>
        </div>
      </div>
      <div class="live-bar"></div>
      <div class="footerbar">
        <div :class="{active:styleSet.active0}" @click="changeTab(0)">
            聊天
        </div>
        <div :class="{active:styleSet.active1}" @click="changeTab(1)">
            主播
        </div>
        <div :class="{active:styleSet.active2}" @click="changeTab(2)">
            贡献榜
        </div>
        <div :class="{active:styleSet.active3}" @click="changeTab(3)">
            已关注
        </div>
      </div>
      <Chat :userInfo="userInfo" v-if="styleSet.active0" />
      <ZB :userInfo="userInfo"  v-if="styleSet.active1" />
      <GXB :userInfo="userInfo" v-if="styleSet.active2" />
      <YGZ :userInfo="userInfo" v-if="styleSet.active3" />
    </section>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import GXB from './gongxianbang'
import Chat from './chat'
import YGZ from './yiguanzhu'
import ZB from './zhubo'
export default {
    name: 'hello',
    components:{
        GXB,
        Chat,
        YGZ,
        ZB
    },
    data () {
        return {
            title:'',
            userInfo:'',
            styleSet:{
                active0:false,
                active1:true,
                active2:false,
                active3:false
            }
        }
    },
    methods:{
        back(){
            this.$router.goBack();
            // this.$router.go(-1);
        },
        share(){
            Toast({
                message: '该功能正在开发中...',
                position: 'middle',
                duration: 5000
            })
        },
        changeTab(index){
            switch(index){
                case 0:
                    this.styleSet={
                        active0:true,
                        active1:false,
                        active2:false,
                        active3:false
                    };break;
                case 1:
                    this.styleSet={
                        active0:false,
                        active1:true,
                        active2:false,
                        active3:false
                    };break;
                case 2:
                    this.styleSet={
                        active0:false,
                        active1:false,
                        active2:true,
                        active3:false
                    };break;
                case 3:
                    this.styleSet={
                        active0:false,
                        active1:false,
                        active2:false,
                        active3:true
                    };break;
            }
        }
    },
    mounted(){
         this.$axios({
          url: `/api/RoomApi/room/${this.$route.params.id}`,
          method: 'get'
        })
        .then(response => {
          console.log(response.data.data);
          this.userInfo = response.data.data
        //   this.fenleiData = response.data.data;
          this.title = this.userInfo.room_name;
        })
        .catch(err => console.log(err))
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../../static/style/usage/header.scss';
@import '../../../static/style/usage/tabbar.scss';
.roomDetail{
    height: 100%;
    width: 100%;
    background-color: #fff;
    @include flexbox();
    @include flex-direction(column);
    section{
        @include flex(1);
        width: 100%;
        overflow: scroll;
        .videoDiv{
            // height: 100%;
            width: 100%;
            video{
                width: 100%;
            }
            .host{
                @include flexbox();
                @include flex-direction(row);
                background-color: #fff;
                margin-top: -5px;
                .ho-left{
                    @include flex(1);
                    @include flexbox();
                    @include flex-direction(column);
                    padding-left: .1rem;
                    span{
                        b{
                            color: #fc6155;
                        }
                    }
                }
                .ho-right{
                    @include flex(1);
                    padding-right: .1rem;
                    @include flexbox();
                    @include align-items(center);
                    @include justify-content(flex-end);
                    div{
                        @include flexbox();
                        @include align-items(center);
                        span{
                            margin-right: 5px;
                        }
                    }
                }
            }
        }
        .live-bar {
            width: 100%;
            height: 10px;
            background: #dcdcdc;
            border: 1px solid #ddd;
        }
        .footerbar{
             @include flexbox();
            //  @include align-items(center);
            //  @include justify-content(flex-end);
             @include flex-direction(row);
             @include border(0 0 1px 0);
             div{
                @include flex(1);
                text-align: center;
                height: .4rem;
                line-height: .4rem;
                opacity: 0.6;
                font-size: .15rem;
                font-weight: 700;
                &.active{
                    color: #f00;
                    opacity: 1;
                    @include border(0 0 3px 0,'#f00');
                }
             }
        }
    }
}
</style>
