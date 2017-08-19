<template>
  <div class="allresult">
    <section>
      <div class="zhibo">
        <ul class="zhiboul">
          <router-link tag='li' :key="i" v-for="(azd,i) in allzhiboData" :to="{name: 'roomDetail', params: {id: azd.room_id}}">
            <img :src="azd.room_src" />
            <p class="room_name">{{azd.room_name}}</p>
            <span class="online">
              <i class="mintui icon-watching"></i>{{azd.online}}</span>
            <span class="guanzhu">
              <i class="mintui icon-person"></i>{{azd.fans}}</span>
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
      allzhiboData:[]
    }
  },
  mounted(){
    this.$axios({
        url: `/v1/searchNew/${this.$route.params.ques}/1?limit=20&offset=0`,
        method: 'GET'
      })
      .then(response => {
        this.allzhiboData = response.data.data.room;
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
  margin-top: .4rem;
  height: 100%;
  width: 100%;
  background: #fff;
  section {
    width: 100%;
    height: 100%;
    background: #fff;
    .zhiboul {
      width: 100%;
      @include flexbox();
      @include flex-direction(row);
      @include flex-wrap(wrap);
      background-color: #fff;
      padding-top: .1rem;
      li {
        height: 1.5rem;
        width: 50%;
        @include flexbox();
        @include flex-direction(column);
        @include align-items(center);
        position: relative;
        img {
          @include border-radius(5px);
          height: 1rem;
          width: 85%;
        }
        span {
          color: #fff;
        }
        i {
          margin-right: 5px;
          color: #fff;
        }
        .online {
          position: absolute;
          left: 20px;
          top: 0px;
        }
        .guanzhu {
          position: absolute;
          left: 20px;
          bottom: 50px;
        }
        p {
          text-align: center;
          max-width: 85%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          height: .2rem;
          opacity: 1;
          font-size: 12px;
          margin-top: .15rem;
        }
      }
    }
  }
}
</style>
