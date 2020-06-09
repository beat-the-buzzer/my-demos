<template>
  <div>
    <h2>SVG的方式使用iconfont——多色图标</h2>
    <div class="flex">
      <!-- Target -->
      <ul class="icon_lists dib-box">
        <li class="dib">
          <svg class="icon svg-icon" aria-hidden="true">
            <use xlink:href="#icon-react" />
          </svg>
          <div class="name">React</div>
          <div class="code-name">#icon-react</div>
        </li>

        <li class="dib">
          <svg class="icon svg-icon" aria-hidden="true">
            <use xlink:href="#icon-css" />
          </svg>
          <div class="name">css</div>
          <div class="code-name">#icon-css</div>
        </li>

        <li class="dib">
          <svg class="icon svg-icon" aria-hidden="true">
            <use xlink:href="#icon-js" />
          </svg>
          <div class="name">js</div>
          <div class="code-name">#icon-js</div>
        </li>

        <li class="dib">
          <svg class="icon svg-icon" aria-hidden="true">
            <use xlink:href="#icon-vue" />
          </svg>
          <div class="name">vue</div>
          <div class="code-name">#icon-vue</div>
        </li>

        <li class="dib">
          <svg class="icon svg-icon" aria-hidden="true">
            <use xlink:href="#icon-other" />
          </svg>
          <div class="name">other</div>
          <div class="code-name">#icon-other</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "mySVG",
  data() {
    return {};
  },

  methods: {},

  mounted() {}
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

.icon_lists {
  width: 100% !important;
  overflow: hidden;
  *zoom: 1;
}

.icon_lists li {
  width: 100px;
  margin-bottom: 10px;
  margin-right: 20px;
  text-align: center;
  list-style: none !important;
  cursor: default;
}

.icon_lists li .code-name {
  line-height: 1.2;
}

.icon_lists .icon {
  display: block;
  height: 100px;
  line-height: 100px;
  font-size: 42px;
  margin: 10px auto;
  color: #333;
  -webkit-transition: font-size 0.25s linear, width 0.25s linear;
  -moz-transition: font-size 0.25s linear, width 0.25s linear;
  transition: font-size 0.25s linear, width 0.25s linear;
}

.icon_lists .icon:hover {
  font-size: 100px;
}

.icon_lists .svg-icon {
  width: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.icon_lists li .name,
.icon_lists li .code-name {
  color: #666;
}
</style>
