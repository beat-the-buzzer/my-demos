import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from '../views/Index/Index.vue'; // 首页
import myClipboard from '../views/Index/components/Clipboard.vue'; // 复制的功能
import mySwiper from '../views/Index/components/Swiper.vue'; // 轮播组件

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    redirect: 'index'
  }, {
    path: '/index',
    component: Index,
    children: [{
      path: '/index/my-clipboard',
      component: myClipboard,
      name: 'myClipboard'
    }, {
      path: '/index/my-swiper',
      component: mySwiper,
      name: 'mySwiper'
    }]
  }]
});

export default router;