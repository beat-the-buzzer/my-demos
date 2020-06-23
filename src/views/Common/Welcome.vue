<template>
  <section>
    <div class="top-img">
      <div class="img-welcome"></div>
      <div>
         <p style="font-size: 24px; line-height: 70px">学习从这里开始！</p>
          <p style="font-size: 14px; line-height: 20px">
            您可以进入
            <el-link type="primary" href="#/index">网站首页</el-link>
          </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {};
  },

  methods: {},

  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

section {
  text-align: center;
  display: flex;
  justify-content: center;
}
.img-welcome {
    width: 520px;
    height: 320px;
    background-size: 100% 100%;
    background-image: url('../../assets/welcome.jpg');
}
</style>
