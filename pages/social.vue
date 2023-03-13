<template>
  <div>
    <div class="socialPC" v-show="!isMobile">
      <section class="wow fadeInUp" data-wow-duration="1s">
        <div class="socialPC-block1">
          <img src="@/assets/img/social/block1_img1.png" alt="socialLine" class="block1-img1" />
          <img src="@/assets/img/social/block1_img2.png" alt="social" class="block1-img2" />
          <img src="@/assets/img/social/block1_img3.png" alt="socialLine" class="block1-img3" />
        </div>
      </section>

      <section class="wow fadeInUp" data-wow-duration="1s">
        <div class="socialPC-blcok2">
          <div class="block2-title">推荐、点赞、转发和评论</div>
          <div class="block2-boxLayout flext flex-jus-between">
            <div class="block2-box block2-box1"><img src="@/assets/img/social/block2_img1.png" alt="socialApp" /></div>
            <div class="block2-box block2-box2"><img src="@/assets/img/social/block2_img2.png" alt="socialApp" /></div>
            <div class="block2-box block2-box3"><img src="@/assets/img/social/block2_img3.png" alt="socialApp" /></div>
          </div>
        </div>
      </section>

      <section class="wow fadeInUp" data-wow-duration="1s">
        <div class="socialPC-blcok3">
          <div class="block3-title">AI化的3D数字人</div>
          <div class="block3-layout">
            <div class="block3-people">
              <div id="manScene" class="manScene"></div>
              <!-- <div class="people-arrowLeft" @click="nextMan(-1)"><img src="@/assets/img/social/arrowLeft.png" alt="arrowLeft" /></div>
              <div class="people-arrowRight" @click="nextMan(1)"><img src="@/assets/img/social/arrowRight.png" alt="arrowRight" /></div> -->
            </div>

            <div class="block3-step">
              <div class="step-stage"></div>
              <div class="flext flex-jus-around">
                <div class="step-people" @click="changeMan(0)" :class="{ 'step-peopleActive': manIndex == 0 }"><img src="@/assets/img/social/social_b3_people1.png" alt="social_b3_people1" /></div>
                <div class="step-people" @click="changeMan(1)" :class="{ 'step-peopleActive': manIndex == 1 }"><img src="@/assets/img/social/social_b3_people2.png" alt="social_b3_people1" /></div>
                <div class="step-people" @click="changeMan(2)" :class="{ 'step-peopleActive': manIndex == 2 }"><img src="@/assets/img/social/social_b3_people3.png" alt="social_b3_people1" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- <section class="wow fadeInUp" data-wow-duration="1s">
        <div class="socialPC-blcok4">
          <div class="block4-title">3D场景</div>
          <div class="block4-img"></div>
          <div class="block4-text">3D画廊：承载海量AI-NFT的图片</div>
          <div class="block4-img"></div>
          <div class="block4-text">3D音乐会：承载海量AI-NFT的音乐</div>
        </div>
      </section> -->
      <section class="wow fadeInUp" data-wow-duration="1s">
        <div class="socialPC-blcok5">
          <div class="block5-title">3D场景</div>
          <div class="block5-layout flex flex-jus-between">
            <div class="block5-box">
              <div class="block5-text">3D画廊：承载海量AI-NFT的图片</div>
              <div class="box-layout"><img src="@/assets/img/social/block5_box1.png" alt="3D画廊" class="box-img1" /></div>
            </div>
            <div class="block5-box">
              <div class="block5-text">3D音乐会：承载海量AI-NFT的音乐</div>
              <div class="box-layout"><img src="@/assets/img/social/block5_box2.png" alt="3D音乐会" class="box-img2" /></div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="social" v-show="isMobile">
      <section class="wow fadeInUp" data-wow-duration="1s"><img src="@/assets/img/social/social_b1.png" alt="social-b1" class="social-b1" /></section>

      <div class="social-b2">
        <div class="b2-title">发行、铸造和确权</div>
        <div class="b2-layout flext">
          <img src="@/assets/img/social/social_b2_box1.png" alt="social_b2_box1" class="b2-box b2-box1" />
          <img src="@/assets/img/social/social_b2_box2.png" alt="social_b2_box2" class="b2-box b2-box2" />
          <img src="@/assets/img/social/social_b2_box3.png" alt="social_b2_box3" class="b2-box b2-box3" />
        </div>
      </div>

      <div class="social-b3">
        <div class="b3-title">AI化的3D数字人</div>
        <div class="b3-people">
          <div class="manScene2" id="manScene2"></div>
          <!-- <div class="people-arrowLeft" @click="nextMan(-1)"><img src="@/assets/img/social/m_arrowLeft.png" alt="arrowLeft" /></div>
          <div class="people-arrowRight" @click="nextMan(1)"><img src="@/assets/img/social/m_arrowRight.png" alt="arrowRight" /></div> -->
        </div>

        <div class="b3-step">
          <div class="step-stage"></div>
          <div class="flext flex-jus-around">
            <div class="step-people" @click="changeMan(0)" :class="{ 'step-peopleActive': manIndex == 0 }"><img src="@/assets/img/social/social_b3_people1.png" alt="social_b3_people1" /></div>
            <div class="step-people" @click="changeMan(1)" :class="{ 'step-peopleActive': manIndex == 1 }"><img src="@/assets/img/social/social_b3_people2.png" alt="social_b3_people1" /></div>
            <div class="step-people" @click="changeMan(2)" :class="{ 'step-peopleActive': manIndex == 2 }"><img src="@/assets/img/social/social_b3_people3.png" alt="social_b3_people1" /></div>
          </div>
        </div>
      </div>

      <div class="social-b4">
        <div class="b4-title">3D场景</div>
        <div class="b4-layout">
          <div class="b4-text1">3D音乐会：承载海量AI-NFT的音乐</div>
          <div class="b4-box"><img src="@/assets/img/social/b4_box1.png" alt="b4_box1" class="box-img1" /></div>
          <div class="b4-text1">3D画廊：承载海量AI-NFT的图片</div>
          <div class="b4-box"><img src="@/assets/img/social/b4_box2.png" alt="b4_box2" class="box-img2" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import start from "@/three/man/man.js"
