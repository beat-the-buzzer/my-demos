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
      <el-submenu :index="String(index)" v-for="(item, index) in menuConfig" :key="item.title">
        <template slot="title">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.icon"></use>
          </svg>
          <span slot="title" class="pl16">{{item.title}}</span>
        </template>
        <el-menu-item-group title="" class="pl16">
          <el-menu-item v-for="i in item.routerArr" :key="i.text" :index="i.url">{{ i.text }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
// import utils from "../common/utils";
import menuConfig from "./config";

export default {
  data() {
      return {
        isCollapse: false,
        menuConfig: menuConfig,
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted() {
      
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