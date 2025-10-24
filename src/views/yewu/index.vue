<template>
  <div>
    <div class="binnerimg binnerimg1">
      <div class="content">
        <h1>A &nbsp;Y &nbsp;C &nbsp;J</h1>
        <!-- <h2><span class="iconfont icon-jianqie"></span> Easy cutting, fast and comfortable cutting, Welcome.</h2> -->
        <div class="jiandaooo1">
          <div>
            <span class="iconfont icon-line-scissorsjiandao-02"></span>
          </div>
        </div>
      </div>
      <div class="binner2">
        <img class="binner binner1" src="../../assets/imgs/bejin.jpg" />
      </div>
    </div>
    <div class="mian rotateOutDownLeft">
      <jiqi />
      <jiagonqu />
    </div>
  </div>
</template>

<script>
import jiagonqu from './components/jiagonqu.vue'
import jiqi from './components/jiqi.vue'
export default {
  components: { jiagonqu, jiqi },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.jiandaooo1 {
  position: relative;
  z-index: 99999;
  margin-top: 20px;
  animation: jiandaopinyi 66s infinite ease-in-out alternate;
  div {
    animation: jiandaoxuanz 3.6s infinite ease-in-out alternate !important;
  }
  span {
    font-size: 88px;
    background: linear-gradient(to right, rgba(80, 80, 136, 0.8), rgba(156, 56, 56, 0.8));
    background: #fff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.binnerimg h1 {
  animation: bgAnim 66s infinite ease-in-out alternate;
}
.binnerimg {
  .binner1 {
    animation: bgAnim 66s infinite ease-in-out alternate;
  }
  .binner2 {
    animation: shangyi111 6s infinite ease-in-out alternate;
  }
  height: 788px;
  overflow: hidden;
  position: relative;
  .content {
    position: absolute;
    z-index: 999999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    h1 {
      margin: 0 0 24px 0px;
      width: 1188px;
      font-size: 188px;
      font-weight: 600;
      line-height: 188px;
      text-shadow: 0px 0px 16px rgb(163 159 159); /*添加字体文字的阴影*/
      text-align: center;
      color: rgb(255, 255, 255);
    }
  }
}
.mian {
  width: 1666px;
  padding: 20px;
  margin: 20px auto;
  .mid {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 50px;
  }
  .footer {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 50px;
  }
}
</style>
