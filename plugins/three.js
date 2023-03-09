import * as THREE from "three"

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js"
// import start from "@/three/man/man.js"
import Vue from "vue"

if (process.browser) {
  window.THREE = THREE
  window.OrbitControls = OrbitControls
  window.GLTFLoader = GLTFLoader
  window.RGBELoader = RGBELoader
  // new WOW().init()
  Vue.prototype.$THREE = THREE
  Vue.prototype.$OrbitControls = OrbitControls
  Vue.prototype.$GLTFLoader = GLTFLoader
  Vue.prototype.$RGBELoader = RGBELoader
  // Vue.prototype.$people_start = start
}
