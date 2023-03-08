<template>
  <div>
    <div class="indexPC " v-show="!isMobile">

      <img src="@/assets/img/index/top.png" alt="top" class="indexPC-top">
      <div class="indexPC-layout">
        <img src="@/assets/img/index/block1.png" alt="block1" class="indexPC-blcok1" />
      </div>

      <img src="@/assets/img/index/block2.png" alt="blcok2" class="indexPC-blcok2" />

      <div class="indexPC-layout">
        <div class="indexPC-blcok3">
          <div class="blcok3-title">创新探索</div>
          <div class="block3-chatRight flex flex-row-reverse">
            <img src="@/assets/img/index/peopleAvatar.png" alt="peopleAvatar" class="chatRight-avatar" />
            <div class="chatRight-chat">生成式AI如何全驱动一站式创作、NFT化和社交平台？</div>
          </div>

          <div class="block3-chatLeft flext">
            <img src="@/assets/img/index/AIAvatar.png" alt="AIAvatar" class="chatLeft-avatar" />
            <div class="chatLeft-chat">一键创作AI作品，AI-NFT化，确权和赋予经济价值，IP品牌化；全新AI社交模式，承载海量AI-NFT的3D场景，AI化的3D数字人在线互动</div>
          </div>

          <div class="block3-chatRight flex flex-row-reverse">
            <img src="@/assets/img/index/peopleAvatar.png" alt="peopleAvatar" class="chatRight-avatar" />
            <div class="chatRight-chat chatRight-chat2">如何将Web2海量用户带入Web3世界？</div>
          </div>

          <div class="block3-chatLeft flext">
            <img src="@/assets/img/index/AIAvatar.png" alt="AIAvatar" class="chatLeft-avatar" />
            <div class="chatLeft-chat chatLeft-chat2" >Web2.5,渐进式发展，短中期偏中心化，以Web2的良好用户体验为主，后续平滑过度到Web3；Web3账户体系向账户抽象看齐，降低用户使用门槛，保证用户资金安全</div>
          </div>

        </div>
      </div>
    </div>

    <div class="index" v-show="isMobile">
      <div class="index-b1">
        <img src="@/assets/img/index/m_b1.png" alt="homeImg" class="b1-img">
      </div>

      <div class="index-b2">
        <div class="b2-title">AI-NFT贯穿整个产品线</div>
        <img src="@/assets/img/index/b2_arrow.png" alt="arrow" class="b2-arrow" @click="mySwiper && mySwiper.slideNext()">
        <div class="b2-swiper">
          <div class="swiper" v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
              <div class="swiper-slide" :key="index" v-for="(banner, index) in banners" :style="{ backgroundImage: 'url(' + banner + ')' }"></div>
            </div>

          </div>
        </div>
        <img src="@/assets/img/index/b2_arrow.png" alt="arrow" class="b2-arrow" @click="mySwiper && mySwiper.slidePrev()">
      </div>

      <div class="index-b3">
        <div class="b3-title">「生成式AI全驱动」</div>
        <div class="b3-title2">创新探索</div>
        <div class="b3-layout">
          <div class="b3-block flext flex-row-reverse">
            <img src="@/assets/img/index/b3-leftIcon.png" alt="peopleAvatar" class="b3-leftIcon" />
            <div class="b3-box b3-box1">生成式AI如何全驱动一站式创作、NFT化和社交平台？</div>
          </div>
          <div class="b3-block flext">
            <img src="@/assets/img/index/b3-rightIcon.png" alt="peopleAvatar" class="b3-rightIcon" />
            <div class="b3-box b3-box2">一键创作AI作品，AI-NFT化，确权和赋予经济价值，IP品牌化；全新AI社交模式，承载海量AI-NFT的3D场景，AI化的3D数字人在线互动</div>
          </div>
          <div class="b3-block flext flex-row-reverse">
            <img src="@/assets/img/index/b3-leftIcon.png" alt="peopleAvatar" class="b3-leftIcon" />
            <div class="b3-box b3-box3">如何将Web2海量用户带入Web3世界？</div>
          </div>
          <div class="b3-block flext">
            <img src="@/assets/img/index/b3-rightIcon.png" alt="peopleAvatar" class="b3-rightIcon" />
            <div class="b3-box b3-box2">Web2.5,渐进式发展，短中期偏中心化，以Web2的良好用户体验为主，后续平滑过度到Web3；Web3账户体系向账户抽象看齐，降低用户使用门槛，保证用户资金安全</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  layout: "default",
  name: "index",
  computed: mapState({
    isMobile: state => state.app.isMobile
  }),
  data() {
    return {
      tab: 1,
      banners: [require(`~/assets/img/index/b2_banner1.png`), require(`~/assets/img/index/b2_banner2.png`), require(`~/assets/img/index/b2_banner3.png`)],

      swiperOption: {
        direction: "vertical",
        // watchSlidesProgress: true,
        // slidesPerView: "auto",
        // centeredSlides: true,
        loop: true,
        // autoplay: true,
        autoplay: {
          delay: 3500 //3秒切换一次
        },
      },

      androidUrl: "https://bytego123.com/download/ss/starsky1.0.2.apk"
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
      title: "BG官网-首页"
    }
  }
}
</script>

