<template>
  <div>
    <h2>Qrcode——生成二维码</h2>
    <div class="">
      <input type="text" readonly class="foo" v-model="url" />
      <el-button type="primary" plain @click="getQrcode(url)">点击生成二维码</el-button>
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import QRCode from 'qrcode';
export default {
  name: "myQrcode",
  data() {
    return {
      url: 'https://beat-the-buzzer.github.io/',
    };
  },

  methods: {

    getQrcode(url) {
      var canvas = document.getElementById('canvas')
      var newURL = url + '?time=' + (new Date().getTime()); // 带上时间戳 每次生成的二维码都不一样
 
      QRCode.toCanvas(canvas, newURL, function (error) {
        if (error) console.error(error)
        console.log('success!');
      })
    },

  },

  mounted() {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.foo {
  height: 40px;
  margin-right: 10px;
  width: 250px;
}
</style>
