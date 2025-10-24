<template>
  <div class="hearder">
    <div class="left"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      switch (+key) {
        case 1:
          console.log(111)
          this.jumpFn('/shouye')
          break
        case 2:
          this.jumpFn('/fangan')
          break
        case 3:
          this.jumpFn('/zixun')
          break
        case 4:
          this.jumpFn('/fuwu')
          break
        case 5:
          this.jumpFn('/women')
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hearder {
  width: 100%;
  height: 188px;
  position: relative;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1030;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.6);
  margin-bottom: 0 !important;
  box-shadow: 0px 1px 4px rgb(13 13 13 / 19%);
  overflow: hidden;
  .left {
    color: #fff;
    line-height: 61px;
    font-size: 40px;
    margin-left: 24px;
  }
}
</style>
