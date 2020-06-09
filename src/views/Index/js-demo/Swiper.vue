<template>
  <div>
    <h2>轮播操作——Swiper</h2>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in imgData" :key="item.pic">
          <div class="w1 h1" :class="'pic' + index">
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: "mySwiper",
  data() {
    return {
      imgData: [{
        pic: 'swiper00.jpg'
      },{
        pic: 'swiper01.jpg'
      },{
        pic: 'swiper02.jpg'
      },{
        pic: 'swiper03.jpg'
      },{
        pic: 'swiper04.jpg'
      },{
        pic: 'swiper05.jpg'
      },{
        pic: 'swiper06.jpg'
      },{
        pic: 'swiper07.jpg'
      },{
        pic: 'swiper08.jpg'
      }]
    };
  },

  methods: {},

  mounted() {
    // const that = this;
    const mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项
      slidesPerView: 1.2,
      spaceBetween: 0,
      centeredSlides: true,

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });

    console.log(mySwiper);
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
.w1 {
  width: 100%;
}
.h1 {
  height: 100%;
}
.swiper-container {
  width: 500px;
  height: 340px;
}
.swiper-slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.9);
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
}
.pic0 {
  background-size: 100% 100%;
  background-image: url('../../../assets/swiper00.jpg');
}
.pic1 {
  background-size: 100% 100%;
  background-image: url('../../../assets/swiper01.jpg');
}
.pic2 {
  background-size: 100% 100%;
  background-image: url('../../../assets/swiper02.jpg');
}
.pic3 {
  background-size: 100% 100%;
  background-image: url('../../../assets/swiper03.jpg');
}
.pic4 {
  background-size: 100% 100%;
  background-image: url('../../../assets/swiper04.jpg');
}
.pic5 {
  background-size: 100% 100%;
  background-image: url('../../../assets/swiper05.jpg');
}
.pic6 {
  background-size: 100% 100%;
  background-image: url('../../../assets/swiper06.jpg');
}
.pic7 {
  background-size: 100% 100%;
  background-image: url('../../../assets/swiper07.jpg');
}
.pic8 {
  background-size: 100% 100%;
  background-image: url('../../../assets/swiper08.jpg');
}
</style>
