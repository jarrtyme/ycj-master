<template>
  <div class="header_container">
    <div class="left_section">
      <img src="../assets/imgs/popo.png" alt="" />
    </div>

    <!-- 桌面端菜单 -->
    <div class="header_menu desktop_menu">
      <div class="nav_menu">
        <div class="nav_item" :class="{ active: activeIndex === '1' }" @click="handleSelect(1)">
          首页
        </div>
        <div class="nav_item" :class="{ active: activeIndex === '4' }" @click="handleSelect(4)">
          裁艺现场
        </div>
        <div class="nav_item" :class="{ active: activeIndex === '2' }" @click="handleSelect(2)">
          核心优势
        </div>
        <div class="nav_item" :class="{ active: activeIndex === '3' }" @click="handleSelect(3)">
          科技赋能
        </div>

        <div class="nav_item" :class="{ active: activeIndex === '5' }" @click="handleSelect(5)">
          联系我们
        </div>
      </div>
    </div>

    <!-- 移动端汉堡菜单 -->
    <div class="hamburger_menu" :class="{ active: isMenuOpen }" @click="toggleMenu">
      <div class="hamburger_line"></div>
      <div class="hamburger_line"></div>
      <div class="hamburger_line"></div>
    </div>

    <!-- 侧边菜单 -->
    <div class="side_menu" :class="{ active: isMenuOpen }">
      <div class="menu_item" @click="handleMobileSelect(1)">首页</div>
      <div class="menu_item" @click="handleMobileSelect(4)">裁艺现场</div>

      <div class="menu_item" @click="handleMobileSelect(2)">核心优势</div>
      <div class="menu_item" @click="handleMobileSelect(3)">科技赋能</div>
      <div class="menu_item" @click="handleMobileSelect(5)">联系我们</div>
    </div>

    <!-- 菜单遮罩层 -->
    <div class="menu_overlay" :class="{ active: isMenuOpen }" @click="closeMenu"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      isMenuOpen: false
    }
  },
  watch: {
    '$route.path'(val) {
      if (!val) return
      switch (val) {
        case '/home':
          this.activeIndex = '1'
          break
        case '/business':
          this.activeIndex = '2'
          break
        case '/news':
          this.activeIndex = '3'
          break
        case '/solutions':
          this.activeIndex = '4'
          break
        case '/contact':
          this.activeIndex = '5'
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
          this.$router.push('/home')
          break
        case 2:
          this.$router.push('/business')
          break
        case 3:
          this.$router.push('/news')
          break
        case 4:
          this.$router.push('/solutions')
          break
        case 5:
          this.$router.push('/contact')
          break
        default:
          break
      }
    },
    handleMobileSelect(key, event) {
      if (event) {
        event.preventDefault()
      }
      this.closeMenu()
      this.handleSelect(key)
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.header_container {
  --header-bg: rgba(0, 0, 0, 0.66);
  /* 统一头部高度变量 */
  --header-height: 66px;
  .logo_bars {
    position: absolute;
    left: 10px;
    bottom: 12px;
    height: 166% !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .bar {
      background-color: #2e2b2b;
      height: 88px;
      width: 4px;
    }
  }
  .header_menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 14px;
      color: #ffffff;
    }
  }

  // 桌面端菜单样式
  .desktop_menu {
    /* 默认隐藏，避免在不匹配媒体查询时干扰移动端 */
    .nav_menu {
      display: none;
    }
    @media (max-width: 768px) {
      display: none;
    }

    @media (min-width: 769px) {
      .nav_menu {
        display: flex;
        gap: 24px;
        align-items: center;
        font-size: 16px;
        color: #fff;
      }
      .nav_item {
        padding: 0 12px;
        line-height: var(--header-height);
        cursor: pointer;
        transition: color 0.2s ease, background-color 0.2s ease;
        user-select: none;
        color: #fff;
      }
      .nav_item:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
      .nav_item.active {
        color: transparent;
        background: linear-gradient(to right, rgb(255, 230, 1), rgb(247, 0, 0));

        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  // 汉堡菜单按钮样式
  .hamburger_menu {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    background: var(--header-bg);
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1000000;
    margin-right: 20px;

    @media (max-width: 768px) {
      display: flex;
    }

    .hamburger_line {
      width: 100%;
      height: 3px;
      background-color: #fff;
      border-radius: 10px;
      transition: all 0.3s ease;
    }

    &.active {
      .hamburger_line:nth-child(1) {
        transform: rotate(45deg) translate(8px, 8px);
      }

      .hamburger_line:nth-child(2) {
        opacity: 0;
      }

      .hamburger_line:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
      }
    }
  }

  // 侧边菜单样式
  .side_menu {
    position: fixed;
    top: var(--header-height);
    right: -300px;
    width: 250px;
    height: calc(100vh - var(--header-height));
    background: rgba(0, 0, 0, 0.3);
    transition: right 0.3s ease;
    z-index: 999998;
    padding: 20px 0;

    &.active {
      right: 0;
    }

    .menu_item {
      padding: 15px 30px;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      &:hover {
        background-color: rgba(232, 142, 7, 0.2);
        color: #e88e07;
      }

      &:active {
        background-color: rgba(232, 142, 7, 0.3);
      }
    }
  }

  // 菜单遮罩层样式
  .menu_overlay {
    position: fixed;
    top: var(--header-height);
    left: 0;
    width: 100%;
    height: calc(100vh - var(--header-height));
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 999997;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }

  height: var(--header-height);
  width: 100%;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 999999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--header-bg);
  margin-bottom: 0 !important;
  box-shadow: 0px 1px 4px rgb(13 13 13 / 19%);
  overflow: hidden;
  img {
    height: var(--header-height);
  }
  /* header_container 独立媒体查询 */
  @media (max-width: 768px) {
    --header-height: 50px;
  }
  @media (min-width: 769px) {
    --header-height: 66px;
  }
  .el-menu-item.is-disabled {
    opacity: 1;
  }
  .el-menu-item .is-active {
    color: red;
  }
  .left_section {
    color: #fff;
    line-height: var(--header-height);
    font-size: 40px;
  }
  /* 移除 Element 样式占位，保留自定义导航样式 */
}
</style>
