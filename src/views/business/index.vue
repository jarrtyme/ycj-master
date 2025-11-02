<template>
  <div>
    <div class="banner_img">
      <div class="content">
        <div class="scissors_animation">
          <div>
            <span class="iconfont el-icon-scissors"></span>
          </div>
        </div>
      </div>
      <div class="banner_layer_2 banner_layer_1"></div>
    </div>

    <div class="main_content rotateOutDownLeft">
      <ProductList
        title="智能排版 极致省料"
        subtitle="运用格柏顶级排版软件，智能优化路径，实现布料利用率最大化，直接为您降低核心物料成本"
        :dataList="cuttingData"
        imageMode="url"
      />
      <ProductList
        title="全能工艺 无所不裁"
        subtitle="我们深耕服装与帽子领域，深刻理解版型与工艺，能为您提供更具专业价值的裁剪建议"
        :dataList="processingData"
        imageMode="path"
      />
      <ProductList
        title="精准高效，稳定交付"
        subtitle="全自动设备确保毫米级精度与超高层裁剪效率，裁片边缘光滑整齐，品质稳定，交期迅捷"
        :dataList="processingData2"
        imageMode="path"
      />
    </div>
  </div>
</template>

<script>
import { cuttingData, processingData, processingData2 } from './components/mock.js'
import ProductList from './components/ProductList.vue'

export default {
  components: { ProductList },
  data() {
    return {
      cuttingData,
      processingData2,
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
    top: 50px;

    span {
      font-size: 48px;
    }
  }
  @media (min-width: 769px) {
    top: 100px;

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
    background-image: url('../../assets/imgs/233.png');
    background-repeat: no-repeat;

  }
  .banner_layer_2 {
    animation: banner_move_background 60s infinite ease-in-out alternate;
  }

  @media (max-width: 768px) {
    height: 20vh;
    min-height: 288px;
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
    background-image: linear-gradient(-225deg, #3d4e81 0%, #5753c9 48%, #6e7ff3 100%);

    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

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
    background-image: linear-gradient(-225deg, #3d4e81 0%, #5753c9 48%, #6e7ff3 100%);

    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 24px;
    margin-top: 24px;
    margin-left: 24px;
    margin-right: 24px;
  }
}
</style>
