import Vue from 'vue';
import VueRouter from 'vue-router';

import my404 from '../views/Common/Notfound404.vue'; // 404页面
import myWelcome from '../views/Common/Welcome.vue'; // 欢迎页

import Index from '../views/Index/Index.vue'; // 首页
import myClipboard from '../views/Index/js-demo/Clipboard.vue'; // 复制的功能
import mySwiper from '../views/Index/js-demo/Swiper.vue'; // 轮播组件
import myQrcode from '../views/Index/js-demo/Qrcode.vue'; // 生成二维码的插件
import mySVG from '../views/Index/other-demo/SVG.vue'; // SVG的方式使用iconfont
import myMock from '../views/Index/other-demo/Mock.vue'; // Mock模拟数据
import mySortable from '../views/Index/js-demo/Sortable.vue'; // 拖动排序
import myDecorator01 from '../views/Index/vue-demo/Decorator01.vue'; // Vue修饰符
import myDecorator02 from '../views/Index/vue-demo/Decorator02.vue'; // Vue修饰符

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
    component: myWelcome,
    name: 'myWelcome'
  }, {
    path: '/index',
    component: Index,
    children: [{
      path: '/index',
      redirect: '/index/my-clipboard',
    }, {
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
      path: '/index/my-sortable',
      component: mySortable,
      name: 'mySortable'
    }, {
      path: '/index/my-SVG',
      component: mySVG,
      name: 'mySVG'
    }, {
      path: '/index/my-mock',
      component: myMock,
      name: 'myMock'
    }, {
      path: '/index/my-decorator-01',
      component: myDecorator01,
      name: 'myDecorator01'
    }, {
      path: '/index/my-decorator-02',
      component: myDecorator02,
      name: 'myDecorator02'
    }
  ]
  }, {
    path: '*',
    component: my404,
    name: 'my404'
  }]
});

export default router;