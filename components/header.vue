<template>
  <div>
    <div class="headerPC PC flex" v-show="!isMobile">

    </div>
    <div v-show="isMobile">

    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "headerPC",
  data() {
    return {
      navList: ["index", "chain", "ai", "dna", "meta", "about"],
      headerOverLay: false,
      scrolNumber: 0,
    }
  },
  computed: mapState({
    isMobile: (state) => state.app.isMobile,
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
  width: 100%;
  height: 88px;
  position: relative;
  z-index: 3;
  .headerPC-layout {
    width: 1140px;
    margin: 0 auto;
    .headerPC-logoLayout {
      width: 88px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .headerPC-logo {
      width: 71px;
      height: 28px;
      cursor: pointer;
    }
    .headerPC-navList {
      gap: 70px;
      font-size: 16px;
      font-weight: 400;
      // color: #bdcaed;
      color: #bdd6ed;
      a {
        color: #bdd6ed;
      }
      a:hover {
        color: #ffffff;
      }
      .navActive {
        color: #ffffff;
      }
    }
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
