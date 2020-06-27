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
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-js"></use>
          </svg>
          <span slot="title" class="pl16">JS Demo</span>
        </template>
        <el-menu-item-group title="" class="pl16">
          <el-menu-item index="/index/my-clipboard">Clipboard</el-menu-item>
          <el-menu-item index="/index/my-swiper">Swiper</el-menu-item>
          <el-menu-item index="/index/my-qrcode">Qrcode</el-menu-item>
          <el-menu-item index="/index/my-sortable">Sortable</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-css"></use>
          </svg>
          <span slot="title" class="pl16">CSS Demo</span>
        </template>
        <el-menu-item-group title="" class="pl16">
          <el-menu-item index="/index">待定</el-menu-item>
          <el-menu-item index="/index">待定</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
  
      <el-submenu index="3">
        <template slot="title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <span slot="title" class="pl16">Vue Demo</span>
        </template>
        <el-menu-item-group title="" class="pl16">
          <el-menu-item index="/index/my-decorator-01">修饰符（上篇）</el-menu-item>
          <el-menu-item index="/index">待定</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-other"></use>
          </svg>
          <span slot="title" class="pl16">其他</span>
        </template>
        <el-menu-item-group title="" class="pl16">
          <el-menu-item index="/index/my-svg">SVG</el-menu-item>
          <el-menu-item index="/index/my-mock">Mock</el-menu-item>
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
.pl16 {
  padding-left: 16px;
}
</style>