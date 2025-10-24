<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {}
}
</script>

<style lang="scss">
@import '@/assets/css/reset.scss';
@import '@/assets/css/transition.scss';
@import '@/assets/css/donghua.scss';
@import '@/assets/css/responsive.scss';
#app {
  user-select: none;
  overflow: hidden;
  background-color: #fbfbfb;
  /* letter-spacing: 2px;
  background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.05) 3%, transparent 0), linear-gradient(1turn, rgba(50, 0, 0, 0.05) 3%, transparent 0);
  background-size: 20px 20px;
  background-position: 50%;
  word-break: break-word; */
}
@font-face {
  font-family: 'alimm';
  font-weight: 400;
  src: url('./assets/font/Alimama_DongFangDaKai_Regular.woff2') format('woff2'), url('./assets/font/Alimama_DongFangDaKai_Regular.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'alimmff';
  font-weight: 400;
  src: url('./assets/font/Alimama_ShuHeiTi_Bold.woff2') format('woff2'), url('./assets/font/Alimama_ShuHeiTi_Bold.woff') format('woff');
  font-display: swap;
}
</style>
