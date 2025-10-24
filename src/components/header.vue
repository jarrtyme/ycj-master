<template>
  <div class="hearder">
    <div class="left">
      <div class="tiao">
        <div class="tiao1"></div>
        <div class="tiao1"></div>
        <div class="tiao1"></div>
        <div class="tiao1"></div>
        <div class="tiao1"></div>
      </div>
      <img src="../assets/imgs/0003.png" alt="" />
    </div>
    <h2 v-if="$route.path === '/women'">{{ `speedy  and  convenient`.toUpperCase() }}</h2>
    <div class="hearderMenu">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#e88e07" text-color="#fff">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">业务</el-menu-item>
        <el-menu-item index="3">技术</el-menu-item>
        <!-- <el-menu-item index="4">服务</el-menu-item> -->
        <el-menu-item index="5">我们</el-menu-item>
      </el-menu>
      <!-- <span>电话：18021380853</span> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1'
    }
  },
  watch: {
    '$router.path'(val) {
      if (!val) return
      switch (val) {
        case '/home':
          activeIndex = '1'
          break
        case '/vocational':
          activeIndex = '2'
          break
        case '/information':
          activeIndex = '3'
          break
        case '/fuwu':
          activeIndex = '1'
          break
        case '/contact':
          activeIndex = '5'
          break
        default:
          break
      }
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      switch (+key) {
        case 1:
          this.jumpFn('/home')
          break
        case 2:
          this.jumpFn('/vocational')
          break
        case 3:
          this.jumpFn('/information')
          break
        case 4:
          this.jumpFn('/fuwu')
          break
        case 5:
          this.jumpFn('/contact')
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
  .tiao {
    left: 10px;
    bottom: 12px;
    height: 166% !important;
    .tiao1 {
      background-color: #2e2b2b;
      height: 88px;
    }
  }
  .hearderMenu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 14px;
      color: #ffffff;
    }
  }
  height: 66px;
  width: 100%;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 999999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  margin-bottom: 0 !important;
  box-shadow: 0px 1px 4px rgb(13 13 13 / 19%);
  overflow: hidden;
  img {
    height: 66px;
  }
  .el-menu-item.is-disabled {
    opacity: 1;
  }
  .el-menu-item .is-active {
    color: red;
  }
  .left {
    color: #fff;
    line-height: 61px;
    font-size: 40px;
    margin-left: 24px;
  }
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus {
    background: rgba(0, 0, 0, 0.1);
  }
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover {
    background: none !important;
  }
  .el-menu {
    font-size: 40px !important;
    color: rgb(235, 6, 6) !important;
    border: none;
    background: none;
    font-size: 24px;
    .el-menu-item:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    .el-menu-item.is-disabled {
      color: rgb(255, 255, 255) !important;
    }
  }
}
</style>
