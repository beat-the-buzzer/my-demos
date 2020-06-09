<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'reset-css'; // 引入CSS重置的模块
export default {
  name: 'App',
}
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h2 {
  margin: 24px 0;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
