<template>
  <div>
    <div>
      <img
        class="caichuang"
        src="../../assets/imgs/caichuang/11.jpg"
        alt="格柏智能裁剪设备工作场景展示"
      />
      <img
        class="caichuang"
        src="../../assets/imgs/caichuang/12.jpg"
        alt="自动裁剪机裁剪布料实拍图"
      />
      <img
        class="caichuang"
        src="../../assets/imgs/caichuang/13.jpg"
        alt="全自动拉布机铺布操作现场"
      />
      <img
        class="caichuang"
        src="../../assets/imgs/caichuang/14.jpg"
        alt="南通意中裁剪中心裁剪设备展示"
      />
      <img
        class="caichuang"
        src="../../assets/imgs/caichuang/5.jpg"
        alt="智能裁剪系统裁剪复杂图形展示"
      />
      <img
        class="caichuang"
        src="../../assets/imgs/caichuang/6.jpg"
        alt="格柏裁剪机精准裁剪布料过程"
      />
      <img class="caichuang" src="../../assets/imgs/caichuang/7.jpg" alt="专业裁剪设备工作场景" />
      <img class="caichuang" src="../../assets/imgs/caichuang/8.jpg" alt="服装裁剪设备操作现场" />
      <img
        class="caichuang"
        src="../../assets/imgs/caichuang/9.jpg"
        alt="智能裁剪中心裁剪工艺流程"
      />
      <img
        class="caichuang"
        src="../../assets/imgs/caichuang/10.jpg"
        alt="南通裁剪中心专业裁剪服务展示"
      />
      <img
        class="caichuang"
        src="../../assets/imgs/caichuang/1.jpg"
        alt="格柏自动裁剪系统裁剪效果展示"
      />
      <img
        class="caichuang"
        src="../../assets/imgs/caichuang/2.jpg"
        alt="智能裁剪设备裁剪成品展示"
      />
      <img class="caichuang" src="../../assets/imgs/caichuang/3.jpg" alt="裁剪中心设备操作演示" />
      <img
        class="caichuang"
        src="../../assets/imgs/caichuang/4.jpg"
        alt="专业裁剪服务工艺流程展示"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableHeight: null
    }
  },

  // watch: {
  //   screenHeight(val) {
  //     // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
  //     if (!this.timer) {
  //       // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
  //       this.screenHeight = val;
  //       this.timer = true;
  //       let that = this;
  //       setTimeout(function () {
  //         // 打印screenWidth变化的值
  //         that.timer = false;
  //       }, 400);
  //     }
  //   },
  // },

  mounted() {
    this.tableHeight = window.innerHeight - 0
    // const that = this;
    window.onresize = () => (this.tableHeight = window.innerHeight - 0)
    //   return (() => {
    //     // 可以限制最小高度
    //     // if (document.body.clientHeight - 240 < 450) {
    //     //   return
    //     // }
    //     window.screenHeight = document.body.clientHeight - this.topHeight;
    //     that.screenHeight = window.screenHeight;
    //   })();
  }
}
</script>

<style lang="scss" scoped>
.test {
  position: fixed;

  @media (max-width: 768px) {
    position: relative;
    min-height: 50vh;

    li {
      margin-bottom: 1rem;

      h1,
      h2 {
        font-size: 1.2rem;
        line-height: 1.4;
      }
    }
  }

  @media (min-width: 769px) {
    min-height: 70vh;
    padding: 2rem;
  }
}
.caichuang {
  width: 100vw;
  height: auto;

  @media (max-width: 768px) {
    object-fit: cover;
  }
}
</style>
