<template>
  <div>
    <div class="defaultLayoutPC" :class="{'defaultLayoutPCHome': $route.name == 'index'}">
      <!-- <div class="defaultLayoutPC" v-if="!isMobile"> -->
      <Header></Header>
      <Nuxt />
      <vFooter></vFooter>
      <scrollBall></scrollBall>
    </div>
    <!-- <div class="defaultLayout" v-else>
      <Header></Header>
      <Nuxt />
      <vFooter></vFooter>
      <scrollBall></scrollBall>
    </div> -->
  </div>
</template>

<script>
import Header from "@/components/header.vue"
import vFooter from "@/components/vFooter.vue"
import scrollBall from "@/components/scrollBall.vue"
import { mapState } from "vuex"
export default {
  name: "DefaultLayout",
  components: {
    Header,
    vFooter,
    scrollBall,
  },
  computed: mapState({
    isMobile: (state) => state.app.isMobile,
  }),
  mounted() {
    // if (!this.isMobile) this.slideChangeTransitionEnd()
    // new window.WOW().init()
    // new window.WOW().init()

    window.addEventListener("resize", this.checkMobile)
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMobile)
  },
  methods: {
    checkMobile() {
      let isMobile = false
      if (document?.body?.clientWidth < 1200) isMobile = true
      this.$store.dispatch("app/setIsMobile", isMobile)
    },
  },
}
</script>

<style lang="scss">
body {
  background-color: #131322;
}
.defaultLayoutPC {
  color: #000;
  min-height: 100vh;
  background-color: #131322;
  background-image: url('~@/assets/img/bg.png');
  background-size: 100% auto;
}
.defaultLayoutPCHome {
  background-image: none;
}
</style>
