<template>
  <div>
    <h2>Vue修饰符</h2>
    <div class="demo1 pb30">
      <h4 class="pb30">1、 .stop</h4>
      <div class="flex">
        <div class="bg-bg" @click="showMsg('父元素触发')">
          <el-button type="primary" @click="showMsg('子元素触发')">未阻止冒泡</el-button>
        </div>
        <div class="bg-bg ml30" @click="showMsg('父元素触发')">
          <el-button type="primary" @click.stop="showMsg('子元素触发')">阻止冒泡</el-button>
        </div>
      </div>
    </div>

    <div class="demo2 pb30">
      <h4 class="pb30">2、 .prevent</h4>
      <div class="flex">
        <a href="https://github.com/beat-the-buzzer/" target="blank" @click="showMsg('未阻止默认')">未阻止默认</a>
        <a class="ml30" href="https://github.com/beat-the-buzzer/" @click.prevent="showMsg('阻止默认')">阻止默认</a>
      </div>
    </div>

    <div class="demo3 pb30">
      <h4 class="pb30">3、 .capture</h4>
      <div class="flex">
        <div class="bg-bg" @click="showMsg('父元素触发')">
          <el-button type="primary" @click="showMsg('子元素触发')">子元素先触发</el-button>
        </div>
        <div class="bg-bg ml30" @click.capture="showMsg('父元素触发')">
          <el-button type="primary" @click="showMsg('子元素触发')">父元素先触发</el-button>
        </div>
      </div>
    </div>

    <div class="demo4 pb30">
      <h4 class="pb30">4、 .self</h4>
      <div class="flex">
        <div class="bg-bg" @click="showMsg('父元素触发')">
          <el-button type="primary" @click="showMsg('子元素触发')">触发两次</el-button>
        </div>
        <div class="bg-bg ml30" @click.self="showMsg('父元素触发')">
          <el-button class="ml30" type="primary" @click="showMsg('子元素触发')">父元素只触发父元素上面的点击</el-button>
        </div>
      </div>
    </div>

    <div class="demo5 pb30">
      <h4 class="pb30">5、 {keyCode | keyAlias}</h4>
      <input type="text" placeholder="enter键测试" @keyup.enter="showMsg('Enter被按下')">
      <input type="text" placeholder="enter键测试" @keyup.13="showMsg('Enter(编码是13)被按下')">
      <input type="text" placeholder="系统ctrl键测试" @keyup.ctrl="showMsg('系统键单独使用无效')">
      <input type="text" placeholder="ctrl+c测试" @keyup.ctrl.67="showMsg('ctrl + c')">
    </div>

    <div class="demo6 pb30">
      <h4 class="pb30">6、 .native</h4>
      <div class="flex">
        <NotFound404 @click="showMsg('无法触发')"></NotFound404>
        <NotFound404 @click.native="showMsg('触发组件的点击事件')"></NotFound404>
      </div>
    </div>

    <div class="demo7 pb30">
      <h4 class="pb30">7、 .once</h4>
      <div class="flex">
        <el-button type="primary" @click="showMsg('可以多次点击触发')">可以多次点击触发</el-button>
        <el-button type="primary" @click.once="showMsg('只触发一次')">只触发一次</el-button>
      </div>
    </div>

    <div class="demo8 pb30">
      <h4 class="pb30">8、 .left .middle .right</h4>
      <div class="flex">
        <el-button type="primary" @click.left="showMsg('左键点击触发')">左键点击触发</el-button>
        <el-button type="primary" @click.right="showMsg('右键点击触发')">右键点击触发</el-button>
        <el-button type="primary" @click.middle="showMsg('滚轮点击触发')">滚轮点击触发</el-button>
      </div>
    </div>

  </div>
</template>

<script>
import NotFound404 from '../../Common/Notfound404';
export default {
  name: "myDecorator01",
  data() {
    return {

    };
  },

  methods: {
    showMsg(msg){
       this.$message(msg);
    },
    init() {
    },
  },

  mounted() {
    this.init();
  },

  components: {
    NotFound404: NotFound404
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
.bg-bg {
  background: #CCC;
}
.pb30 {
  padding-bottom: 30px;
}
.ml30 {
  margin-left: 30px;
}
.flex {
  display: flex;
}
</style>