export default {
  layout: "default",
  name: "social",
  computed: mapState({
    isMobile: state => state.app.isMobile
  }),
  data() {
    return {
      manIndex: 0,
      manUrls: ["01.gltf", "02.gltf", "03.gltf"],
      clearObj: null
    }
  },
  mounted() {
    // import start from "@/three/man/man.js"
    new window.WOW().init()
    // console.log("This is current swiper instance object", this.mySwiper, "It will slideTo banners 3")
    // this.mySwiper.slideTo(3, 1000, false)

    // console.log("this.$axios", this.$axios)
    // this.fetchUrl()
    if (!this.clearObj) {
      this.clearObj = start(this.manUrls[0], this)
    }

  },
  methods: {
    nextMan(n) {
      // console.log("nextMan", n);
      this.changeMan((this.manIndex + n + this.manUrls.length) % this.manUrls.length)
    },
    changeMan(i) {
      // console.log("i is ", i)
      // state.clearWin()
      if (this.clearObj) {
        const { renderer, requestID } = this.clearObj
        // console.log("renderer is ", renderer, requestID)

        renderer?.dispose()
        renderer?.forceContextLoss()
        if (requestID) window.cancelAnimationFrame(requestID)
      }
      this.manIndex = i
      this.clearObj = start(this.manUrls[i], this)
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

  .socialPC-blcok3 {
    margin-top: 182px;
    .block3-title {
      width: 100%;
      text-align: center;
      font-size: 40px;
      font-weight: 600;
      color: #efeffc;
      margin-bottom: 64px;
    }
    .block3-layout {
      width: 1200px;
      margin: 0 auto;
    }
    .block3-people {
      width: 1200px;
      height: 620px;
      background: #1a1a27;
      border-radius: 12px;
      position: relative;
      z-index: 10;
      .manScene {
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 12px;
        ::v-deep canvas {
          border-radius: 12px;
        }
      }

      .people-arrowLeft {
        position: absolute;
        left: 24px;
        top: calc(50% - 20px);
        width: 40px;
        height: 40px;
        background: rgba(105, 103, 255, 0.09);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
          width: 16px;
          height: 16px;
        }
      }
      .people-arrowRight {
        position: absolute;
        right: 24px;
        top: calc(50% - 20px);
        width: 40px;
        height: 40px;
        background: #6967ff;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
          width: 16px;
          height: 16px;
        }
      }
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
        background-image: url("~@/assets/img/social/block3_stage.png");
        background-size: 100% 100%;
      }
      .step-people {
        position: relative;
        z-index: 5;
        width: 188px;
        height: 300px;
        // background-image: url("~@/assets/img/social/block3_peopleBG.png");
        background-image: none;
        background-size: 188px 240px;
        background-position-y: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
          width: 188px;
          // min-height: 200px;
        }
      }
      .step-peopleActive {
        background-image: url("~@/assets/img/social/block3_peopleBG.png");
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
      color: #efeffc;
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
      color: #efeffc;
      margin-bottom: 80px;
    }
  }

  .socialPC-blcok5 {
    margin-top: 200px;
    .block5-title {
      width: 100%;
      text-align: center;
      font-size: 40px;
      font-weight: 600;
      color: #efeffc;
      margin-bottom: 64px;
    }
    .block5-layout {
      width: 1200px;
      margin: 0 auto;
    }
    .block5-box {
      width: 572px;
      .box-layout {
        width: 572px;
        height: 454px;
        background-image: url("~@/assets/img/social/block5_boxBG.png");
        display: flex;
        align-items: center;
        justify-content: center;
        .box-img1 {
          width: 293px;
          min-height: 288px;
        }
        .box-img2 {
          width: 280px;
          min-height: 273px;
        }
      }
    }
    .block5-text {
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      color: #efeffc;
      margin-bottom: 23px;
    }
  }
}

