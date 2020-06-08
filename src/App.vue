<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import 'reset-css';
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
</style>
