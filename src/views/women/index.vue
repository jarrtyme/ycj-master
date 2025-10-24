<template>
  <div>
    <div class="binnerimg binnerimg1">
      <div class="content">
        <h4>快捷 &nbsp;&nbsp;优质&nbsp;&nbsp; 省心</h4>
        <h1>
          <div><span class="iconfont icon-jianqie"></span></div>
        </h1>
        <h2><span class="iconfont icon-jianqie"></span> Easy cutting, fast and comfortable cutting, Welcome.</h2>
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
          <h3>地 址：南通市开发区通富南路21号</h3>
          <img class="img22" src="../../assets/imgs/eima.jpg" alt="" />
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
          center: [120.91585, 31.932179] //初始化地图中心点位置
        })
        // 默认打点
        this.marker = new AMap.Marker({
          icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
          position: [120.91585, 31.932179]
        })
        this.map.add(this.marker)
      })
      .catch((e) => {
        // console.log(e)
      })
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
    height: 788px;
  }
  position: relative;
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
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
      div {
        animation: jiandaoxuanz 2s infinite ease-in-out alternate;
        transform: rotate(-90deg);
      }
      span {
        font-size: 88px;
        color: rgb(221, 229, 236);
      }
    }
    h4 {
      margin: 20px;
      font-size: 66px;
      font-weight: 600;
      line-height: 66px;
      text-shadow: 0px 0px 6px rgb(163 159 159); /*添加字体文字的阴影*/
      color: aliceblue;
    }
    h2 {
      text-shadow: 0px 0px 16px rgb(163 159 159); /*添加字体文字的阴影*/
      color: aliceblue;
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
}
.mian {
  margin-top: 24px;
  #container {
    width: 666px;
    height: 666px;
  }
  .lianxi {
    font-family: 'alimmff', sans-serif;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 24px;
    h1 {
      color: rgba(0, 0, 0, 0.85);
      font-size: 24px;
      line-height: 30px;
      text-align: center;
    }
    i {
      width: 120px;
      display: block;
      height: 2px;
      margin: 10px auto;
      background: #0463b5;
    }
    h2 {
      color: rgba(0, 0, 0, 0.5);
      line-height: 20px;
      font-size: 20px;
      margin: 0;
      text-align: center;
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .top {
    .topp {
      .button--bird {
        margin-left: 166px;
        margin-bottom: 24px;
      }
      margin-top: -18px;
      font-family: 'alimmff' !important;
      h1 {
        margin-bottom: 24px;
      }
      .img11 {
        width: 605px;
        margin-bottom: 24px;
      }
      .img22 {
        width: 188px;
        margin-bottom: 24px;
      }
      margin-right: 66px;
      margin-bottom: 24px;
      h3 {
        margin-bottom: 12px;
      }
    }

    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    margin-bottom: 50px;
    /* position: relative;
    left: -250px; */
  }
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
