<template>
  <div>
    <div class="nftPC" v-show="!isMobile">
      <section class="wow fadeInUp" data-wow-duration="1s">
        <div class="ntfPC-block1"><img src="@/assets/img/nft/block1Text.png" alt="block1Text" /></div>
      </section>

      <section class="wow fadeInUp" data-wow-duration="1s">
        <div class="nftPC-blcok2">
          <div class="block2-title">发行、铸造和确权</div>
          <div class="block2-boxLayout flext flex-jus-between">
            <div class="block2-box block2-box1"><img src="@/assets/img/nft/block2_img1.png" alt="nftApp" /></div>
            <div class="block2-box block2-box2"><img src="@/assets/img/nft/block2_img2.png" alt="nftApp" /></div>
            <div class="block2-box block2-box3"><img src="@/assets/img/nft/block2_img3.png" alt="nftApp" /></div>
          </div>
        </div>
      </section>

      <section class="wow fadeInUp" data-wow-duration="1s">
        <div class="nftPC-blcok3">
          <div class="block3-title">基础设施</div>
          <div class="block3-img"><img src="@/assets/img/nft/block3_img.png" alt="基础设施" /></div>
        </div>
      </section>

      <section class="wow fadeInUp" data-wow-duration="1s">
        <div class="nftPC-blcok4">
          <div class="block4-title">关于NFT</div>
          <div class="block4-imgLayout flext">
            <img src="@/assets/img/nft/block4_img.png" alt="aboutNft" class="blcok4-img" />
            <div style="margin-top: 168px;">
              <div class="block4-text1">万物皆可NFT化</div>
              <div class="block4-text2">每个NFT在链上都有唯一标识 不可篡改，也不可相互替代</div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="nft" v-show="isMobile">
      <section class="wow fadeInUp" data-wow-duration="1s"><img src="@/assets/img/nft/ntf_b1.png" alt="ntf_b1" class="ntf-b1" /></section>

      <section class="wow fadeInUp" data-wow-duration="1s">
        <div class="ntf-b2">
          <div class="b2-title">发行、铸造和确权</div>
          <div class="b2-layout flext">
            <img src="@/assets/img/nft/ntf_b2_box1.png" alt="ntfApp" class="b2-box b2-box1" />
            <img src="@/assets/img/nft/ntf_b2_box2.png" alt="ntfApp" class="b2-box b2-box2" />
            <img src="@/assets/img/nft/ntf_b2_box3.png" alt="ntfApp" class="b2-box b2-box3" />
          </div>
        </div>
      </section>

      <section class="wow fadeInUp" data-wow-duration="1s">
        <div class="ntf-b3">
          <div class="b3-title">基础设施</div>
          <img src="@/assets/img/nft/ntf_b3.png" alt="infrastructure" class="b3-img" />
        </div>
      </section>

      <section class="wow fadeInUp" data-wow-duration="1s">
        <div class="ntf-b4">
          <div class="b4-title">关于NFT</div>
          <div class="b4-text1">万物皆可NFT化</div>
          <div class="b4-text2">
            每个NFT在链上都有唯一标识
            <br />
            不可篡改，也不可相互替代
          </div>
          <img src="@/assets/img/nft/ntf_b4.png" alt="NFT" class="b4-img" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  layout: "default",
  name: "nft",
  computed: mapState({
    isMobile: state => state.app.isMobile
  }),
  data() {
    return {}
  },
  mounted() {
    new window.WOW().init()
    // console.log("This is current swiper instance object", this.mySwiper, "It will slideTo banners 3")
    // this.mySwiper.slideTo(3, 1000, false)

    // console.log("this.$axios", this.$axios)
    // this.fetchUrl()
  },
  methods: {},
  head() {
    return {
      title: "BG-NFT"
    }
  }
}
</script>

<style lang="scss" scoped>
.nftPC {
  padding-top: 130px;
  position: relative;
  z-index: 6;
  .ntfPC-block1 {
    margin: 0 auto;
    width: 1094px;
    height: 339px;
    background-size: 100% 100%;
    background-image: url("~@/assets/img/nft/block1BG.png");
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 956px;
      height: 58px;
    }
  }

  .nftPC-blcok2 {
    margin-top: 163px;
    .block2-title {
      width: 100%;
      text-align: center;
      font-size: 40px;
      font-weight: 600;
      color: #efeffc;
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

  .nftPC-blcok3 {
    margin-top: 182px;
    .block3-title {
      width: 100%;
      text-align: center;
      font-size: 40px;
      font-weight: 600;
      color: #efeffc;
      margin-bottom: 64px;
    }
    .block3-img {
      width: 1200px;
      height: 761px;
      margin: 0 auto;
    }
  }

  .nftPC-blcok4 {
    margin-top: 171px;
    .block4-title {
      width: 100%;
      text-align: center;
      font-size: 40px;
      font-weight: 600;
      color: #efeffc;
      margin-bottom: 10px;
    }
    .block4-imgLayout {
      width: 1200px;
      margin: 0 auto;
    }
    .blcok4-img {
      width: 668px;
      min-height: 743px;
      margin-right: 120px;
    }
    .block4-text1 {
      font-size: 28px;
      font-weight: 600;
      color: #efeffc;
    }
    .block4-text2 {
      margin-top: 24px;
      width: 260px;
      height: 76px;
      font-size: 20px;
      font-weight: 600;
      color: #efeffc;
      line-height: 38px;
    }
  }
}
/* prettier-ignore */
.nft {
  .nft-b1 {
    width: 100%;
    min-height: 448PX;
    display: block;
  }
  .ntf-b2 {
    margin-top: 80PX;
    .b2-title {
      font-size: 40PX;
      font-weight: 600;
      color: #EFEFFC;
      text-align: center;
      margin-bottom: 50PX;
    }
    .b2-layout {
      width: 100%;
      padding: 0 8PX;
    }
    .b2-box {
      width: 245PX;
      min-height: 477PX;
      display: block;
    }
    .b2-box1 {
      margin-top: 93PX;
    }
    .b2-box3 {
      margin-top: 140PX;
    }
  }
  .ntf-b3 {
    margin-top: 100PX;
    .b3-title {
      font-size: 40PX;
      font-weight: 600;
      color: #EFEFFC;
      text-align: center;
      margin-bottom: 64PX;
    }
    .b3-img {
      width: 702PX;
      min-height: 446PX;
      display: block;
      margin: 0 auto;
    }
  }
  .ntf-b4 {
    margin-top: 120PX;
    position: relative;
    z-index: 6;
    margin-bottom: 120PX;
    .b4-title {
      font-size: 40PX;
      font-weight: 600;
      color: #EFEFFC;
      text-align: center;
      margin-bottom: 64PX;
    }
    .b4-text1 {
      font-size: 26PX;
      font-weight: 600;
      color: #EFEFFC;
      text-align: center;
      margin-bottom: 16PX;
    }
    .b4-text2 {
      margin: 0 auto;
      width: 320PX;
      height: 80PX;
      font-size: 20PX;
      font-weight: 600;
      color: #787896;
      margin-bottom: 22PX;
      text-align: center;
    }
    .b4-img {
      width: 668PX;
      min-height: 744PX;
      display: block;
      margin: 0 auto;
    }
  }

}
</style>
