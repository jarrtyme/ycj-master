<template>
  <div>
    <!-- 公共头部 -->
    <transition name="zoom" mode="out-in">
      <Header v-show="$store.state.headerVisible" />
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components: { Header },
  mounted() {
    window.addEventListener('mousemove', (event) => {
      // 获取页面的高度
      var windowHeight = window.innerHeight
      // 获取鼠标在页面中的位置
      var mousePosition = event.clientY
      // 如果鼠标进入页面的一半以上位置，输出消息
      if (mousePosition > windowHeight / 2) {
        this.hideHeader()
      } else {
        this.showHeader()
      }
    })
  },
  methods: {
    showHeader() {
      this.$store.commit('showHeader')
    },
    hideHeader() {
      this.$store.commit('hideHeader')
    }
  }
}
</script>

<style lang="scss" scoped>
/** 动画进行时的class **/
.zoom-enter-active,
.zoom-leave-active {
  /* transition: all 1s cubic-bezier(0.42, 0, 0.34, 1.55); */
  transition: all 1s ease-in-out;
}

/** 设置进场开始的状态和离场结束的状态，都是缩放到0 **/
.zoom-enter,
.zoom-leave-to {
  transform: translateY(-66px);
}

/** 设置进场结束的状态和离场开始的状态, 都是缩放到1 **/
.zoom-enter-to,
.zoom-leave {
  transform: translateY(0);
}
</style>
