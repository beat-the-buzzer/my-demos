<template>
  <div class="menu">
 
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :router="true"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">JS插件</span>
        </template>
        <el-menu-item-group title="">
          <el-menu-item index="/index/my-clipboard">Clipboard</el-menu-item>
          <el-menu-item index="/index/my-swiper">Swiper</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">CSS Demo</span>
        </template>
        <el-menu-item-group title="">
          <el-menu-item index="/index">待定</el-menu-item>
          <el-menu-item index="/index">待定</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
  
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">Vue Demo</span>
        </template>
        <el-menu-item-group title="">
          <el-menu-item index="/index">待定</el-menu-item>
          <el-menu-item index="/index">待定</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import utils from "../common/utils";
export default {
  data() {
      return {
        isCollapse: false,
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(utils);
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>

<style>
.menu {
  width: 200px;
  position: absolute;
}
</style>