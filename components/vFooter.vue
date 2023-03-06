<template>
  <div>
    <div class="vFooterPC PC" v-show="!isMobile">
    </div>
    <div class="vFooter" v-show="isMobile">
      
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "vFooter",
  data() {
    return {
      navList: ["index", "chain", "ai", "dna", "meta", "about"],
    }
  },
  computed: mapState({
    isMobile: (state) => state.app.isMobile,
  }),
}
</script>

<style lang="scss" scoped>
/* prettier-ignore */
/* prettier-ignore */
</style>
