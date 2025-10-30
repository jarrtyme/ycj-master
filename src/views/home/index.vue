<template>
  <div class="main_container">
    <div class="banner_image">
      <div class="content">
        <h1>南通安逸裁剪中心</h1>
      </div>
      <div class="section_second">
        <img class="bg_img_1" src="../../assets/imgs/sesame-3/2- (1).png" alt="" />
        <img class="bg_img_2" src="../../assets/imgs/sesame-3/2- (2).png" alt="" />
        <img class="bg_img_3" src="../../assets/imgs/sesame-3/2- (3).png" alt="" />
        <img class="bg_img_4" src="../../assets/imgs/sesame-3/2- (4).png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.main_container {
  height: 100vh;
}
.banner_image {
  position: relative;
  height: 100vh;
  background-color: rgb(123, 170, 190) !important;

  @media (max-width: 768px) {
    height: 100vh;
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media (min-width: 769px) {
    height: 100vh;
    min-height: 100vh;
  }
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

    @media (max-width: 768px) {
      width: 10%;
      left: 70%;
      top: 50%;

      h1 {
        font-size: 3rem !important;
        line-height: 1.2;
        text-align: center;
        text-shadow: 0px 0px 20px rgb(163 159 159);
      }
    }

    @media (min-width: 769px) {
      width: 70%;
      left: 80%;
      h1 {
        font-size: 5rem !important;
        line-height: 1.05;
      }
    }
  }
}
.section_second {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #ebebeb 100% !important;
  display: flex;

  @media (max-width: 768px) {
    height: 100vh;
    min-height: 100vh;
  }

  @media (min-width: 769px) {
    height: 100vh;
    min-height: 100vh;
  }
  .bg_img_1 {
    position: absolute;
    z-index: 0;
    top: 0px;
    right: 0px;
    width: 813px;
    height: 576px;
    animation: cloud_move_1 8.8s infinite ease-in-out alternate;

    @media (max-width: 768px) {
      width: 70%;
      height: auto;
      opacity: 0.9;
    }
  }
  .bg_img_2 {
    position: absolute;
    z-index: 0;
    left: 617px;
    width: 1044px;
    height: 342px;
    animation: cloud_move_2 8.8s infinite ease-in-out alternate;

    @media (max-width: 768px) {
      left: 15%;
      width: 85%;
      height: auto;
      opacity: 0.9;
    }
  }
  .bg_img_3 {
    position: absolute;
    z-index: 0;
    top: 0px;
    left: 0px;
    width: 1371px;
    height: 790px;
    animation: cloud_move_3 8.8s infinite ease-in-out alternate;

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      opacity: 0.9;
    }
  }
  .bg_img_4 {
    position: absolute;
    z-index: 0;
    bottom: 0px;
    width: 1920px;
    height: 683px;
    animation: bg_anim 88s infinite ease-in-out alternate;

    @media (max-width: 768px) {
      height: 80vh;
      opacity: 0.9;
    }
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
  margin-bottom: 50px;
}
</style>
