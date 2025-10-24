<template>
  <div class="bigcontent">
    <!-- <div class="goood" @mouseenter="aaafn" @mouseleave="aaafn1"></div> -->
    <div class="goood"></div>
    <div class="binnerimg">
      <div class="content">
        <h1>南通安逸裁剪中心</h1>
      </div>
      <div class="section_first2">
        <img class="bmg1" src="../../assets/imgs/sesame-3/2- (1).png" alt="" />
        <img class="bmg2" src="../../assets/imgs/sesame-3/2- (2).png" alt="" />
        <img class="bmg3" src="../../assets/imgs/sesame-3/2- (3).png" alt="" />
        <img class="bmg4" src="../../assets/imgs/sesame-3/2- (4).png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    aaafn() {
      console.log(1)
      this.$store.commit('aaafn')
    },
    aaafn1() {
      console.log(2)
      this.$store.commit('aaafn1')
    }
  }
}
</script>

<style lang="scss" scoped>
.goood {
  background-color: transparent;
  position: absolute;
  height: 50vh;
  width: 100vw;
  z-index: 8888;
}
.bigcontent {
  height: 100vh;
}
.binnerimg {
  position: relative;
  height: 100vh;
  background-color: rgb(123, 170, 190) !important;
  .content {
    font-family: 'alimmff';
    text-shadow: 0px 0px 18px rgb(163 159 159); /*添加字体文字的阴影*/
    width: 888px;
    position: absolute;
    z-index: 99999;
    top: 50%;
    left: 66%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: flex-end;
    h1 {
      user-select: none;
      font-size: 88px;
      font-weight: 888;
      color: rgb(255, 255, 255);
    }
  }
}
.section_first2 {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #ebebeb 100% !important;
  display: flex;
  .bmg1 {
    position: absolute;
    z-index: 0;
    top: 0px;
    right: 0px;
    width: 813px;
    height: 576px;
    animation: yunduo1 8.8s infinite ease-in-out alternate;
  }
  .bmg2 {
    position: absolute;
    z-index: 0;
    left: 617px;
    width: 1044px;
    height: 342px;
    animation: yunduo 8.8s infinite ease-in-out alternate;
  }
  .bmg3 {
    position: absolute;
    z-index: 0;
    top: 0px;
    left: 0px;
    width: 1371px;
    height: 790px;
    animation: yunduo1 8.8s infinite ease-in-out alternate;
  }
  .bmg4 {
    position: absolute;
    z-index: 0;
    bottom: 0px;
    width: 1920px;
    height: 683px;
    animation: bgAnim 88s infinite ease-in-out alternate;
  }
  .title1 {
    position: absolute;
    z-index: 3;
    top: 423px;
    left: 843px;
    font-size: 6px;
    font-weight: bold;
    color: #111111;
    margin-bottom: 39px;
  }
  .text1 {
    position: absolute;
    z-index: 3;
    top: 52px;
    left: 608px;
    width: 708px;
    height: 76px;
    font-size: 16px;
    font-weight: 300;
    color: #111111;
    opacity: 0.7;
    line-height: 3px;
    word-spacing: 0;
    text-align: center;
  }
  .button2 {
    background-size: 100% 100%;
    position: absolute;
    z-index: 999;
    top: 66px;
    left: 916px;
    width: 103px;
    height: 103px;
  }
}
.binner {
  display: block;
  height: auto;
  margin: 0 auto;
  width: 1915px;
  margin-bottom: 50px;
}
</style>
