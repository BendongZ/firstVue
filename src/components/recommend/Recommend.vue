<template>
  <div class="m-index">
    <section>
      <div class="blockSet" v-for="(list,i) in listData" :key="i">
        <h2>{{list.title}}</h2>
        <ul class="blockul">
          <router-link tag='li' :key="i" v-for="(room,i) in list.getData" :to="{name: 'roomDetail', params: {id: room.room_id}}">
            <a class="room">
              <img :src="room.room_src" />
              <div class="room-info">
                <span class="room-name">{{room.nickname}}</span>
                <span class="room-online">
                  <i class="mintui icon-users"></i> {{room.online | fixed}}</span>
              </div>
              <div class="room-title">
                <i class="mintui icon-ondemand_video"></i> {{room.room_name}}</div>
            </a>
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
      msg: 'shhss',
      listData: [
        {
          title: '最新',
          getData: []
        },
        {
          title: '正在直播',
          getData: []
        },
        {
          title: '颜值',
          getData: []
        },
        {
          title: '王者荣耀',
          getData: []
        },
        {
          title: '竞技游戏',
          getData: []
        },
        {
          title: '全民星秀',
          getData: []
        },
      ]
    }
  },
  methods: {
    getHotRoom() {
      return this.$axios({
        url: '/v1/searchNew/最热/1?limit=6&offset=0',
        method: 'GET'
      })
    },
    getLive() {
      return this.$axios({
        url: '/v1/searchNew/正在直播/1?limit=6&offset=0',
        method: 'GET'
      })
    },
    getFace() {
      return this.$axios({
        url: '/v1/searchNew/颜值/1?limit=6&offset=0',
        method: 'GET'
      })
    },
    getWZRY() {
      return this.$axios({
        url: '/v1/searchNew/王者荣耀/1?limit=6&offset=0',
        method: 'GET'
      })
    },
    getJJGame() {
      return this.$axios({
        url: '/v1/searchNew/竞技游戏/1?limit=6&offset=0',
        method: 'GET'
      })
    },
    getAllStarShow() {
      return this.$axios({
        url: '/v1/searchNew/全明星秀/1?limit=6&offset=0',
        method: 'GET'
      })
    },
  },
  mounted() {
    this.$axios.all([this.getHotRoom(), this.getLive(), this.getFace(), this.getWZRY(), this.getJJGame(), this.getAllStarShow()])
      .then(this.$axios.spread((res1, res2, res3, res4, res5, res6) => {
        this.listData[0].getData = res1.data.data.room;
        this.listData[1].getData = res2.data.data.room;
        this.listData[2].getData = res3.data.data.room;
        this.listData[3].getData = res4.data.data.room;
        this.listData[4].getData = res5.data.data.room;
        this.listData[5].getData = res6.data.data.room;
      }))
      .catch(err => console.log(err))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../../static/style/usage/app.scss';
@import '../../../static/style/usage/tabbar.scss';
.m-index {
  height: 100%;
  width: 100%;
  @include flexbox();
  @include flex-direction(column);
  overflow: scroll;
  section {
    @include flex(1);
    background: #fff;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    font-size: 12px;
    padding-bottom: .55rem;
    .blockSet {
      h2 {
        padding-left: .1rem;
        margin-top: .1rem;
        font-size: .16rem;
      }
    }
  }
}

.blockul {
  overflow: hidden;
  li {
    float: left;
    width: 50%;
    padding: .1rem;
    .room {
      position: relative;
      display: block; // margin: .1rem;
      width: 100%;
      height: 1.3rem;
      color: #333;
      img {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 1rem;
        background-color: #000;
        border-radius: .1rem;
        background: url(../../../static/images/img_loding.gif) no-repeat center center;
      }
      .room-title {
        position: absolute;
        bottom: 0;
        left: .2rem;
        width: .96rem;
        color: #3a3a3a;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: .15rem;
      }
      .room-info {
        position: absolute;
        bottom: .20rem;
        line-height: .2rem;
        left: 0;
        width: 100%;
        color: #fff;
        padding: .1rem 0;
        border-bottom-left-radius: .2rem;
        border-bottom-right-radius: .2rem;
        background: linear-gradient(top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .1) 30%, rgba(0, 0, 0, .8) 100%);
        background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .1) 30%, rgba(0, 0, 0, .8) 100%);
        background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .1) 30%, rgba(0, 0, 0, .8) 100%);
        .room-name {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          max-width: .67rem;
          display: inline-block;
          padding-left: .2rem;
        }
        .room-online {
          float: right;
          padding-right: .2rem;
        }
      }
    }
  }
}
</style>
