import Account from '@/components/account/Account'
import AllResult from '@/components/search/searchResult/AllResult'
import FenDetail from '@/components/fenlei/Fen-detail'
import Fenlei from '@/components/fenlei/Fenlei'
import Home from '@/components/home/Home'
import Index from '@/components/index'
import Recommend from '@/components/recommend/Recommend'
import RoomDetail from '@/components/common/room-detail'
import Router from 'vue-router'
import Search from '@/components/search/Search'
import SearchList from '@/components/search/SearchList'
import Splash from '@/components/splash/Splash'
import Vue from 'vue'
import Zhibo from '@/components/search/searchResult/Zhibo'
import Zhubo from '@/components/search/searchResult/Zhubo'
import NickLogin from '@/components/login/nicklogin'
import MobileLogin from '@/components/login/mobilelogin'
import Register from '@/components/register/Register'
import store from '../store/store';

Router.prototype.goBack = function() {
  this.isBack = true
  window.history.go(-1)
}
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/splash',
      name: 'splash',
      component: Splash
    }, {
      path: '/',
      name: 'index',
      component: Index,
      // redirect:'/home',
      meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        }, {
          path: '/search',
          name: 'search',
          component: Search
        }, {
          path: '/fenlei',
          name: 'fenlei',
          component: Fenlei
        }, {
          path: '/recommend',
          name: 'recommend',
          component: Recommend
        }
      ]
    }, {
      path: '/fenlei/fendetail',
      name: 'fendetail',
      component: FenDetail
    }, {
      path: '/account',
      name: 'account',
      component: Account
    }, {
      path: '/nicklogin',
      name: 'nicklogin',
      component: NickLogin
    }, {
      path: '/mobilelogin',
      name: 'mobilelogin',
      component: MobileLogin
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/ss/ff/room/:id',
      name: 'roomDetail',
      component: RoomDetail
    }, {
      path: '/searchList/:ques',
      name: 'searchList',
      component: SearchList,
      children: [
        {
          path: '/searchList/:ques',
          name: 'allresult',
          //  redirect:'/searchList/:ques/allresult',
          component: AllResult
        }, {
          path: '/searchList/:ques/zhibo',
          name: 'zhibo',
          component: Zhibo
        }, {
          path: '/searchList/:ques/zhubo',
          name: 'zhubo',
          component: Zhubo
        }

      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(to.meta.requireAuth);
  console.log(to.matched.some(record => record.meta.requiresAuth));

  if (to.meta.requireAuth) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    console.log('shijiename ');
    if (store.state.launch) {
      next({
        path: '/splash',
        // query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    console.log('nameda ');
    next() // 确保一定要调用 next()
  }
})

export default router
