<template>
  <div>
    <header>
      <img src="../assets/logo.png" alt="logo" class="header-logo">
      <ul class="header-operations">
        <li v-for="(item,index) in navData" :key="index" @click="navClick(item)">
          <span>{{item.text}}</span>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
import utils from '../common/utils';
export default {
  data() {
    return {
      navData: [{
        url: 'https://github.com/beat-the-buzzer ',
        text: 'GitHub',
      }, {
        url: 'https://beat-the-buzzer.github.io ',
        text: '博客',
      },]
    }
  },
  methods: {
    /**
     * 点击跳转
    */
    navClick(item) {
      utils.redirectPath(item.url);
    }
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
}

header {
  background: rgba(100, 100, 200, 1);
  height: 80px;
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  padding: 0 20px;
  z-index: 100;
}
.header-logo {
  display: inline-block;
  vertical-align: middle;
  height: 80px;
  transform: scale(0.8);
  transform-origin: center;
}
.header-operations {
  float: right;
  padding-right: 30px;
  height: 100%;
}
.header-operations li {
  color: #fff;
  display: inline-block;
  vertical-align: middle;
  padding:  0 10px;
  margin: 0 10px;
  line-height: 80px;
  cursor: pointer;
}
</style>