<template>
  <div>
    <h2>实现三角形</h2>
    <div>我们可以通过CSS来画出各种各样的三角形。原理是一个宽高都为0的元素，可以设置不同颜色的边框。</div>
    <br>
    <div class="border-all"></div>
    <br>
    <div>通过设置border属性，我们可以得到不同指向的三角形。</div>
    <br>
    <div class="border-left"></div>
    <br>
    <div class="border-right"></div>
    <br>
    <div class="border-top"></div>
    <br>
    <div class="border-bottom"></div>
  </div>
</template>

<script>
export default {
  name: "triangle",
  data() {
    return {
      num: 1
    };
  },
  methods: {
   
  },

  mounted() {},

  computed: {
 
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.border-all {
  width: 0;
  height: 0;
  border-top: 10px solid red;
  border-bottom: 10px solid green;
  border-left: 10px solid yellow;
  border-right: 10px solid black;
}
.border-top {
  width: 0;
  height: 0;
  border-top: 10px solid red;
  border-bottom: 10px solid transparent;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}
.border-bottom {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid green;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}
.border-left {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid yellow;
  border-right: 10px solid transparent;
}
.border-right {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid transparent;
  border-right: 10px solid black;
}
</style>
