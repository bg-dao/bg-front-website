import * as THREE from "three"

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js"

let camera, scene, renderer
let width = 1200
let height = 620
let mixers = null
let oldMan = null
let newMan = null
let requestID = null
const clock = new THREE.Clock()
// width: 960px;
// height: 440px;

function init() {
  let container = document.getElementById("manScene")
  if (document?.body?.clientWidth < 1200) container = document.getElementById("manScene2")
  container.innerHTML = ""
  // document.getElementById("manScene").appendChild(container)
  // document.body.appendChild(container)

  camera = new THREE.PerspectiveCamera(45, width / height, 0.25, 20)
  camera.position.set(0, 0, 0)

  scene = new THREE.Scene()

  // const light = new THREE.AmbientLight(0x92231) // soft white light
  // scene.add(light)
  scene.background = new THREE.Color(0x1a1a27)

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x1a1a27)
  hemiLight.position.set(0, 0, 0)
  scene.add(hemiLight)

  const dirLight = new THREE.DirectionalLight(0xffffff)
  dirLight.position.set(0, 0, 0)
  scene.add(dirLight)

  // const loader = new GLTFLoader().setPath("man/")
  // // loader.load("RobotExpressive.glb", function (gltf) {
  // // loader.load("05.gltf", function (gltf) {
  // loader.load("01.gltf", function (gltf) {
  //   console.log("gltf is ", gltf)
  //   console.log("gltf dispose is ", gltf?.dispose)

  //   gltf.scene.scale.set(0.02, 0.02, 0.02)
  //   gltf.scene.rotation.y = Math.PI
  //   gltf.scene.position.set(0, -0.6, 0)

  //   // 随机一个动作播放
  //   const mixer = new THREE.AnimationMixer(gltf.scene)
  //   let action = mixer.clipAction(gltf.animations[parseInt(Math.random() * gltf.animations.length)])

  //   action.play()
  //   mixers = mixer

  //   // 多个动作
  //   // const animations = gltf.animations
  //   // mixers = []
  //   // const mixer = new THREE.AnimationMixer(gltf.scene)
  //   // const actions = []
  //   // for (var i = 0; i < animations.length; i++) {
  //   //   actions[i] = mixer.clipAction(animations[i])
  //   // }
  //   // // 播放
  //   // actions.forEach((action) => {
  //   //   action.play()
  //   // })
  //   // mixers.push(mixer)

  //   scene.add(gltf.scene)
  //   // render()
  // })

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  // renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setSize(width, height)
  // renderer.toneMapping = THREE.ACESFilmicToneMapping
  // renderer.toneMappingExposure = 1
  renderer.outputEncoding = THREE.sRGBEncoding
  container.appendChild(renderer.domElement)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.addEventListener("change", render) // use if there is no animation loop
  controls.minDistance = 2
  controls.maxDistance = 10
  controls.target.set(0, 0, -0.2)
  controls.update()

  // window.addEventListener("resize", onWindowResize)
}

function loadMan(url) {
  // oldMan && scene.remove(oldMan.scene)
  // mixers = null
  const loader = new GLTFLoader().setPath("three/man/")
  // loader.load("RobotExpressive.glb", function (gltf) {
  // loader.load("05.gltf", function (gltf) {
  // loader.load("01.gltf", function (gltf) {
  loader.load(url, function (gltf) {
    console.log("gltf is ", gltf)
    // console.log("gltf dispose is ", gltf?.dispose)

    gltf.scene.scale.set(0.02, 0.02, 0.02)
    gltf.scene.rotation.y = Math.PI
    gltf.scene.position.set(0, -0.6, 0)

    // 随机一个动作播放
    const mixer = new THREE.AnimationMixer(gltf.scene)
    let action = mixer.clipAction(gltf.animations[parseInt(Math.random() * gltf.animations.length)])

    action.play()
    mixers = mixer

    // 多个动作
    // const animations = gltf.animations
    // mixers = []
    // const mixer = new THREE.AnimationMixer(gltf.scene)
    // const actions = []
    // for (var i = 0; i < animations.length; i++) {
    //   actions[i] = mixer.clipAction(animations[i])
    // }
    // // 播放
    // actions.forEach((action) => {
    //   action.play()
    // })
    // mixers.push(mixer)

    // oldMan = newMan
    // newMan = gltf
    // if (!oldMan) oldMan = gltf
    scene.add(gltf.scene)
    render()
  })
}

function onWindowResize() {
  // camera.aspect = window.innerWidth / window.innerHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()

  // renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setSize(width, height)

  render()
}

//

function render() {
  renderer.render(scene, camera)
}

function animate() {
  // const dt = clock.getDelta();

  // if ( mixer ) mixer.update( dt );
  renderer.render(scene, camera)
  const mixerUpdateDelta = clock.getDelta()
  // 第一个动作
  mixers && mixers.update(mixerUpdateDelta)

  // 多个动作循环播放
  // if (mixers) mixers.forEach((mixer) => mixer.update(mixerUpdateDelta))

  requestID = requestAnimationFrame(animate)

  // stats.update()
}

function clear() {
  renderer.dispose()
  renderer.forceContextLoss()
  renderer.context = null
  renderer.domElement = null
  renderer = null
  if (requestID) window.cancelAnimationFrame(requestID)
}

function start(url) {
  init()
  loadMan(url)
  // render()
  animate()
  return {
    renderer,
    requestID,
  }
}

export default start
