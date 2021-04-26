<template>
  <div>
    <h2>iOS上的点击事件</h2>
    <div class="flex">
      <!-- Trigger -->
      <div @click="dealClick('Vue自带的事件委托的处理')">Vue自带的事件委托的处理</div>
      <div class="test" id="test">div元素绑定的点击事件</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "clickIOS",
  data() {
    return {
    };
  },

  methods: {
    dealClick(txt) {
      this.$message(txt)
    }
  },

  mounted() {
    document.getElementById('test').addEventListener('click', () => {
      this.dealClick('div元素绑定的点击事件')
    })
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
.mt30 {
  margin-top: 30px; 
}
.flex {
  display: flex;
}
.foo {
  width: 250px;
  text-align: center;
}
.btn {
  position: relative;
  display: inline-block;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #333;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  background-color: #eee;
  background-image: linear-gradient(#fcfcfc, #eee);
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-appearance: none;
}
.btn img {
  width: 1em;
  height: 1em;
}
</style>
