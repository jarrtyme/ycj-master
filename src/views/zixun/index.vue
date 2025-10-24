<template>
  <div>
    <div>
      <!-- <img class="caichuang" src="../../assets/imgs/caichuang/0.jpg" /> -->
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
      <!-- <img class="caichuang" src="../../assets/imgs/caichuang/15.jpg" /> -->
    </div>

    <ul class="test" :height="tableHeight">
      <li v-for="i in 100"><h1>hahahah</h1></li>
      <li><h2>zuihouyitiao</h2></li>
    </ul>
    <!-- <img src="../../assets/imgs/04.png" /> -->
    <!-- -->
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
  //         console.log(that.screenHeight);
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
}
.caichuang {
  width: 100vw;
}
</style>
