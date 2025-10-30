<template>
  <div class="button">
    <div class="button__wrapper">
      <span class="button__text">{{ text }}</span>
    </div>
    <div class="birdBox">
      <div class="bird wakeup">
        <div class="bird__face"></div>
      </div>
      <div class="bird wakeup">
        <div class="bird__face"></div>
      </div>
      <div class="bird">
        <div class="bird__face"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BirdButton',
  props: {
    text: {
      type: String,
      default: '我们在这'
    }
  }
}
</script>

<style scoped>
/* 使用全局 reset.scss 中的样式，这里无需重复定义 */
</style>
