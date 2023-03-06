<template>
  <div>
    <div class="indexPC PC" v-show="!isMobile">
777777777777777
    </div>

    <div class="index" v-show="isMobile">
777777777
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  layout: "default",
  name: "index",
  computed: mapState({
    isMobile: (state) => state.app.isMobile,
  }),
  data() {
    return {
      tab: 1,
      // banners: [require(`~/assets/img/index/banner1.png`), require(`~/assets/img/index/banner2.png`), require(`~/assets/img/index/banner3.png`), require(`~/assets/img/index/banner4.png`)],

      swiperOption: {
        // watchSlidesProgress: true,
        // slidesPerView: "auto",
        // centeredSlides: true,
        loop: true,
        // autoplay: true,
        autoplay: {
          delay: 2000, //1秒切换一次
        },
        // loopedSlides: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // on: {
        //   // progress: function (progress) {
        //   //   for (let i = 0; i < this.slides.length; i++) {
        //   //     var slide = this.slides.eq(i)
        //   //     var slideProgress = this.slides[i].progress
        //   //     let modify = 1
        //   //     if (Math.abs(slideProgress) > 1) {
        //   //       modify = (Math.abs(slideProgress) - 1) * 0.3 + 1
        //   //     }
        //   //     let translate = slideProgress * modify * 160 + "px"
        //   //     let scale = 1 - Math.abs(slideProgress) / 5
        //   //     let zIndex = 999 - Math.abs(Math.round(10 * slideProgress))
        //   //     slide.transform("translateX(" + translate + ") scale(" + scale + ")")
        //   //     slide.css("zIndex", zIndex)
        //   //     slide.css("opacity", 1)
        //   //     if (Math.abs(slideProgress) > 3) {
        //   //       slide.css("opacity", 0)
        //   //     }
        //   //   }
        //   // },
        //   // setTransition: function (transition) {
        //   //   for (var i = 0; i < this.slides.length; i++) {
        //   //     var slide = this.slides.eq(i)
        //   //     slide.transition(transition)
        //   //   }
        //   // },
        // },
      },

      // mBanners: [require(`~/assets/img/index/m_banner1.png`), require(`~/assets/img/index/m_banner2.png`), require(`~/assets/img/index/m_banner3.png`), require(`~/assets/img/index/m_banner4.png`)],

      androidUrl: "https://bytego123.com/download/ss/starsky1.0.2.apk",
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
        url: baseUrl + "/api/common/normal/queryPcCommonInfo",
      }).then((res) => {
        // console.log("res is ", res)
        if (res.data?.code === 0) {
          let appUpdateInfoList = res.data.data.appUpdateInfoList
          appUpdateInfoList.forEach((item) => {
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
    },
  },
  head() {
    return {
      title: "BG官网-首页",
    }
  },
}
</script>

<style lang="scss" scoped>

/* prettier-ignore */
</style>
