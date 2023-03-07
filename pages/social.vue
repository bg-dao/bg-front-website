<template>
  <div>
    <div class="socialPC" v-show="!isMobile">

      <div class="socialPC-block1">
        <img src="@/assets/img/social/block1_img1.png" alt="socialLine" class="block1-img1">
        <img src="@/assets/img/social/block1_img2.png" alt="social" class="block1-img2">
        <img src="@/assets/img/social/block1_img3.png" alt="socialLine" class="block1-img3">
      </div>

      <div class="socialPC-blcok2">
        <div class="block2-title">
          推荐、点赞、转发和评论
        </div>
        <div class="block2-boxLayout flext flex-jus-between">
          <div class="block2-box block2-box1">
            <img src="@/assets/img/social/block2_img1.png" alt="socialApp">
          </div>
          <div class="block2-box block2-box2">
            <img src="@/assets/img/social/block2_img2.png" alt="socialApp">
          </div>
          <div class="block2-box block2-box3">
            <img src="@/assets/img/social/block2_img3.png" alt="socialApp">
          </div>
        </div>
      </div>

      <div class="socialPC-blcok3">
        <div class="block3-title">
          AI化的3D数字人
        </div>
        <div class="block3-layout">
          <div class="block3-people"></div>

          <div class="block3-step">
            <div class="step-stage"></div>
            <div class="flext flex-jus-around">
              <div class="step-people">

              </div>
              <div class="step-people">

              </div>
              <div class="step-people">

              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div class="socialPC-blcok4">
        <div class="block4-title">3D场景</div>
        <div class="block4-img"></div>
        <div class="block4-text">3D画廊：承载海量AI-NFT的图片</div>
        <div class="block4-img"></div>
        <div class="block4-text">3D音乐会：承载海量AI-NFT的音乐</div>
      </div>
    </div>

    <div class="social" v-show="isMobile"></div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  layout: "default",
  name: "social",
  computed: mapState({
    isMobile: state => state.app.isMobile
  }),
  data() {
    return {
      tab: 1,

    }
  },
  mounted() {
    this.tab = 1
    // new window.WOW().init()
    // console.log("This is current swiper instance object", this.mySwiper, "It will slideTo banners 3")
    // this.mySwiper.slideTo(3, 1000, false)

    // console.log("this.$axios", this.$axios)
    // this.fetchUrl()
  },
  methods: {
    openAndroidUrl() {
      window.open(this.androidUrl)
    },
    fetchUrl() {
      let baseUrl = process.env.BASE_API ? process.env.BASE_API : "http://test-meta.web3ssc.com:32582"
      if (location.href.includes("test")) baseUrl = "http://test-meta.web3ssc.com:32582"
      else baseUrl = "https://meta.web3ssc.com"
      console.log("baseUrl is ", baseUrl)

      this.$axios({
        method: "get", //指定请求方式
        url: baseUrl + "/api/common/normal/queryPcCommonInfo"
      }).then(res => {
        // console.log("res is ", res)
        if (res.data?.code === 0) {
          let appUpdateInfoList = res.data.data.appUpdateInfoList
          appUpdateInfoList.forEach(item => {
            if (item.osType == 2) this.androidUrl = item.updateUrl
          })
        }
      })
    },
    gototab(tab) {
      this.tab = tab
    },
    slideChangeTransitionEnd() {
      // console.log("This is current swiper instance object", this.swiper, "It will slideTo banners 3")
      this.swiper.on("slideChangeTransitionEnd", () => {
        // console.log("---onSlideChangeEnd", this.swiper.realIndex)
        this.mySwiperRealIndex = this.swiper.realIndex + 1
      })
    },
    gotoSwiper(index) {
      this.swiper.slideTo(index)
    }
  },
  head() {
    return {
      title: "BG-AI"
    }
  }
}
</script>

<style lang="scss" scoped>
.socialPC {
  padding: 165px;
  position: relative;
  z-index: 6;
  .socialPC-block1 {
    width: 1200px;
    margin: 0 auto;
    .block1-img1 {
      width: 610px;
      height: 18px;
      display: block;
    }
    .block1-img3 {
      width: 610px;
      height: 18px;
      margin-left: 590px;
      display: block;
    }
    .block1-img2 {
      width: 415px;
      height: 57px;
      margin: 0 auto;
      margin-top: 91px;
      margin-bottom: 91px;
      display: block;
    }
  }

  .socialPC-blcok2 {
    margin-top: 193px;
    .block2-title {
      width: 100%;
      text-align: center;
      font-size: 40px;
      font-weight: 600;
      color: #EFEFFC;
    }
    .block2-boxLayout {
      max-width: 1392px;
      width: 100%;
      margin: 0 auto;
    }
    .block2-box {
      width: 32%;
      max-width: 432px;
      min-height: 868px;
      height: auto;
    }
    .block2-box1 {
      margin-top: 217px;
    }
    .block2-box2 {
      margin-top: 42px;
    }
    .block2-box3 {
      margin-top: 307px;
    }

  }

  .socialPC-blcok3 {
    margin-top: 182px;
    .block3-title {
      width: 100%;
      text-align: center;
      font-size: 40px;
      font-weight: 600;
      color: #EFEFFC;
      margin-bottom: 64px;
    }
    .block3-layout {
      width: 1200px;
      margin: 0 auto;
    }
    .block3-people {
      width: 1200px;
      height: 620px;
      background: #1A1A27;
      border-radius: 12px;
      position: relative;
      z-index: 10;
    }
    .block3-step {
      margin-top: 48px;
      position: relative;
      z-index: 10;
      width: 1148px;
      height: 334px;
      .step-stage {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 1148px;
        height: 91px;
        background-image: url('~@/assets/img/social/block3_stage.png');
        background-size: 100% 100%;

      }
      .step-people {
        position: relative;
        z-index: 5;
        width: 188px;
        height: 300px;
        background-image: url('~@/assets/img/social/block3_peopleBG.png');
        background-size: 188px 240px;
        background-position-y: 30px;
      }
    }
  }

  .socialPC-blcok4 {
    margin-top: 200px;
    .block4-title {
      width: 100%;
      text-align: center;
      font-size: 40px;
      font-weight: 600;
      color: #EFEFFC;
      margin-bottom: 64px;
    }
    .block4-img {
      width: 1200px;
      height: 620px;
      margin: 0 auto;
      margin-bottom: 24px;
    }
    .block4-text {
      width: 100%;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: #EFEFFC;
      margin-bottom: 80px;
    }
  }
}

/* prettier-ignore */
</style>