<style lang="scss" scoped>
.indexPC {
  .indexPC-top {
    width: 830px;
    min-height: 878px;
    position: absolute;
    top: 0;
    right: 0;
  }
  .indexPC-layout {
    width: 1200px;
    margin: 0 auto;
  }
  .indexPC-blcok1 {
    width: 780px;
    min-height: 164px;
    padding-top: 302px;
    padding-bottom: 508px;
    position: relative;
  }
  .indexPC-blcok2 {
    width: 1353px;
    min-height: 805px;
    margin: 0 auto;
    display: block;
  }
  .indexPC-blcok3 {
    margin-top: 200px;

    position: relative;
    z-index: 8;
    .blcok3-title {
      font-size: 40px;
      font-weight: 600;
      color: #EFEFFC;
      text-align: center;
      margin-bottom: 63px;
    }
    .block3-chatRight {
      margin-bottom: 63px;
      gap: 14px;
      .chatRight-chat {
        width: 546px;
        height: 84px;
        background-image: url('~@/assets/img/index/chatRight.png');
        background-size: 100% 100%;
        font-size: 18px;
        font-weight: 600;
        color: #EFEFFC;
        padding: 29px 46px;
        text-align: center;
      }
      .chatRight-chat2 {
        background-image: url('~@/assets/img/index/chatRight2.png');
        width: 421px;
      }
      .chatRight-avatar {
        width: 52px;
        min-height: 64px;
      }
    }

    .block3-chatLeft {
      margin-bottom: 63px;
      gap: 14px;
      .chatLeft-chat {
        width: 703px;
        height: 137px;
        line-height: 40px;
        background-image: url('~@/assets/img/index/chatLeft.png');
        background-size: 100% 100%;
        font-size: 18px;
        font-weight: 600;
        color: #EFEFFC;
        padding: 28px 45px;
      }

      .chatLeft-chat2 {
        background-image: url('~@/assets/img/index/chatLeft2.png');
        width: 703px;
        height: 175px;
      }
      .chatLeft-avatar {
        width: 75px;
        min-height: 64px;
        margin-top: 20px;
      }
    }
  }

}
/* prettier-ignore */
.index {
  .index-b1 {
    margin: 0 auto;
    width: 439PX;
    min-height: 438PX;
    background-image: url('~@/assets/img/index/m_b1bg.png');
    background-size: 100% 100%;
    position: relative;
    .b1-img {
      position: absolute;
      top: 168PX;
      left: -30PX;
      width: 501PX;
      min-height: 106PX;
    }
  }

  .index-b2 {
    margin-top: 30PX;
    .b2-title {
      font-size: 40PX;
      font-weight: 600;
      color: #EFEFFC;
      width: 100%;
      text-align: center;
    }
    .b2-arrow {
      margin: 0 auto;
      width: 51PX;
      min-height: 32PX;
      margin-top: 15PX;
      display: block;
    }
    .b2-swiper {
      margin: 0 auto;
      width: 704PX;
      height: 386PX;
      margin-top: 23PX;
      margin-bottom: 23PX;

      .swiper {
        width: 704PX;
        height: 386PX;
        position: relative;
        .swiper-wrapper {
          width: 100%;
          height: 386PX;
          position: relative;
        }
        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 704PX;
          height: 386PX;
          background-size: 100% 100%;
          // position: relative;
          // z-index: 2;
          img {
            display: block;
            width: 704PX;
            height: 386PX;
            // object-fit: cover;
          }
        }
      }

    }
  }

  .index-b3 {
    margin-top: 8PX;
    position: relative;
    z-index: 6;
    .b3-title {
      font-size: 48PX;
      font-weight: 600;
      color: #6967FF;
      width: 100%;
      text-align: center;
    }
    .b3-title2 {
      margin-top: 120PX;
      margin-bottom: 63PX;
      font-size: 40PX;
      font-weight: 600;
      color: #EFEFFC;
      width: 100%;
      text-align: center;
    }
    .b3-layout {
      padding: 0 24PX;
    }
    .b3-block {
      margin-bottom: 47PX;
    }
    .b3-leftIcon {
      width: 39PX;
      min-height: 48PX;
      margin-left: 14PX;
      margin-top: 16PX;
    }
    .b3-rightIcon {
      width: 56PX;
      min-height: 48PX;
      margin-top: 20PX;
      margin-right: 20PX;
    }
    .b3-box {
      background-size: 100% 100%;
      font-size: 24PX;
      font-weight: 600;
      color: #EFEFFC;
      padding: 24PX;
    }
    .b3-box1 {
      width: 546PX;
      height: 122PX;
      background-image: url('~@/assets/img/index/b3-box1.png');

    }
    .b3-box2 {
      width: 551PX;
      height: 208PX;
      background-image: url('~@/assets/img/index/b3-box2.png');
      padding-left: 45PX;
      line-height: 40PX;
    }
    .b3-box3 {
      width: 511PX;
      height: 86PX;
      background-image: url('~@/assets/img/index/b3-box3.png');
    }
    .b3-box4 {
      width: 545PX;
      height: 248PX;
      background-image: url('~@/assets/img/index/b3-box4.png');
      padding-left: 45PX;
      line-height: 40PX;
    }
  }
}
</style>
