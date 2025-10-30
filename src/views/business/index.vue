<template>
  <div>
    <div class="banner_img">
      <div class="content">
        <div class="banner_text">专业服装与帽子裁片解决方案，格柏排版，精准省料</div>
        <div class="scissors_animation">
          <div>
            <span class="iconfont icon-line-scissorsjiandao-02"></span>
          </div>
        </div>
      </div>
      <div class="banner_layer_2 banner_layer_1"></div>
    </div>
    <div class="main_content rotateOutDownLeft">
      <ProductList
        title="加 工 区"
        subtitle="Processing Area"
        :dataList="cuttingData"
        imageMode="url"
      />
      <ProductList
        title="样 帽 展 示"
        subtitle="Sample hat display"
        :dataList="processingData"
        imageMode="path"
      />
    </div>
  </div>
</template>

<script>
import { cuttingData, processingData } from './components/mock.js'
import ProductList from './components/ProductList.vue'

export default {
  components: { ProductList },
  data() {
    return {
      cuttingData,
      processingData
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.scissors_animation {
  position: absolute;
  z-index: -1;
  top: 20px;
  animation: scissors_move 66s infinite ease-in-out alternate;
  div {
    animation: scissors_rotate 3.6s infinite ease-in-out alternate !important;
  }
  span {
    font-size: 88px;
    background: linear-gradient(to right, rgba(80, 80, 136, 0.8), rgba(156, 56, 56, 0.8));
    background: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: 768px) {
    top: 152px;

    span {
      font-size: 48px;
    }
  }
  @media (min-width: 769px) {
    top: 200px;

    span {
      font-size: 88px;
    }
  }
}

.banner_img {
  overflow: hidden;
  position: relative;
  .banner_layer_1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../../assets/imgs/bejin.jpg');
    background-size: 120%;
    background-position: center;
    background-repeat: no-repeat;
    animation: bg_anim_background 66s infinite ease-in-out alternate;
  }
  .banner_layer_2 {
    animation: banner_move_background 20s infinite ease-in-out alternate;
  }

  @media (max-width: 768px) {
    height: 20vh;
    min-height: 300px;
  }

  @media (min-width: 769px) {
    height: 50vh;
    min-height: 600px;
  }
  .content {
    width: 80vw;
    position: absolute;
    z-index: 22;
    top: 40%;
    left: 55%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    h1 {
      margin: 0 0 24px 0px;
      font-size: 188px;
      font-weight: 600;
      line-height: 188px;
      text-shadow: 0px 0px 16px rgb(163 159 159); /*添加字体文字的阴影*/
      text-align: center;
      color: rgb(255, 255, 255);
      position: absolute;

      @media (max-width: 768px) {
        width: 100%;
        font-size: 3rem;
        line-height: 1.2;
        margin: 0 0 1rem 0;
        top: 50%;
        transform: translateY(-50%);
      }

      @media (min-width: 769px) {
        width: 100%;
        font-size: 6rem;
        line-height: 1.05;
      }
    }
  }
}
.main_content {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 768px) {
    width: 100%;
    top: 20px;
  }

  @media (min-width: 769px) {
    width: 85%;
    top: 40px;
  }
}

/* 背景图片动画 - 让背景图片在固定范围内缩放和移动 */
@keyframes bg_anim_background {
  0% {
    background-size: 120%;
    background-position: center;
  }
  50% {
    background-size: 130%;
    background-position: 60% 40%;
  }
  100% {
    background-size: 120%;
    background-position: center;
  }
}

@keyframes banner_move_background {
  0% {
    background-size: 120%;
    background-position: center;
  }
  50% {
    background-size: 125%;
    background-position: 50% 30%;
  }
  100% {
    background-size: 120%;
    background-position: center;
  }
}

@media (max-width: 768px) {
  .banner_text {
    font-family: 'alimmff', sans-serif;
    font-size: 24px;
    line-height: 40px;
    color: rgba(0, 0, 0, 0.75);
    margin-bottom: 24px;
    margin-top: 24px;
    margin-left: 24px;
    margin-right: 24px;
  }
}

@media (min-width: 769px) {
  .banner_text {
    font-family: 'alimmff', sans-serif;
    font-size: 4rem;
    color: rgba(255, 255, 255, 0.758);
    margin-bottom: 24px;
    margin-top: 24px;
    margin-left: 24px;
    margin-right: 24px;
  }
}
</style>
