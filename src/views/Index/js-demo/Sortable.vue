<template>
  <div>
    <h2>拖动排序——SortableJS</h2>
    <div>
      <el-button type="primary" @click="getSortedData()">点击获取排序后的数据</el-button>
      <ul class="w300" id="sortable">
        <li class="flex" v-for="item in dataList" :key="item.id">
          <div><el-checkbox v-model="item.checked"></el-checkbox> <span>{{item.text}}</span></div>
          <div class="handle">
            <i class="el-icon-s-operation"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Sortable from "sortablejs";
export default {
  name: "mySortable",
  data() {
    return {
      checked: false,
      dataList: [{
        text: '测试数据1',
        id: '1',
        checked: false,
      }, {
        text: '测试数据2',
        id: '2',
        checked: false,
      }, {
        text: '测试数据3',
        id: '3',
        checked: false,
      }, {
        text: '测试数据4',
        id: '4',
        checked: false,
      }, {
        text: '测试数据5',
        id: '5',
        checked: false,
      }, {
        text: '测试数据6',
        id: '6',
        checked: false,
      }, ]
    };
  },

  methods: {
    // 点击获取排序后的数据
    getSortedData() {
      const that = this;
      const list = that.dataList.map(value => value.id);

      that.$message(`排序后的数据是：${list.toString()}`);
    }
  },

  mounted() {
    const that = this;
    var dom = document.getElementById('sortable');
    console.log(Sortable)
    new Sortable(dom, {
      handle: '.handle', // handle's class
      animation: 150,
      onEnd: function (evt) {  //拖拽结束发生该事件
      console.log(evt);
      // 拿到oldIndex和newIndex, 手动修改位置
      // 删除了dataList的原来位置的那一项，并取出了这一项
      // 然后把这一项插入到新位置
      
      that.dataList.splice(evt.newIndex, 0, that.dataList.splice(evt.oldIndex, 1)[0]);
      that.$nextTick(function () {
        // 新建一个数组的字面量
        that.dataList = [...that.dataList];
      });
    },
    });
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
  height: 60px;
  line-height: 60px;
}
a {
  color: #42b983;
}
.mt30 {
  margin-top: 30px; 
}
.flex {
  display: flex;
  justify-content: space-between;
}
.w400 {
  width: 300px;
}

</style>
