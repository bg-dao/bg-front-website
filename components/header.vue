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
  watch: {
    headerOverLay: {
      handler: function () {
        if (!document) return
        if (this.headerOverLay == true) document.documentElement.style.overflow = "hidden"
        else document.documentElement.style.overflow = "auto"
      },
      immediate: false,
    },
  },
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  &.header-scroll {
    background-color: #202a3c;
  }
  .header-logo {
    width: 100PX;
    height: 40PX;
  }
  .header-more {
    width: 44PX;
    height: 44PX;
  }
}
/* prettier-ignore */
.headerOverLay {
  position: fixed;
  width: 100%;
  height: 150vh;
  overflow: hidden;
  z-index: 10;
  top: 0;
  left: 0;
  background: #202a3c;
  .headerOverLay-top {
    width: 100%;
    height: 88PX;
    padding: 0 48PX;
    padding-right: 0;
  }
  .headerOverLay-cancelLayout {
    width: 130PX;
    height: 88PX;
  }
  .headerOverLay-logo {
    width: 100PX;
    height: 40PX;
  }
  .headerOverLay-cancel {
    width: 44PX;
    height: 44PX;
  }

  .headerOverLay-list {
    margin-top: 20PX;
    &__item {
      height: 110PX;
      padding: 0 48PX;
      font-size: 28PX;
      font-weight: 600;
      color: #ffffff;
      border-bottom: 1PX solid rgba(48, 58, 81, 1);
      img {
        width: 44PX;
        height: 44PX;
      }
    }
  }
}
</style>
