<template>
  <div>
    <div class="binnerimg">
      <img class="binner" src="./jsj.png" />
    </div>

    <div class="media-list">
      <div v-for="(item, idx) in videoList" class="media-item" :key="idx">
        <video
          :key="idx"
          class="media-video"
          :src="item.src"
          autoplay
          muted
          loop
          controls
          preload="metadata"
        ></video>
        <div class="description">
          <i class="el-icon-caret-right"></i>

          {{ item.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import v0 from './deee072d79333e1639c95115d7c2591c_raw.mp4'

import v1 from './df38562d89d0daba7ca385f0f4a29449.mp4'
import v2 from './2b006f188569cdd521212eed83bdf22d.mp4'
import v3 from './e75a03fa2bbea74ac1a9e720c5059f47.mp4'
import v4 from './d8851c34983f371a7a2563154c4f7762.mp4'
import v5 from './5d83bbdda1a222d44847fffbb06be444.mp4'

export default {
  data() {
    return {
      videoList: [
        {
          src: v1,
          description:
            '当复杂设计遇上传统裁剪，往往是妥协的开始。我们让这一切成为过去。自动裁剪机以其超凡的稳定性与灵活性，轻松实现精准镂空、对称正反片等高端工艺。'
        },
        {
          src: v2,
          description:
            '采用全自动拉布机，实现布卷精准铺放与对齐，自动完成铺层、换向等动作，大幅提升效率与一致性。'
        },
        {
          src: v5,
          description:
            '在精准铺放基础上，进一步强化精度控制。具备齐边功能与恒张力系统，确保每层布料平整紧密、无拉伸变形。'
        },
        {
          src: v3,
          description:
            '裁剪精度始于拉布平整。专业拉布机具备零张力控制系统，温柔对待敏感面料，从源头保障裁片形态稳定与尺寸精准。'
        },
        {
          src: v4,
          description:
            '拉布精度保障后，智能拉布机可与格柏排版系统协作，自动识别排版方案，对格对条精准断料，提升面料利用率。'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.binnerimg {
  width: 100%;
  min-height: 300px;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 20vh;
    min-height: 288px;
  }

  @media (min-width: 769px) {
    height: 50vh;
    min-height: 600px;
  }

  .binner {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.media-list {
  width: 100%;
  margin: 24px auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  box-sizing: border-box;
  padding: 0 16px;

  @media (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 0 20px;
  }
}
.media-item {
  height: fit-content;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.media-item:hover {
  transform: translateY(-6px);
  transition-duration: 1s;
  box-shadow: 0 0 16px rgb(167, 164, 164);
}
.media-video {
  width: 100%;
  display: block;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.description {
  margin-top: 10px;
  font-family: 'alimmff', sans-serif;
  background: linear-gradient(to right, #2d2e2f, #3e4465);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
}

h1 {
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
  margin: 1rem 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 0.5rem 0;
  }
}
</style>
