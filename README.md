# 开发中常用的Demo

使用`Vue-cli`和`Element-ui`把平时开发中遇到的例子写进去。

```shell
# 部署方法
git subtree push --prefix=dist origin gh-pages
```

## 新建项目

```shell
npm install -g @vue/cli # 全局安装vue-cli
vue create my-demos # 新建项目
npm install -S element-ui # 安装element-ui
npm install -S vue-router # 安装vue-router
```

> 注意： vue-cli 4.x没有直接把webpack相关的配置弄到项目中，而是使用npm script的方式，类似于create-react-app，简化了项目。但是，如果我们想要修改配置的时候，该如何去做呢？其实就相当于有一些默认配置，如果我们不使用这个默认配置的话，就自己写一些配置，写在vue.config.js里面，覆盖原来的配置。比如，我想要修改打包的资源路径，就在这个文件里面加上：

```js
module.exports = {
  //=>process.env.NODE_ENV：环境变量中存储的是开发环境还是生产环境
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
}
```

## Demo

### clipboard.js

点击复制的功能：统一处理兼容问题

```shell
npm install -S clipboard
```

### swiper.js

轮播、滑动组件：实现一个官网上没有，但是很常见的例子：

```shell
npm install -S swiper
```

### mockjs

数据模拟

```shell
npm install -S mockjs
```

可以使用这个工具来模拟数据，是我们写demo的必备工具。

### reset.css

去除不同浏览器之间的差异

```shell
npm install -S reset-css
```

直接在项目中引入就可以了：

```js
import 'reset-css'; // 引入CSS重置的模块
```

### iconfont——SVG

使用SVG的方式引入图标，首先需要在[iconfont的网站](https://www.iconfont.cn/)上把需要的图标放到一个项目里，选择symbol，下面会出现一个地址。访问这个地址，就能看到一段js，将这个js引入项目中，就可以在项目中直接使用了。

```js
import './common/iconfont'; // 引入SVG
```

### qrcode

生成二维码

```shell
npm install -S qrcode
```

### mescroll

上拉加载下拉刷新的插件

```shell
npm install -S mescroll.js
```

### sortable.js

拖动排序

```shell
npm install -S sortablejs
```

拖动排序，经常遇到的问题就是，在我们Vue或者React这样的框架中，如何让Data和页面中的DOM元素同步。

### Vue修饰符

Vue修饰符，基本上都是官网上面的Demo