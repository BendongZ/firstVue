<template>
  <div class="m-index">
    <section>
      <div class="ygz">
        <p>该主播的粉丝有很多哦</p>
        <p><img :src="userInfo.avatar"/></p>
        <p><b>{{userInfo.fans_num}}</b>人</p>
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
        .ygz{
            @include flexbox();
            @include flex-direction(column);
            @include align-items(center);
            padding-top:.3rem;
            p{
              b{
                color: #f00;
              }
            }
        }
    }
}
</style>
