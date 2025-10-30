<template>
  <div>
    <div class="binnerimg binnerimg1">
      <div class="content">
        <h4>快捷 &nbsp;&nbsp;优质&nbsp;&nbsp; 省心</h4>
        <h1>
          <div><span class="iconfont icon-jianqie"></span></div>
        </h1>
        <h2>
          <span class="iconfont icon-jianqie"></span> Easy cutting, fast and comfortable cutting,
          Welcome.
        </h2>
      </div>
      <img class="binner binner1" src="../../assets/imgs/svg.svg" />
    </div>
    <div class="mian">
      <div class="lianxi">
        <h1>联系我们</h1>
        <i></i>
        <h2>Contact Us</h2>
      </div>
      <div class="top">
        <div class="topp">
          <div class="button button--bird">
            <div class="button__wrapper">
              <span class="button__text">我们在这</span>
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
          <h1>南通安逸裁剪中心</h1>
          <img class="img11" src="../../assets/imgs/0004.png" alt="" />
          <h3>微 信：jihpxz</h3>
          <h3>手 机：18015224889</h3>
          <h3>邮 箱：yzdm-118@163.com</h3>
          <h3>地 址：南通市孙家桥工业园</h3>
          <!-- <img class="img22" src="../../assets/imgs/eima.jpg" alt="" /> -->
        </div>
        <div id="container"></div>
      </div>
    </div>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'

