<template>
  <div>
    <h2>复制操作——ClipboardJS</h2>
    <div class="flex">
      <!-- Target -->
      <input class="foo" id="foo" value="https://github.com/beat-the-buzzer" />
      <!-- Trigger -->
      <button class="btn" data-clipboard-target="#foo" data-clipboard-action="copy">
        <img src="../../../assets/clippy.svg" alt="Copy to clipboard" />
      </button>
    </div>
    <el-input class="mt30" placeholder="请粘贴内容" v-model="input" clearable></el-input>
  </div>
</template>

<script>
import ClipboardJS from "clipboard";
export default {
  name: "myClipboard",
  data() {
    return {
      input: "",
      clipboard: null,
    };
  },

  methods: {},

  mounted() {
    const that = this;
    that.clipboard = new ClipboardJS(".btn");

    that.clipboard.on("success", function(e) {
      console.info("Action:", e.action);
      console.info("Text:", e.text);
      console.info("Trigger:", e.trigger);
      e.clearSelection();
      that.$message({
        message: "复制成功！",
        type: "success"
      });
    });
    that.clipboard.on("error", function(e) {
      // 在浏览器不支持的情况下，会默认选中输入框的内容，这样只需要提示：按 Ctrl+C 复制文本 就可以达到优雅降级的效果。
      console.error("Action:", e.action);
      console.error("Trigger:", e.trigger);
      that.$message('按 Ctrl+C 复制文本');
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
}
a {
  color: #42b983;
}
.mt30 {
  margin-top: 30px; 
}
.flex {
  display: flex;
}
.foo {
  width: 250px;
  text-align: center;
}
.btn {
  position: relative;
  display: inline-block;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #333;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  background-color: #eee;
  background-image: linear-gradient(#fcfcfc, #eee);
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-appearance: none;
}
.btn img {
  width: 1em;
  height: 1em;
}
</style>
