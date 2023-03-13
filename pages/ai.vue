<template>
  <div>
    <div class="aiPC" v-show="!isMobile">
      <section class="wow fadeInUp" data-wow-duration="1s">
        <div class="aiPC-blcok1"><img src="~@/assets/img/ai/blcok1.png" alt="ai" /></div>
      </section>

      <section class="wow fadeInUp" data-wow-duration="1s">
        <div class="aiPC-block2">
          <div class="block2-boxLayout flex flex-jus-between">
            <div class="block2-box flex">
              <img src="@/assets/img/ai/block2_img1.png" alt="gpt" />
              <div>
                <div class="box-text1">基于GPT-3多样化的微调模型</div>
                <div class="box-text2" style="line-height: 36px;margin-top: 10px;">
                  1.生成提示，辅助创作AI图片
                  <br />
                  2.生成歌词，辅助创作AI音乐
                  <br />
                  3.社交场景，聊天和评论等
                </div>
              </div>
            </div>
            <div class="block2-box flex">
              <img src="@/assets/img/ai/block2_img2.png" alt="Stable Diffusion" />
              <div>
                <div class="box-text1">基于Stable Diffusion多样化的微调模型</div>
                <div class="box-text2" style="line-height: 30px;margin-top: 5px;">
                  1.二次元、朋克、Robo、吉卜力和LowPoly等不 同风格的图片系列
                  <br />
                  2.图片系列基础上，探索生成相关联的音乐、视频 和3D模型
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="wow fadeInUp" data-wow-duration="1s">
        <div class="aiPC-block3">
          <div class="block3-title">AI图片</div>
          <div class="block3-boxLayout flex flex-jus-between">
            <div class="block3-box">
              <div class="flex flex-wrap flex-jus-between" style="gap:24px">
                <img src="@/assets/img/ai/block3_img1.png" alt="aiImg" class="box-img" />
                <img src="@/assets/img/ai/block3_img2.png" alt="aiImg" class="box-img" />
                <img src="@/assets/img/ai/block3_img3.png" alt="aiImg" class="box-img" />
                <img src="@/assets/img/ai/block3_img4.png" alt="aiImg" class="box-img" />
              </div>
              <div class="box-text1">原创系列</div>
            </div>
            <div class="block3-box">
              <div class="flex flex-wrap flex-jus-between" style="gap:24px">
                <img src="@/assets/img/ai/block3_img5.png" alt="aiImg" class="box-img" />
                <img src="@/assets/img/ai/block3_img6.png" alt="aiImg" class="box-img" />
                <img src="@/assets/img/ai/block3_img7.png" alt="aiImg" class="box-img" />
                <img src="@/assets/img/ai/block3_img8.png" alt="aiImg" class="box-img" />
              </div>
              <div class="box-text1">二次创作系列</div>
            </div>
          </div>
        </div>
      </section>

      <section class="wow fadeInUp" data-wow-duration="1s">
        <div class="aiPC-block4">
          <div class="block4-title">AI音乐</div>
          <div class="block4-musicLayout flex flex-jus-between">
            <div class="block4-music">
              <img src="@/assets/img/ai/block4_music1.png" alt="music" class="music-img" />
              <img src="@/assets/img/ai/block4_musicPlay.png" alt="musicPlay" class="music-icon" v-show="!musicStatusList[0]" @click="playMusic('music1', 0)" />
              <img src="@/assets/img/ai/block4_musicStop.png" alt="musicStop" class="music-icon" v-show="musicStatusList[0]" @click="stopMusic('music1', 0)" />
              <video preload="none" playsinline ref="music1"><source src="/video/AI-Music-01.wav" /></video>
            </div>
            <div class="block4-music">
              <img src="@/assets/img/ai/block4_music2.png" alt="music" class="music-img" />
              <img src="@/assets/img/ai/block4_musicPlay.png" alt="musicPlay" class="music-icon" v-show="!musicStatusList[1]" @click="playMusic('music2', 1)" />
              <img src="@/assets/img/ai/block4_musicStop.png" alt="musicStop" class="music-icon" v-show="musicStatusList[1]" @click="stopMusic('music2', 1)" />
              <video preload="none" playsinline ref="music2"><source src="/video/AI-Music-02.wav" /></video>
            </div>
            <div class="block4-music">
              <img src="@/assets/img/ai/block4_music3.png" alt="music" class="music-img" />
              <img src="@/assets/img/ai/block4_musicPlay.png" alt="musicPlay" class="music-icon" v-show="!musicStatusList[2]" @click="playMusic('music3', 2)" />
              <img src="@/assets/img/ai/block4_musicStop.png" alt="musicStop" class="music-icon" v-show="musicStatusList[2]" @click="stopMusic('music3', 2)" />
              <video preload="none" playsinline ref="music3"><source src="/video/AI-Music-03.wav" /></video>
            </div>
            <div class="block4-music">
              <img src="@/assets/img/ai/block4_music4.png" alt="music" class="music-img" />
              <img src="@/assets/img/ai/block4_musicPlay.png" alt="musicPlay" class="music-icon" v-show="!musicStatusList[3]" @click="playMusic('music4', 3)" />
              <img src="@/assets/img/ai/block4_musicStop.png" alt="musicStop" class="music-icon" v-show="musicStatusList[3]" @click="stopMusic('music4', 3)" />
              <video preload="none" playsinline ref="music4"><source src="/video/AI-Music-04.wav" /></video>
            </div>
          </div>
        </div>
      </section>

      <section class="wow fadeInUp" data-wow-duration="1s">
        <div class="aiPC-block5">
          <div class="block5-title">AI视频</div>
          <div class="block5-video">
            <!-- <video ref="video" id="video" src=""></video> -->
            <!-- <video preload="none" poster="/video/ai-videoPoster.png" id="video2" playsinline controls loop controlslist="nodownload noremoteplayback" @click="playVideo" ref="video"><source src="/video/ai-video.mp4" type="video/mp4" /></video> -->
            <video preload="none" id="video" ref="video" poster="/video/ai-videoPoster.png" playsinline controls loop controlslist="nodownload noremoteplayback" @click="playVideo"><source src="/video/ai-video.mp4" type="video/mp4" /></video>
          </div>
        </div>
      </section>
    </div>

    <div class="ai" v-show="isMobile">
      <section class="wow fadeInUp" data-wow-duration="1s"><img src="@/assets/img/ai/b1_bg.png" alt="aiBG" /></section>

      <section class="wow fadeInUp" data-wow-duration="1s">
        <div class="ai-b2">
          <div class="b2-box flex">
            <img src="@/assets/img/ai/b2_img1.png" alt="b2_img1" />
            <div>
              <div class="box-tex1">基于GPT-3多样化的微调模型</div>
              <div class="box-tex2">
                1.生成提示，辅助创作AI图片
                <br />
                2.生成歌词，辅助创作AI音乐
                <br />
                3.社交场景，聊天和评论等
              </div>
            </div>
          </div>
          <div class="b2-box flex">
            <img src="@/assets/img/ai/b2_img2.png" alt="b2_img2" />
            <div>
              <div class="box-tex1">基于Stable Diffusion多样化的微调模型</div>
              <div class="box-tex2">
                1.二次元、朋克、Robo、吉卜力和LowPoly等不同风格的图片系列
                <br />
                2.图片系列基础上，探索生成相关联的音乐、视频和3D模型
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="wow fadeInUp" data-wow-duration="1s">
        <div class="ai-b3">
          <div class="b3-title">AI图片</div>
          <div class="b3-box">
            <div class="box-gap flex flex-wrap flex-jus-between">
              <img src="@/assets/img/ai/block3_img1.png" alt="block3_img" />
              <img src="@/assets/img/ai/block3_img2.png" alt="block3_img" />
              <img src="@/assets/img/ai/block3_img3.png" alt="block3_img" />
              <img src="@/assets/img/ai/block3_img4.png" alt="block3_img" />
            </div>
            <div class="box-text1">原创系列</div>
          </div>
          <div class="b3-box">
            <div class="box-gap flex flex-wrap flex-jus-between">
              <img src="@/assets/img/ai/block3_img5.png" alt="block3_img" />
              <img src="@/assets/img/ai/block3_img6.png" alt="block3_img" />
              <img src="@/assets/img/ai/block3_img7.png" alt="block3_img" />
              <img src="@/assets/img/ai/block3_img8.png" alt="block3_img" />
            </div>
            <div class="box-text1">二次创作系列</div>
          </div>
        </div>
      </section>
      <section class="wow fadeInUp" data-wow-duration="1s">
        <div class="ai-b4">
          <div class="b4-title">AI音乐</div>
          <div class="b4-gap flex flex-wrap flex-jus-between">
            <div class="b4-music">
              <img src="@/assets/img/ai/block4_music1.png" alt="music-img" class="music-img" />
              <img src="@/assets/img/ai/block4_musicPlay.png" alt="musicPlay" class="music-icon" v-show="!musicStatusList[0]" @click="playMusic('music1', 0)" />
              <img src="@/assets/img/ai/block4_musicStop.png" alt="musicStop" class="music-icon" v-show="musicStatusList[0]" @click="stopMusic('music1', 0)" />
            </div>
            <div class="b4-music">
              <img src="@/assets/img/ai/block4_music2.png" alt="music-img" class="music-img" />
              <img src="@/assets/img/ai/block4_musicPlay.png" alt="musicPlay" class="music-icon" v-show="!musicStatusList[1]" @click="playMusic('music2', 1)" />
              <img src="@/assets/img/ai/block4_musicStop.png" alt="musicStop" class="music-icon" v-show="musicStatusList[1]" @click="stopMusic('music2', 1)" />
            </div>
            <div class="b4-music">
              <img src="@/assets/img/ai/block4_music3.png" alt="music-img" class="music-img" />
              <img src="@/assets/img/ai/block4_musicPlay.png" alt="musicPlay" class="music-icon" v-show="!musicStatusList[2]" @click="playMusic('music3', 2)" />
              <img src="@/assets/img/ai/block4_musicStop.png" alt="musicStop" class="music-icon" v-show="musicStatusList[2]" @click="stopMusic('music3', 2)" />
            </div>
            <div class="b4-music">
              <img src="@/assets/img/ai/block4_music4.png" alt="music-img" class="music-img" />
              <img src="@/assets/img/ai/block4_musicPlay.png" alt="musicPlay" class="music-icon" v-show="!musicStatusList[3]" @click="playMusic('music4', 3)" />
              <img src="@/assets/img/ai/block4_musicStop.png" alt="musicStop" class="music-icon" v-show="musicStatusList[3]" @click="stopMusic('music4', 3)" />
            </div>
          </div>
        </div>
      </section>
      <section class="wow fadeInUp" data-wow-duration="1s">
        <div class="ai-b5">
          <div class="b5-title">AI视频</div>
          <div class="b5-video">
            <!-- <video ref="video2" id="video2" src=""></video> -->
            <video preload="none" poster="/video/ai-videoPoster.png" playsinline ref="video2" id="video2" controls loop controlslist="nodownload noremoteplayback"><source src="/video/ai-video.mp4" type="video/mp4" /></video>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  layout: "default",
  name: "ai",
  computed: mapState({
    isMobile: state => state.app.isMobile
  }),
  data() {
    return {
      musicStatusList: [false, false, false, false],
      musicRefsList: ["music1", "music2", "music3", "music4"]
    }
  },
  mounted() {
    new window.WOW().init()
    let video = document.getElementById("video")
    video.addEventListener("play", () => {
      this.playVideo()
    })
    let video2 = document.getElementById("video2")
    video2.addEventListener("play", () => {
      this.playVideo()
    })
  },
  beforeDestroy() {
    let video = document.getElementById("video")
    video.removeEventListener("play", () => {
      this.playVideo()
    })
    let video2 = document.getElementById("video2")
    video2.removeEventListener("play", () => {
      this.playVideo()
    })
  },
  methods: {
    playVideo() {
      this.musicRefsList.forEach(item => {
        this.$refs[item].pause()
      })
      this.musicStatusList = [false, false, false, false]
      this.$forceUpdate()
    },
    playMusic(refName, musicIndex) {
      this.$refs.video.pause()
      this.$refs.video2.pause()
      this.musicRefsList.forEach(item => {
        this.$refs[item].pause()
      })
      this.musicStatusList = [false, false, false, false]
      this.$refs[refName].play()
      this.musicStatusList[musicIndex] = true
      this.$forceUpdate()
    },
    stopMusic(refName, musicIndex) {
      this.musicStatusList = [false, false, false, false]
      this.$refs[refName].pause()
      this.$forceUpdate()
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
  position: relative;
  z-index: 6;
  .aiPC-blcok1 {
    padding-top: 215px;
    width: 417px;
    min-height: 50px;
    margin: 0 auto;
  }
  .aiPC-block2 {
    margin-top: 6px;
    width: 100%;
    max-width: 1406px;
    height: 459px;
    margin: 0 auto;
    background-image: url("~@/assets/img/ai/block2BG.png");
    background-size: 100% auto;
    padding-top: 211px;
    .block2-boxLayout {
      width: 1200px;
      margin: 0 auto;
    }
    .block2-box {
      width: 572px;
      height: 208px;
      background-image: url("~@/assets/img/ai/block2box.png");
      background-size: 100% 100%;
      padding: 31px 33px;
      img {
        width: 148px;
        margin-right: 25px;
      }
      .box-text1 {
        font-size: 18px;
        font-weight: 600;
        color: #efeffc;
      }
      .box-text2 {
        font-size: 18px;
        font-weight: 600;
        color: #787896;
      }
    }
  }

  .aiPC-block3 {
    margin-top: 160px;
    .block3-title {
      width: 100%;
      text-align: center;
      font-size: 40px;
      font-weight: 600;
      color: #efeffc;
      margin-bottom: 63px;
    }
    .block3-boxLayout {
      width: 1200px;
      margin: 0 auto;
    }
    .block3-box {
      width: 572px;
      height: 622px;
      background-image: url("~@/assets/img/ai/block3BG.png");
      background-size: 100% 100%;
      padding: 25px;
      .box-img {
        width: 249px;
        height: 249px;
      }
      .box-text1 {
        font-size: 18px;
        font-weight: 600;
        color: #efeffc;
        margin-top: 24px;
        text-align: center;
      }
    }
  }

  .aiPC-block4 {
    margin-top: 200px;
    .block4-title {
      font-size: 40px;
      font-weight: 600;
      color: #efeffc;
      text-align: center;
      width: 100%;
      margin-bottom: 63px;
    }
    .block4-musicLayout {
      width: 1200px;
      margin: 0 auto;
    }
    .block4-music {
      width: 257px;
      height: 257px;
      background-size: 100% 100%;
      background-image: url("~@/assets/img/ai/block4_musicBG.png");
      position: relative;

      .music-img {
        position: absolute;
        left: calc(50% - 90px);
        top: calc(50% - 90px);
        width: 180px;
        height: 180px;
        border-radius: 50%;
      }
      .music-icon {
        width: 64px;
        height: 64px;
        position: absolute;
        left: calc(50% - 32px);
        top: calc(50% - 32px);
        cursor: pointer;
        z-index: 5;
      }
    }
  }

  .aiPC-block5 {
    margin-top: 200px;
    .block5-title {
      font-size: 40px;
      font-weight: 600;
      color: #efeffc;
      text-align: center;
      width: 100%;
      margin-bottom: 63px;
    }
    .block5-video {
      width: 620px;
      height: 620px;
      margin: 0 auto;
      border-radius: 12px;
      // background-color: aqua;
      video {
        width: 620px;
        height: 620px;
        border-radius: 12px;
      }
    }
  }
}
/* prettier-ignore */
.ai {
  .ai-b1 {
    width: 100%;
    min-height: 448PX;
    display: block;
  }
  .ai-b2 {
    width: 100%;
    padding: 23PX;
    margin-top: 40PX;
    .b2-box {
      width: 704PX;
      height: 257PX;
      background-image: url('~@/assets/img/ai/b2_box.png');
      padding: 25PX 40PX;
      margin-bottom: 47PX;
      img {
        width: 148PX;
        min-height: 75PX;
        margin-right: 33PX;
      }
      .box-tex1 {
        font-size: 25PX;
        font-weight: 600;
        color: #EFEFFC;
        margin-bottom: 10PX;
      }
      .box-tex2 {
        font-size: 20PX;
        font-weight: 600;
        color: #787896;
        line-height: 40PX;
        word-break: break-all;
      }
    }
  }

  .ai-b3 {
    margin-top: 93PX;
    padding: 0 23PX;
    .b3-title {
      font-size: 40PX;
      font-weight: 600;
      color: #EFEFFC;
      text-align: center;
      margin-bottom: 63PX;
    }
    .b3-box {
      width: 704PX;
      height: 762PX;
      background-image: url('~@/assets/img/ai/b3_bg.png');
      margin-bottom: 46PX;
      padding: 25PX;
      .box-gap {
        gap: 24PX;
      }
      img {
        width: 315PX;
        height: 315PX;
      }
      .box-text1 {
        margin-top: 24PX;
        text-align: center;
        font-size: 24PX;
        font-weight: 600;
        color: #EFEFFC;
      }
    }
  }

  .ai-b4 {
    margin-top: 74PX;
    padding: 0 23PX;
    .b4-title {
      font-size: 40PX;
      font-weight: 600;
      color: #EFEFFC;
      text-align: center;
      margin-bottom: 63PX;
    }
    .b4-gap {
      gap: 46PX;
    }
    .b4-music {
      width: 329PX;
      height: 329PX;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url('~@/assets/img/ai/b4_musicBG.png');
      .music-img {
        width: 220PX;
        height: 220PX;
        border-radius: 50%;
      }
      .music-icon {
        width: 64PX;
        height: 64PX;
        position: absolute;
        left: calc(50% - 32PX);
        top: calc(50% - 32PX);
        cursor: pointer;
      }
    }
  }

  .ai-b5 {
    position: relative;
    z-index: 6;
    margin-top: 120PX;
    margin-bottom: 120PX;
    .b5-title {
      font-size: 40PX;
      font-weight: 600;
      color: #EFEFFC;
      text-align: center;
      width: 100%;
      margin-bottom: 63PX;
    }
    .b5-video {
      width: 702PX;
      height: 702PX;
      margin: 0 auto;
      border-radius: 12PX;
      video {
        width: 702PX;
        height: 702PX;
        border-radius: 12PX;
      }
      // background-color: aqua;
    }
  }

}
</style>
