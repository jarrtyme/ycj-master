<template>
  <div>
    <div>
      <img class="caichuang" src="../../assets/imgs/caichuang/11.jpg" />
      <img class="caichuang" src="../../assets/imgs/caichuang/12.jpg" />
      <img class="caichuang" src="../../assets/imgs/caichuang/13.jpg" />
      <img class="caichuang" src="../../assets/imgs/caichuang/14.jpg" />
      <img class="caichuang" src="../../assets/imgs/caichuang/5.jpg" />
      <img class="caichuang" src="../../assets/imgs/caichuang/6.jpg" />
      <img class="caichuang" src="../../assets/imgs/caichuang/7.jpg" />
      <img class="caichuang" src="../../assets/imgs/caichuang/8.jpg" />
      <img class="caichuang" src="../../assets/imgs/caichuang/9.jpg" />
      <img class="caichuang" src="../../assets/imgs/caichuang/10.jpg" />
      <img class="caichuang" src="../../assets/imgs/caichuang/1.jpg" />
      <img class="caichuang" src="../../assets/imgs/caichuang/2.jpg" />
      <img class="caichuang" src="../../assets/imgs/caichuang/3.jpg" />
      <img class="caichuang" src="../../assets/imgs/caichuang/4.jpg" />
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
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
</style>
