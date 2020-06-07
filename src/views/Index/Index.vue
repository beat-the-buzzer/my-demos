<template>
  <div class="index">
    <myHeader></myHeader>
    <el-col :span="24" class="main">
      <el-row>
        <myMenu></myMenu>
        <section class="">
          <el-col class="main-area" :span="21">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </el-col>
        </section>
      </el-row>
    </el-col>
    <!-- <myMenu></myMenu> -->
  </div>
</template>

<script>
import header from '../../components/Header.vue';
import menu from '../../components/Menu.vue';
export default {
  name: 'Index',
  components: {
    myHeader: header,
    myMenu: menu,
  }
}
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
.main {
  padding-top: 80px;
}
section {
  padding-left: 200px;
}
.main-area {
  padding: 20px;
}
</style>
