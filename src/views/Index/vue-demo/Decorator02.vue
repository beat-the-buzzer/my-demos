<template>
  <div>
    <h2>Vue修饰符</h2>
    <div class="demo1 pb30">
      <h4 class="pb30">1、 .prop</h4>
      <div class="flex">
        <!-- 绑定一个全是 attribute 的对象 -->
        <div v-bind:class="'blue mr30'">blue</div>
        <!-- 通过 prop 修饰符绑定 DOM attribute -->
        <div v-bind:innerHTML.prop="'red'" :className.prop="'red'"></div>
      </div>
    </div>

    <div class="demo2 pb30">
      <h4 class="pb30">2、 .camel</h4>
      <div class="flex">
        <svg style="width:50px; height:50px" :viewBox="viewBox">
          <circle cx="50" cy="50" r="50" fill="#fdd" stroke="none"></circle>
        </svg>
        <svg style="width:50px; height:50px" :view-box="viewBox">
          <circle cx="50" cy="50" r="50" fill="#fdd" stroke="none"></circle>
        </svg>
        <svg style="width:50px; height:50px" :view-box.camel="viewBox">
          <circle cx="50" cy="50" r="50" fill="#fdd" stroke="none"></circle>
        </svg>
      </div>
    </div>

    <div class="demo3 pb30">
      <h4 class="pb30">3、 .lazy</h4>
      <div class="">
        <input v-model="msg0" placeholder="输入即变化">
        <!-- 在“change”时而非“input”时更新 -->
        <input v-model.lazy="msg" placeholder="改变并失去焦点才变化">
      </div>
    </div>

    <div class="demo3 pb30">
      <h4 class="pb30">4、 .number</h4>
      <div class="">
        <input v-model.number="age" type="number" placeholder="请输入年龄">
      </div>
    </div>

    <div class="demo3 pb30">
      <h4 class="pb30">5、 .trim</h4>
      <div class="">
        <input v-model="name0" type="text" placeholder="请输入姓名">
        <input v-model.trim="name" type="text" placeholder="请输入姓名：trim">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "myDecorator02",
  data() {
    return {
      viewBox: '0 0 100 100',
      msg0: '',
      msg: '',
      age: '',
      name: '',
      name0: '',
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

  watch: {
    msg(val) {
      this.$message(`输入框的数据发生改变，新数据为：${val}`);
    },
    msg0(val) {
      this.$message(`输入框的数据发生改变，新数据为：${val}`);
    },
    age(val) {
      this.$message(`${typeof val}: ${val}`);
    },
    name0(val) {
      this.$message(`读取的值为：${val}，长度为${val.length}`);
    },
    name(val) {
      this.$message(`读取的值为：${val}，长度为${val.length}`);
    },
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
.mr30 {
  margin-right: 30px;
}
.flex {
  display: flex;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
