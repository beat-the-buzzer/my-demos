const menuConfig = [
  {
    title: 'JS Demo',
    icon: '#icon-js',
    routerArr: [
      {
        text: 'Clipboard',
        url: '/index/my-clipboard',
      }, {
        text: 'Swiper',
        url: '/index/my-swiper',
      }, {
        text: 'Qrcode',
        url: '/index/my-Qrcode',
      }, {
        text: 'Sortable',
        url: '/index/my-sortable',
      }, {
        text: 'AES',
        url: '/index/my-aes',
      }, {
        text: 'Click-ios',
        url: '/index/click-ios',
      },
    ]
  }, {
    title: 'CSS Demo',
    icon: '#icon-css',
    routerArr: [
      {
        text: 'tailwindcss',
        url: '/index/tailwindcss',
      }, {
        text: '伪类内容修改',
        url: '/index/afterContent',
      }, {
        text: '三角形',
        url: '/index/triangle',
      }
    ]
  }, {
    title: 'Vue Demo',
    icon: '#icon-vue',
    routerArr: [
      {
        text: '修饰符(上篇)',
        url: '/index/my-decorator-01',
      }, {
        text: '修饰符(下篇)',
        url: '/index/my-decorator-02',
      }
    ]
  }, {
    title: '其他',
    icon: '#icon-other',
    routerArr: [
      {
        text: 'SVG',
        url: '/index/my-svg',
      }, {
        text: 'Mock',
        url: '/index/my-mock',
      }
    ]
  },
];

export default menuConfig;