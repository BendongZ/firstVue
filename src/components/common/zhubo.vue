<template>
  <div class="m-index">
    <section>
      <div class="zhubo">
        <div class="zb-img">
          <img :src="userInfo.avatar"/>
        </div>      
        <div class="zb-info">
          <span>主播：{{userInfo.owner_name}}</span>
          <p>体重：{{userInfo.owner_weight}}</p>
        </div>      
      </div>
      <div class="zb-detail">
        <p>直播种类：{{userInfo.cate_name}}</p>
        <p>开播时间：{{userInfo.start_time}}</p>
        <p>房间名：{{userInfo.room_name}}</p>
        <p>
          <img :src="userInfo.room_thumb"/>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: 'hello',
    props:{
      userInfo:''
    },
    data () {
      return {
        msg:'shhss'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../../static/style/usage/app.scss';
.m-index{
  width: 100%;
  background-color: #fff;
    section{
         width: 100%;
         .zhubo{
            @include flexbox();
            @include flex-direction(row);
            padding: .1rem 0;
            .zb-img{
              padding-left: .1rem;
              width: 1rem;
              height: 1rem;
              line-height: 1rem;
              img{
                width: 100%;
                @include border-radius(50%);
              }
            }
            .zb-info{
              @include flex(1);
              padding-right: .1rem;
              padding-left: .2rem;
              @include flexbox();
              @include flex-direction(column);
              @include justify-content(center);
            }
         }
         .zb-detail{
           padding: .1rem;
         }
    }
}
</style>
