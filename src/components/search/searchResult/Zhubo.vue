<template>
  <div class="allresult">
    <section>
      <div class="zhubo">
        <ul class="zhuboul">
          <router-link tag='li' :key="i" v-for="(azd,i) in allzhuboData" :to="{name: 'roomDetail', params: {id: azd.room_id}}">
              <div>
                <img :src="azd.avatar"/>
              </div>
              <div>
                <p>{{azd.nickname}}</p>
                <p class="room_name">{{azd.room_name}}</p>
                <p><span>{{azd.fans}}</span> 人关注</p>
                <p><span>{{azd.online}}</span> 人正在观看</p>              
              </div>
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
      allzhuboData:[]
    }
  },
  mounted(){
     this.$axios({
        url: `/v1/searchNew/${this.$route.params.ques}/1?limit=20&offset=0`,
        method: 'GET'
      })
      .then(response => {
        this.allzhuboData = response.data.data.room;
      })
      .catch(err => {
        console.log(err);
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
    .zhuboul {
      width: 100%;
      // @include flexbox();
      // @include flex-direction(row);
      // @include flex-wrap(wrap);
      background: #fff;
      li {
        height: 1.6rem;
        width: 100%;
        @include flexbox();
        @include flex-direction(row);
        @include align-items(center);
        @include border(0 0 1px 0);
        div{
          &:nth-of-type(1){
            width: 1.6rem;
            text-align: center;
            img {
              @include border-radius(5px);
              height: 1.4rem;
              width: 1.4rem;
              @include border-radius(50%);
            }
          }
          &:nth-of-type(2){
            @include flex(1); 
            p {
              text-align: center;
              max-width: 85%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              height: .2rem;
              color: #551a8b;
              font-size: 12px;
              span{
                color: #f00;
              }
            }

          }
        }
      }
    }
  }
}
</style>
