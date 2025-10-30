<template>
  <div class="product-section">
    <SectionTitle :title="title" :subtitle="subtitle" />
    <div class="top_media">
      <!-- 大图列表 -->
      <template v-for="(item, index) in dataList.bm">
        <div class="cetentboxb">
          <div class="imgboxb">
            <img v-if="imageMode === 'url'" :src="item.url" alt="" />
            <img
              v-else
              :src="require(`../../../assets/imgs/sucai/maozi/duan/${index + 1}.jpg`)"
              alt=""
            />
          </div>
          <div class="ten_card_body">
            <span class="ten_tagline">{{ item.desc }}</span>
            <!-- <h3>{{ item.desc }}</h3> -->
          </div>
        </div>
      </template>

      <!-- 小图列表 -->
      <template v-if="dataList.sm && dataList.sm.length > 0">
        <div v-for="(item, index) in dataList.sm" :key="'sm-' + index" class="cetentboxs">
          <div class="imgboxs">
            <img :src="require(`../../../assets/imgs/sucai/maozi/chang/${index + 1}.jpg`)" alt="" />
          </div>
          <div class="ten_card_body">
            <span class="ten_tagline">{{ item.desc + (index + 1) }}</span>
            <!-- <h3>{{ item.desc + (index + 1) }}</h3> -->
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import SectionTitle from './SectionTitle.vue'

export default {
  name: 'ProductList',
  components: {
    SectionTitle
  },
  props: {
    // 标题
    title: {
      type: String,
      required: true
    },
    // 副标题
    subtitle: {
      type: String,
      default: ''
    },
    // 数据列表
    dataList: {
      type: Object,
      required: true,
      default() {
        return { bm: [], sm: [] }
      }
    },
    // 图片模式：'url' 或 'path'
    imageMode: {
      type: String,
      default: 'url'
    }
  }
}
</script>

<style lang="scss" scoped>
.top_media {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }

  @media (min-width: 769px) {
    margin-bottom: 4rem;
  }
}
</style>
