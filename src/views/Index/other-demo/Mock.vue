<template>
  <div>
    <h2>Mock</h2>
    <div class="demo1">
      <input type="text" readonly class="foo" v-model="url1" />
      <el-button type="primary" plain @click="post1()">点击发送请求</el-button>
      <span class="result">返回的数据是：{{data1}}</span>
    </div>
    
    <div class="demo2">
      <input type="text" readonly class="foo" v-model="url2" />
      <el-button type="primary" plain @click="post2()">点击发送请求</el-button>
      <template>
        <el-table
          :data="data2"
          style="width: 100%">
          <el-table-column
            prop="nickname"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="score"
            label="分数"
            width="180">
          </el-table-column>
          <el-table-column
            prop="mtime"
            label="日期">
          </el-table-column>
        </el-table>
      </template>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
import '../../../mock/mock01';
export default {
  name: "mySVG",
  data() {
    return {
      url1: '/api/mock01/api01',
      data1: '',

      url2: '/api/mock01/api02',
      data2: [],
    };
  },

  methods: {

    post1() {
      var that = this;
      var url = that.url1;
      axios.get(url).then(function (response) {
          if(response.data.success) {
            var data = response.data.message;
            that.data1 = JSON.stringify(data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    post2() {
      var that = this;
      var url = that.url2;
      axios.get(url).then(function (response) {
          if(response.data.success) {
            var data = response.data.message;
            that.data2 = data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    init() {
    },
  },

  mounted() {
    this.init();
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
}
.result {
  margin-top: 30px;
  margin-left: 10px;
}
.demo1 {
  margin: 20px 0;
}

</style>
