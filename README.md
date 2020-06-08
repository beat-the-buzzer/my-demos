# 开发中常用的Demo

使用`Vue-cli`和`Element-ui`把平时开发中遇到的例子写进去。

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

轮播、滑动组件：实现一个官网上没有，但是很常见的例子

```shell
npm install -S swiper
```

### reset.css

去除不同浏览器之间的差异