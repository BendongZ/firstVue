<template>
    <div class="detail">
        <mt-header :title="title">
            <router-link to="" @click.native="back" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <section>
            <div  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <div class="listData" @click="gotoRoom(ld.room_id)" v-for="(ld,i) in listData" :key="i">
                <img :src="ld.room_src" />
                <div class="column">
                    <p class="rtitle">{{ld.room_name}}</p>
                    <p class="up">
                        <i class="mintui icon-user"></i> {{ld.nickname}}</p>
                    <p class="prev">
                        <i class="mintui icon-users"></i> {{ld.online | fixed}}</p>
                </div>
            </div>
            </div>
            <Loading v-if="loadingChar"></Loading>
        </section>
    </div>
</template>

<script>
import Vue from 'vue';
import Loading from '../common/loading';
import { Header, InfiniteScroll,Toast } from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.component(Header.name, Header);
Vue.use(InfiniteScroll);
export default {
    name: 'hello',
    components: {
        Loading
    },
    data() {
        return {
            title: this.$store.state.fenleiTitle,
            listData: [],
            pageNo: 0,
            pageSize: 20,
            loading: false,
            loadingChar:false
        }
    },
    methods: {
        back(){
            this.$router.goBack();
        },
        getData(id, limit = 20, offset = 0) {
            this.$axios({
                url: `/api/RoomApi/live/${id}?limit=${limit}&${offset}`,
                method: 'get'
            })
                .then(response => {
                    this.listData = response.data.data;
                })
                .catch(err => console.log(err))
        },
        gotoRoom(id) {
            console.log(id);
            this.$router.push({ name: 'roomDetail', params: { id: id } });
        },
        loadMore() {
            this.loading = true;
            this.loadingChar = true;
            this.pageNo++;
            console.log(this.pageNo);
            setTimeout(() => {
                this.$axios({
                    url: `/api/RoomApi/live/${this.$store.state.fenleiId}?limit=${this.pageSize}&offset=${this.pageNo * this.pageSize}`,
                    method: 'get'
                })
                    .then(response => {
                        if(response.data.data.length === 0){
                            Toast({
                                message: '没有更多数据了',
                                position: 'middle',
                                duration: 3000
                            })
                            this.loading = true;
                        }else{
                            this.listData = this.listData.concat(response.data.data);
                            this.loading = false;
                        }
                        this.loadingChar = false;
                    })
                    .catch(err => console.log(err))

            }, 2500);
        }
    },
    // beforeRouteEnter (to, from, next) {
    //     this.getData(this.$route.params.cate_id)
    //     next()
    // },
    mounted() {
        this.getData(this.$store.state.fenleiId)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../../static/style/usage/header.scss';
@import '../../../static/style/usage/tabbar.scss';
.detail {
    height: 100%;
    width: 100%;
    @include flexbox();
    @include flex-direction(column);
    section {
        @include flex(1);
        width: 100%;
        position: relative;
        overflow: scroll;
        .listData {
            cursor: pointer;
            position: relative;
            min-height: .8rem;
            margin: 0.1rem 0;
            @include flexbox();
            @include flex-direction(row);
            @include align-items(center);
            @include justify-content(center);
            @include border(0 0 1px 0);
            img {
                width: 1rem;
                height: .65rem;
                margin-left: .1rem;
            }
            .column {
                font-size: 12.5px;
                line-height: .24rem;
                margin-left: 0.267rem;
                margin-right: .1rem;
                -webkit-flex: 1;
                @include flex(1);
                .rtitle {
                    margin-bottom: 0px;
                }
                .up,
                .prev {
                    color: #7E7E7E;
                    margin-top: 0px;
                }
            }
        }
    }
}
</style>
