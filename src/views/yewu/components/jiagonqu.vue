<template>
  <div>
    <div class="lianxi">
      <h1>样 帽 展 示</h1>
      <i></i>
      <h2>Sample hat display</h2>
    </div>
    <div class="top_media">
      <template v-for="(i, index) in list.bm">
        <div class="cetentboxb">
          <div class="imgboxb">
            <img :src="require(`../../../assets/imgs/sucai/maozi/duan/${index + 1}.jpg`)" alt="" />
          </div>
          <div class="ten_card_body">
            <span class="ten_tagline">{{ i.desc + (index + 1) }}</span>
            <h3>{{ i.desc + (index + 1) }}</h3>
          </div>
        </div>
      </template>

      <template v-for="(i, index) in list.sm">
        <div class="cetentboxs">
          <div class="imgboxs">
            <img :src="require(`../../../assets/imgs/sucai/maozi/chang/${index + 1}.jpg`)" alt="" />
          </div>
          <div class="ten_card_body">
            <span class="ten_tagline">{{ i.desc + (index + 1) }}</span>
            <h3>{{ i.desc + (index + 1) }}</h3>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { aaa } from './mock.js'
export default {
  data() {
    return {
      list: aaa
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.lianxi {
  font-family: 'alimmff', sans-serif;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 24px;
  h1 {
    color: rgba(0, 0, 0, 0.85);
    font-size: 24px;
    line-height: 30px;
    text-align: center;
  }
  i {
    width: 120px;
    display: block;
    height: 2px;
    margin: 10px auto;
    background: #0463b5;
  }
  h2 {
    color: rgba(0, 0, 0, 0.5);
    line-height: 20px;
    font-size: 20px;
    margin: 0;
    text-align: center;
  }
}
.top_media {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;
}
</style>
