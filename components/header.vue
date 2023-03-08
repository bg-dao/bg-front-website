<template>
  <div>
    <div class="headerPC flex flex-jus-between" v-show="!isMobile">
      <nuxt-link to="/">
        <img src="@/assets/img/logo.png" alt="logo" class="headerPC-logo" />
      </nuxt-link>

      <div class="headerPC-gap flex">
        <nuxt-link v-for="(item, index) in navList" :key="index" :to="item.router" class="headerPC-span" :class="{'headerPC-spanActive': item.routeName == $route.name}">{{ item.name }}</nuxt-link>
      </div>
    </div>
    <div v-show="isMobile">
      <div class="header flex flex-jus-between">
        <nuxt-link to="/">
          <img src="@/assets/img/logoPhone.png" alt="logo" class="header-logo" />
        </nuxt-link>

        <img src="@/assets/img/header/more.png" alt="more" class="header-more" @click="headerOverLay = true"/>
      </div>

      <div class="headerOverLay" v-show="headerOverLay">
        <div class="headerNav flex flex-jus-between">
          <nuxt-link to="/">
            <img src="@/assets/img/logoPhone.png" alt="logo" class="header-logo" />
          </nuxt-link>

          <img src="@/assets/img/header/more.png" alt="more" class="header-cancel" @click="headerOverLay = false"/>
        </div>

        <div class="headerOverLay-list">

          <div @click="headerOverLay = false">
            <nuxt-link v-for="(item, index) in navList" :key="index" :to="item.router" >
              <div class="headerOverLay-list__item flex flex-jus-between">
                <div>{{ item.name }}</div>
                <img src="@/assets/img/header/enter.png" alt="enter"  />
              </div>
            </nuxt-link>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "header",
  data() {
    return {
      headerOverLay: false,
      scrolNumber: 0,
    }
  },
  computed: mapState({
    isMobile: (state) => state.app.isMobile,
    navList: (state) => state.app.navList,
  }),
  // watch: {
  //   headerOverLay: {
  //     handler: function () {
  //       if (!document) return
  //       if (this.headerOverLay == true) document.documentElement.style.overflow = "hidden"
  //       else document.documentElement.style.overflow = "auto"
  //     },
  //     immediate: false,
  //   },
  // },
  mounted() {
    this.scrolNumber = document?.documentElement?.scrollTop || document?.body?.scrollTop || window.pageYOffset || 0
    window.addEventListener("scroll", this.scrollToTop)
    console.log(this.$route);
  },
  methods: {
    scrollToTop() {
      this.scrolNumber = document?.documentElement?.scrollTop || document?.body?.scrollTop || window.pageYOffset
    },
  },
}
</script>

<style lang="scss" scoped>
.headerPC {
  width: 1200px;
  height: 84px;
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
    color: #EFEFFC;
  }
}

/* prettier-ignore */
.headerPlaceholder  {
  width: 100%;
  height: 88PX
}
/* prettier-ignore */
.header {
  width: 100%;
  height: 88PX;
  padding: 0 48PX;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;

  .header-logo {
    width: 61PX;
    min-height: 32PX;
    display: block;
  }
  .header-more {
    width: 36PX;
    height: 36PX;
  }
}
/* prettier-ignore */
.headerOverLay {
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 100;
  top: 0;
  left: 0;
  background: #131322;
  padding: 0 24PX;
  .headerNav {
    width: 100%;
    height: 88PX;

    .header-logo {
      width: 61PX;
      min-height: 32PX;
      display: block;
    }
    .header-cancel {
      width: 36PX;
      height: 36PX;
    }
  }

  .headerOverLay-list {
    width: 100%;
    margin-top: 18PX;
    .headerOverLay-list__item {
      height: 100PX;
      font-size: 28PX;
      font-weight: 600;
      color: #EFEFFC;
      border-bottom: 1PX solid rgba(120,120,150,0.5);
      img {
        width: 36PX;
        height: 36PX;
      }
    }
  }
}
</style>