export default {
  data() {
    return {
      map: null,
      marker: null
    }
  },
  mounted() {
    AMapLoader.load({
      key: 'e1d88ca5cf6677eff6ac9075aa9d0928', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ['AMap.ToolBar'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        this.map = new AMap.Map('container', {
          //设置地图容器id
          viewMode: '3D', //是否为3D地图模式
          zoom: 18, //初始化地图级别
          center: [120.932926, 32.05153] //初始化地图中心点位置
        })
        // 默认打点
        this.marker = new AMap.Marker({
          icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
          position: [120.932926, 32.05153]
        })
        this.map.add(this.marker)
      })
      .catch((e) => {})
  }
}
</script>

<style lang="scss" scoped>
::v-deep .amap-logo {
  z-index: -1 !important;
}
::v-deep .amap-copyright {
  z-index: -1 !important;
}
.binnerimg {
  img {
    @media (max-width: 768px) {
      height: 20vh;
      min-height: 300px;
    }

    @media (min-width: 769px) {
      height: 70vh;
      min-height: 600px;
    }
  }
  position: relative;
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    h1 {
      animation: jiandaopinyi1 8.8s infinite ease-in-out alternate;
      margin: 0 0 24px 0px;
      font-size: 88px;
      font-weight: 600;
      line-height: 88px;
      color: rgb(221, 229, 236);
      text-shadow: 0px 0px 6px rgb(163 159 159); /*添加字体文字的阴影*/

      @media (max-width: 768px) {
        font-size: 2.5rem;
        line-height: 1.2;
        margin: 0 0 1rem 0;
      }

      @media (min-width: 769px) {
        font-size: 5rem;
        line-height: 1.05;
      }

      div {
        animation: jiandaoxuanz 2s infinite ease-in-out alternate;
        transform: rotate(-90deg);
      }
      span {
        font-size: 88px;
        color: rgb(221, 229, 236);

        @media (max-width: 768px) {
          font-size: 2.5rem;
        }

        @media (min-width: 769px) {
          font-size: 5rem;
        }
      }
    }
    h4 {
      margin: 20px;
      font-size: 66px;
      font-weight: 600;
      line-height: 66px;
      text-shadow: 0px 0px 6px rgb(163 159 159); /*添加字体文字的阴影*/
      color: aliceblue;
      @media (max-width: 768px) {
        font-size: 2rem !important;
      }
      @media (min-width: 769px) {
      }
    }
    h2 {
      text-shadow: 0px 0px 16px rgb(163 159 159); /*添加字体文字的阴影*/
      color: aliceblue;
      margin-left: 20px;

      @media (max-width: 768px) {
        display: none;
      }

      @media (min-width: 769px) {
        display: block;
      }
      span {
        font-size: 24px;
        text-shadow: 0px 0px 6px rgb(163 159 159); /*添加字体文字的阴影*/
        color: rgb(221, 229, 236);
      }
    }
  }
}
.binnerimg1 {
  height: 788px;

  @media (max-width: 768px) {
    height: 20vh;
    min-height: 300px;
  }

  @media (min-width: 769px) {
    height: 70vh;
    min-height: 600px;
  }
}
.mian {
  margin-top: 24px;
  padding: 0 1rem;
  min-height: 60vh;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    margin-top: 1rem;
    padding: 0 0.5rem;
    min-height: 50vh;
  }

  @media (min-width: 769px) {
    margin-top: 2rem;
    padding: 0 2rem;
    min-height: 60vh;
  }

  #container {
    width: 666px;
    height: 666px;

    @media (max-width: 768px) {
      width: 100%;
      height: 300px;
      margin: 1rem 0;
    }

    @media (min-width: 769px) {
      width: 60%;
      height: 500px;
    }
  }
  .lianxi {
    font-family: 'alimmff', sans-serif;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 24px;

    // 移动端适配
    @media (max-width: 767px) {
      padding: 0 0.5rem;
      margin-bottom: 1rem;
    }

    h1 {
      color: rgba(0, 0, 0, 0.85);
      font-size: 24px;
      line-height: 30px;
      text-align: center;

      // 移动端适配
      @media (max-width: 767px) {
        font-size: 1.2rem;
        line-height: 1.4;
      }

      @media (min-width: 769px) {
        font-size: 1.6rem;
        line-height: 1.6;
      }
    }
    i {
      width: 120px;
      display: block;
      height: 2px;
      margin: 10px auto;
      background: #0463b5;

      // 移动端适配
      @media (max-width: 767px) {
        width: 80px;
        height: 1px;
        margin: 0.5rem auto;
      }

      @media (min-width: 769px) {
        width: 120px;
        margin: 1rem auto;
      }
    }
    h2 {
      color: rgba(0, 0, 0, 0.5);
      line-height: 20px;
      font-size: 20px;
      margin: 0;
      text-align: center;

      // 移动端适配
      @media (max-width: 767px) {
        font-size: 0.9rem;
        line-height: 1.3;
      }

      @media (min-width: 769px) {
        font-size: 1.1rem;
        line-height: 1.5;
      }
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .top {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      margin-bottom: 2rem;
      gap: 1rem;
    }

    @media (min-width: 769px) {
      margin-bottom: 4rem;
      gap: 2rem;
    }

    .topp {
      margin-top: -18px;
      font-family: 'alimmff' !important;
      margin-right: 66px;
      margin-bottom: 24px;

      @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 1rem;
        margin-top: 0;
        text-align: center;
        width: 100%;
        max-width: 300px;
      }

      @media (min-width: 769px) {
        margin-right: 3rem;
        margin-bottom: 2rem;
        margin-top: -1.2rem;
      }

      .button--bird {
        margin-left: 166px;
        margin-bottom: 24px;

        @media (max-width: 768px) {
          margin-left: 0;
          margin-bottom: 1rem;
          display: none;
        }

        @media (min-width: 769px) {
          margin-left: 3rem;
          margin-bottom: 2rem;
        }
      }

      h1 {
        margin-bottom: 24px;

        @media (max-width: 768px) {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        @media (min-width: 769px) {
          margin-bottom: 2rem;
          font-size: 2rem;
        }
      }

      .img11 {
        width: 605px;
        margin-bottom: 24px;

        @media (max-width: 768px) {
          width: 100%;
          max-width: 300px;
          margin-bottom: 1rem;
        }

        @media (min-width: 769px) {
          width: 70%;
          max-width: 500px;
          margin-bottom: 2rem;
        }
      }

      .img22 {
        width: 188px;
        margin-bottom: 24px;

        @media (max-width: 768px) {
          width: 100px;
          margin-bottom: 1rem;
        }

        @media (min-width: 769px) {
          width: 140px;
          margin-bottom: 2rem;
        }
      }

      h3 {
        margin-bottom: 12px;

        @media (max-width: 768px) {
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }

        @media (min-width: 769px) {
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }
      }
    }
  }
  .mid {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      flex-direction: column;
      margin-bottom: 2rem;
      gap: 1rem;
    }

    @media (min-width: 769px) {
      margin-bottom: 4rem;
      gap: 2rem;
    }
  }

  .footer {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      flex-direction: column;
      margin-bottom: 2rem;
      gap: 1rem;
    }

    @media (min-width: 769px) {
      margin-bottom: 4rem;
      gap: 2rem;
    }
  }
}
</style>
