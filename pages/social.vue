<template>
  <div>
    <div class="aiPC" v-show="!isMobile">aiPC</div>

    <div class="ai" v-show="isMobile">ai</div>
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
.aiPC {
  
}
/* prettier-ignore */
</style>
