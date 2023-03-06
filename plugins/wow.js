import { WOW } from "wowjs"
import Vue from "vue"

if (process.browser) {
  window.WOW = WOW
  // new WOW().init()
  Vue.prototype.$WOW = WOW
}
