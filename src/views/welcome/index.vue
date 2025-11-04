<template>
  <div class="yyy">
    <div class=""></div>
    <img
      class="juda"
      src="../../assets/imgs/bejin.jpg"
      alt="南通意中裁剪中心欢迎页背景 - 专业格柏智能裁剪服务"
    />
    <div class="content">
      <h2>
        <span class="iconfont icon-jianqie"></span>{{ '  Easy cutting, Welcome.'.toUpperCase() }}
      </h2>

      <h1>A &nbsp;Y &nbsp; C &nbsp; J</h1>
      <!-- <h2><span class="iconfont icon-jianqie"></span> Easy cutting, fast and comfortable cutting, Welcome.</h2> -->
      <div class="jiandaooo1">
        <div>
          <span class="iconfont icon-line-scissorsjiandao-02"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  methods: {
    tototo() {
      setTimeout(() => {
        this.$router.push({ path: '/contact' })
      }, 8888)
    }
  },
  mounted() {
    setTimeout(() => {
      this.$router.push({ path: '/women' })
    }, 8888)
  }
}
</script>

<style lang="scss" scoped>
.jiandaooo1 {
  margin-top: 20px;
  animation: jiandaopinyi 8.8s infinite ease-in-out alternate;
  div {
    animation: jiandaoxuanz 1.2s infinite ease-in-out alternate !important;
  }
  span {
    font-size: 88px;
    background: linear-gradient(to right, rgba(80, 80, 136, 0.8), rgba(156, 56, 56, 0.8));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.yyy {
  height: 100vh;
}
.juda {
  width: 100vw;
  height: 100vh;
  /* background-size: cover;
  background-position: center top; */
  animation: bgAnim1 30s infinite;
}
.content {
  cursor: default;
  font-family: 'alimm';
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-family: Livvic, sans-serif;
  img {
    height: 66px;
  }
  h1 {
    margin-top: 36px;
    margin-bottom: 36px;
    /*过渡效果*/
    transition: all 3s linear 0;
    font-size: 48px;
    font-weight: 600;
    line-height: 66px;
    font-weight: bold;
    font-size: 188px;
    line-height: 188px;
    text-shadow: 0px 0px 18px rgb(163 159 159); /*添加字体文字的阴影*/
    /* background: linear-gradient(to right, rgb(80, 80, 136), rgb(156 56 56));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    color: rgba(221, 229, 236, 1);
    span {
      font-size: 66px;
      color: rgb(221, 229, 236);
    }
    span:hover {
      animation: bgAnim 10s infinite;
    }
  }
  h1 {
    animation: bgAnim 18s infinite;
  }
  h2 {
    font-size: 36px;
    background: linear-gradient(to right, rgb(80, 80, 136), rgb(156 56 56));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    span {
      font-size: 36px;
      background: linear-gradient(to right, rgb(80, 80, 136), rgb(156 56 56));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
