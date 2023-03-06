<template>
  <div>
    <div class="vFooterPC" v-show="!isMobile" :style="{'margin-top': mart + 'px'}">
      <img src="@/assets/img/vFooter/bg.png" alt="footerbg" class="vFooterPC-img" />
      <div class="vFooterPC-layout">
        <div class="headerPC flex flex-jus-between">
          <nuxt-link to="/"><img src="@/assets/img/logo.png" alt="logo" class="headerPC-logo" /></nuxt-link>

          <div class="headerPC-gap flex">
            <nuxt-link v-for="(item, index) in navList" :key="index" :to="item.router" class="headerPC-span" :class="{ 'headerPC-spanActive': item.routeName == $route.name }">{{ item.name }}</nuxt-link>
          </div>
        </div>

        <div class="vFooterPC-line"></div>

        <div class="flex flex-jus-between">
          <div>@2023 BG All rights reserved</div>
          <nuxt-link to="/" style="color: #787896;">CONTACT US</nuxt-link>
        </div>
      </div>
    </div>
    <div class="vFooter" v-show="isMobile"></div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "vFooter",
  data() {
    return {
      mart: -850
    }
  },
  computed: {
    ...mapState({
      isMobile: state => state.app.isMobile,
      navList: state => state.app.navList
    })
  },
  mounted() {
    this.checkMart()
    window.addEventListener('resize', this.checkMart)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMart)
  },
  methods: {
    checkMart() {
      if (document?.body?.clientWidth) this.mart = (850 / 1777) * document?.body?.clientWidth * -1
    }
  }
}
</script>

<style lang="scss" scoped>
.vFooterPC {
  position: relative;
  margin-top: -850px;
  .vFooterPC-layout {
    width: 1200px;
    margin: 0 auto;
    position: absolute;
    bottom: 140px;
    left: calc(50% - 600px);
    z-index: 5;
    font-size: 16px;
    font-weight: 400;
    color: #787896;
    .headerPC {
      width: 1200px;
      margin: 0 auto;
      position: relative;
      z-index: 5;
      .headerPC-logo {
        width: 70px;
      }
      .headerPC-gap {
        gap: 74px;
      }
      .headerPC-span {
        font-size: 18px;
        font-weight: 600;
        color: #787896;
      }
      .headerPC-spanActive {
        color: #efeffc;
      }
    }

    .vFooterPC-line {
      width: 1200px;
      height: 1px;
      background: #787896;
      margin-top: 22px;
      margin-bottom: 20px;
    }
  }

  .vFooterPC-img {
    width: 100%;
    // position: absolute;
    // bottom: 0;
    // left: 0;
  }
}
/* prettier-ignore */
/* prettier-ignore */
</style>
