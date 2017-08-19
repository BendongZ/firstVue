import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        fenleiId: '',
        fenleiTitle: '',
        indexTitle: '主页',
        searchList:{
            active0:true,
            active1:false,
            active2:false,
        },
        launch:true
    },
    mutations: {
        fenleiId(state, payload) {
            state.fenleiId = payload.id;
            state.fenleiTitle = payload.title;
        },
        changeTitle(state, payload) {
            state.indexTitle = payload.title;
        },
        changeListStatus(state,payload){
            state.searchList['active0'] = payload.active0;
            state.searchList['active1'] = payload.active1;
            state.searchList['active2'] = payload.active2;
        },
        changeLaunch(state, payload) {
            state.launch = payload.launch;
        }
    }
})

export default store