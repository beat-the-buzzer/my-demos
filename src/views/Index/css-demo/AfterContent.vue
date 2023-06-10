A<template>
  <div>
    <h2>伪类修改</h2>
    <div>在某些业务场景下，我们需要使用js修改伪类的样式。但是我们发现，我们没有办法通过JavaScript选择器去选中伪类元素。</div>
    <br>
    <div>例如：下面这个例子，就没有办法通过js去修改角标数字。</div>
    <br>
    <div class="small-number">数字角标</div>
    <br>
    <div>我们可以使用CSS的attr属性，将after的content值设置为data-after的属性值，这样我们就可以通过修改data-after的值来修改伪类的值了。</div>
    <br>
    <div class="small-number-change" :data-after="num">数字角标</div>
    <br>
    <el-button type="primary" @click="changeDataAfter">点击修改角标的值</el-button>

  </div>
</template>

<script>
export default {
  name: "afterContent",
  data() {
    return {
      num: 1
    };
  },
  methods: {
    changeDataAfter() {
      this.num = this.num >= 9 ? 1 : this.num + 1
    }
  },

  mounted() {},

  computed: {
 
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.small-number {
  position: relative;
}
.small-number:after {
  content: '1';
  background-color: red;
  border-radius: 50%;
  color: #fff;
  position: absolute;
  width: 14px;
  height: 14px;
  text-align: center;
  font-size: 12px;
  line-height: 1.2;
  transform: translateY(-50%);
}

.small-number-change {
  position: relative;
}
.small-number-change:after {
  content: attr(data-after);
  background-color: red;
  border-radius: 50%;
  color: #fff;
  position: absolute;
  width: 14px;
  height: 14px;
  text-align: center;
  font-size: 12px;
  line-height: 1.2;
  transform: translateY(-50%);
}
</style>
