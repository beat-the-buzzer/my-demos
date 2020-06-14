import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from '../views/Index/Index.vue'; // 首页
import myClipboard from '../views/Index/js-demo/Clipboard.vue'; // 复制的功能
import mySwiper from '../views/Index/js-demo/Swiper.vue'; // 轮播组件
import myQrcode from '../views/Index/js-demo/Qrcode.vue'; // 生成二维码的插件
import mySVG from '../views/Index/other-demo/SVG.vue'; // SVG的方式使用iconfont
import myMock from '../views/Index/other-demo/Mock.vue'; // Mock模拟数据

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
    },{
      path: '/index/my-qrcode',
      component: myQrcode,
      name: 'myQrcode'
    }, {
      path: '/index/my-SVG',
      component: mySVG,
      name: 'mySVG'
    },{
      path: '/index/my-mock',
      component: myMock,
      name: 'myMock'
    }]
  }]
});

export default router;