/* prettier-ignore */
.social {
  .social-b1 {
    width: 100%;
    min-height: 448PX;
    display: block;
  }
  .social-b2 {
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

  .social-b3 {
    margin-top: 100PX;
    .b3-title {
      font-size: 40PX;
      font-weight: 600;
      color: #EFEFFC;
      text-align: center;
      margin-bottom: 64PX;
    }
    .b3-people {
      width: 702PX;
      height: 500PX;
      background: #1A1A27;
      border-radius: 12PX;
      margin: 0 auto;
      position: relative;
      .manScene2 {
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 12PX;
        ::v-deep canvas {
          border-radius: 12PX;
        }
      }
      .people-arrowLeft {
        position: absolute;
        left: 30PX;
        top: calc(50% - 32PX);
        width: 64PX;
        height: 64PX;
        background: rgba(105,103,255,0.09);
        border-radius: 12PX;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
          width: 50PX;
          height: 50PX;
        }
      }
      .people-arrowRight {
        position: absolute;
        right: 32PX;
        top: calc(50% - 32PX);
        width: 64PX;
        height: 64PX;
        background: #6967FF;
        border-radius: 12PX;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
          width: 50PX;
          height: 50PX;
          margin-left: 8PX;
        }
      }
    }

    .b3-step {
        position: relative;
        z-index: 10;
        width: 650PX;
        // height: 334px;
        margin: 0 auto;
        margin-top: 64PX;
        .step-stage {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 650PX;
          height: 54PX;
          background-image: url("~@/assets/img/social/b3_stage.png");
          background-size: 100% 100%;
        }
        .step-people {
          position: relative;
          z-index: 5;
          width: 188PX;
          height: 300PX;
          // background-image: url("~@/assets/img/social/block3_peopleBG.png");
          background-image: none;
          background-size: 188PX 240PX;
          background-position-y: 30PX;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 188PX;
            // min-height: 200px;
          }
        }
        .step-peopleActive {
          background-image: url("~@/assets/img/social/block3_peopleBG.png");
        }
      }

  }

  .social-b4 {
    margin-top: 120PX;
    margin-bottom: 73PX;
    position: relative;
    z-index: 6;
    .b4-title {
      font-size: 40PX;
      font-weight: 600;
      color: #EFEFFC;
      text-align: center;
      margin-bottom: 64PX;
    }
    .b4-layout {
      padding: 0 23PX;
    }
    .b4-text1 {
      font-size: 20PX;
      font-weight: 600;
      color: #787896;
      margin-bottom: 23PX;
      text-align: center;
    }
    .b4-box {
      background-image: url('~@/assets/img/social/b4_boxBG.png');
      width: 704PX;
      min-height: 454PX;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 47PX;
      .box-img1 {
        width: 293PX;
        min-height: 288PX;
      }
      .box-img2 {
        width: 293PX;
        min-height: 288PX;
      }
    }
  }
}
</style>
