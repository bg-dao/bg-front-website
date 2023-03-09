import * as THREE from "three"

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js"
import JoyStick from "./joystick"

let camera, renderer, scene
let controls
let pointLight1, pointLight2, pointLight3
let pointLight4, pointLight5, pointLight6
let pointLight7
let ambientLight
let clock = new THREE.Clock()

let player, activeCamera
let speed = 6 //移动速度
let turnSpeed = 2
let move = {
  forward: 0,
  turn: 0,
}

let colliders = [] //碰撞物
let debugMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
})

let arrowHelper1, arrowHelper2
let joystick //移动设备控制器

// 控制的画廊
let gallery, galleryScene
// 画廊图片
let imgArr = ["ai/15.png", "ai/1.png", "ai/2.png", "ai/3.png", "ai/4.png", "ai/5.png", "ai/6.png", "ai/7.png", "ai/8.png", "ai/9.png", "ai/10.png", "ai/11.png", "ai/12.png", "ai/13.png", "ai/14.png", "ai/15.png", "ai/16.png", "ai/17.png", "ai/18.png"]

let videoPlay = false
// 视频
let video

let colliderUrl = "three/model/collider.glb"
// let galleryUrl = "three/model/art3.gltf"
let galleryUrl = "three/model/ai.gltf"
// let galleryUrl = "three/model/gallery.glb"

function init() {
  createScene()
  // createColliders()
  createObjects()
  createPlayer()
  createCamera()
  createLights()
  //createLightHelpers()
  //createControls()
  createEvents()
  createJoyStick()
  // hdrLoad()
  render()

  if (window.innerWidth > 700) window.addEventListener("click", onMouseClick, false)
  if (window.innerWidth < 700) window.addEventListener("touchstart", onMouseClick, false)
}

function hdrLoad() {
  // return
  // const rgbeLoader = new RGBELoader()
  //资源较大，使用异步加载
  // rgbeLoader.loadAsync("three/hdr/bg3.jpg").then((texture) => {
  new THREE.TextureLoader().loadAsync("three/hdr/bg3.jpg").then((texture) => {
    // setTimeout(() => {
    //   texture.mapping = THREE.EquirectangularReflectionMapping
    //   //将加载的材质texture设置给背景和环境
    //   scene.background = texture
    //   scene.environment = texture
    // }, 3000)
    texture.mapping = THREE.EquirectangularReflectionMapping
    //将加载的材质texture设置给背景和环境
    scene.background = texture
    // scene.environment = texture
  })
}

// 鼠标点击
function onMouseClick(e) {
  let event = e
  if (event.type == "touchstart") event = e.targetTouches[0]

  var raycaster = new THREE.Raycaster()
  var mouse = new THREE.Vector2()
  //将鼠标点击位置的屏幕坐标转换成threejs中的标准坐标
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

  // let x = (event.clientX / window.innerWidth) * 2 - 1
  // let y = (event.clientY / window.innerHeight) * 2 + 1
  // let standardVector = new THREE.Vector3(x, y, 1) // 标准设备坐标

  // // 标准设备坐标转世界坐标

  // let worldVector = standardVector.unproject(camera)

  // // 射线投射方向单位向量(worldVector坐标减相机位置坐标)

  // let ray = worldVector.sub(camera.position).normalize()

  // // 创建射线投射器对象

  // let raycaster = new THREE.Raycaster(camera.position, ray)

  // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
  raycaster.setFromCamera(mouse, camera)

  console.log("galleryScene", galleryScene)
  console.log("galleryScene--child", galleryScene.children)

  // 获取raycaster直线和所有模型相交的数组集合
  var intersects = raycaster.intersectObjects(galleryScene.children)
  console.log(raycaster, "raycaster")

  if (intersects?.length > 0 && intersects[0].object.name.includes("picture")) {
    console.log(intersects[0].object.cIndex, "找到了，", intersects[0].object)
    // if (intersects[0].object.cIndex == 1) {
    //   let video = document.getElementById("video1")
    //   console.log("video is ", [video], video.pause)
    //   video.muted = !video.muted
    //   video.play()
    //   // let texture = new THREE.VideoTexture(video)
    //   // texture.encoding = THREE.sRGBEncoding
    //   // texture.flipY = false
    //   // const material = new THREE.MeshPhongMaterial({
    //   //   map: texture,
    //   // })
    //   // intersects[0].object.material = material
    //   return
    // }

    // const index = parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
    const index = parseInt(Math.random() * imgArr.length - 1 + 1, 10)
    const texture = new THREE.TextureLoader().load(`/three/img/${imgArr[index]}`)
    texture.encoding = THREE.sRGBEncoding
    texture.flipY = false
    // console.log("texture is ", texture)
    const material = new THREE.MeshPhongMaterial({
      map: texture,
    })
    // child.cIndex = index
    intersects[0].object.material = material

    // const pos = intersects[0].object.position.clone()
    // const pos = intersects[0].object.getWorldPosition(new THREE.Vector3()).clone()
    // // pos.y += 2
    // console.log("摄像头 pos is ", pos)

    // // camera.lookAt(intersects[0].object.position)
    // // camera.lookAt(new THREE.Vector3(10, 0, 20))
    // // console.log("player.position", player.position)
    // player.position.set(pos.x, pos.y, pos.z)
    console.log("intersects[0].object.position", intersects[0].object.position)
    console.log("player.position", player.position)
  }
  //将所有的相交的模型的颜色设置为红色
  // for (var i = 0; i < intersects.length; i++) {
  //   // intersects[i].object.material.color.set(0xff0000)
  //   console.log(intersects[i].object, "-找到了，")
  // }
  // camera.lookAt(intersects[0].object.position)
}

function createJoyStick() {
  joystick = new JoyStick({
    onMove: function (forward, turn) {
      turn = -turn
      if (Math.abs(forward) < 0.3) forward = 0
      if (Math.abs(turn) < 0.1) turn = 0
      move.forward = forward
      move.turn = turn
    },
  })
}

function createEvents() {
  document.addEventListener("keydown", onKeyDown)
  document.addEventListener("keyup", onKeyUp)
}

function createColliders() {
  // const loader = new THREE.GLTFLoader()
  const loader = new GLTFLoader()
  loader.load(colliderUrl, (gltf) => {
    // loader.load("/three/model/collider.glb", (gltf) => {
    gltf.scene.traverse((child) => {
      if (child.name.includes("collider")) {
        colliders.push(child)
      }
    })
    colliders.forEach((item) => {
      item.visible = false
      scene.add(item)
    })
  })
}

function onKeyDown(event) {
  switch (event.code) {
    case "ArrowUp":
    case "KeyW":
      move.forward = 1
      break

    case "ArrowLeft":
    case "KeyA":
      move.turn = turnSpeed
      break

    case "ArrowDown":
    case "KeyS":
      move.forward = -1
      break

    case "ArrowRight":
    case "KeyD":
      move.turn = -turnSpeed
      break
    case "Space":
      break
  }
}

function onKeyUp(event) {
  switch (event.code) {
    case "ArrowUp":
    case "KeyW":
      move.forward = 0
      break

    case "ArrowLeft":
    case "KeyA":
      move.turn = 0
      break

    case "ArrowDown":
    case "KeyS":
      move.forward = 0
      break

    case "ArrowRight":
    case "KeyD":
      move.turn = 0
      break
  }
}

function createPlayer() {
  const geometry = new THREE.BoxGeometry(1, 2, 1)
  const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true,
  })
  player = new THREE.Mesh(geometry, material)
  player.name = "player"
  geometry.translate(0, 1, 0)
  // renwu
  player.position.set(1, 0.7, 17)
  // player.position.set(1, 9.7, 17)
  // scene.add(player)
}

function createCamera() {
  const back = new THREE.Object3D()
  back.position.set(0, 2, 1)

  back.parent = player
  //player.add(back)
  activeCamera = back
}

function createScene() {
  renderer = new THREE.WebGLRenderer({
    antialias: true,
  })
  renderer.outputEncoding = THREE.sRGBEncoding
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  // 启用阴影，调整阴影类型
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  // renderer.shadowMap.enabled = true
  // renderer.shadowMap.type = THREE.PCFSoftShadowMap

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000)
  // camera.position.set(-10, 2, 10)
  camera.position.set(1, 2.7, 18)

  scene = new THREE.Scene()

  const container = document.querySelector("#container")
  container.appendChild(renderer.domElement)

  window.addEventListener("resize", onResize)
}

function createLights() {
  // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
  // directionalLight.castShadow = true
  // directionalLight.shadow.mapSize.height = 512 * 2
  // directionalLight.shadow.mapSize.width = 512 * 2
  // // 解决暗影
  // // 0.00 <---> 0.05 最好的区间
  // directionalLight.shadow.bias = 0.05 // 平面
  // directionalLight.shadow.normalBias = 0.05 // 圆形表面，缩小受影响的网格，使其不会在自身上投射阴影
  // scene.add(directionalLight)
  // guangxian
  ambientLight = new THREE.AmbientLight(0xe0ffff, 0.6)
  scene.add(ambientLight)
  // pointLight1 = new THREE.PointLight(0xe0ffff, 0.1, 20)
  // pointLight1.position.set(-2, 3, 2)
  // scene.add(pointLight1)
  // pointLight2 = new THREE.PointLight(0xe0ffff, 0.1, 20)
  // pointLight2.position.set(0, 3, -6)
  // scene.add(pointLight2)
  // pointLight3 = new THREE.PointLight(0xe0ffff, 0.1, 20)
  // pointLight3.position.set(-12, 3, 6)
  // scene.add(pointLight3)
  // pointLight4 = new THREE.PointLight(0xe0ffff, 0.1, 20)
  // pointLight4.position.set(-12, 4, -4)
  // scene.add(pointLight4)
  // pointLight5 = new THREE.PointLight(0xe0ffff, 0.1, 20)
  // pointLight5.position.set(12, 4, -8)
  // scene.add(pointLight5)
  // pointLight6 = new THREE.PointLight(0xe0ffff, 0.1, 20)
  // pointLight6.position.set(12, 4, 0)
  // scene.add(pointLight6)
  // pointLight7 = new THREE.PointLight(0xe0ffff, 0.1, 20)
  // pointLight7.position.set(12, 4, 8)
  // scene.add(pointLight7)
}

function createLightHelpers() {
  const pointLightHelper1 = new THREE.PointLightHelper(pointLight1, 1)
  scene.add(pointLightHelper1)

  const pointLightHelper2 = new THREE.PointLightHelper(pointLight2, 1)
  scene.add(pointLightHelper2)

  const pointLightHelper3 = new THREE.PointLightHelper(pointLight3, 1)
  scene.add(pointLightHelper3)

  const pointLightHelper4 = new THREE.PointLightHelper(pointLight4, 1)
  scene.add(pointLightHelper4)

  const pointLightHelper5 = new THREE.PointLightHelper(pointLight5, 1)
  scene.add(pointLightHelper5)

  const pointLightHelper6 = new THREE.PointLightHelper(pointLight6, 1)
  scene.add(pointLightHelper6)

  const pointLightHelper7 = new THREE.PointLightHelper(pointLight7, 1)
  scene.add(pointLightHelper7)
}

function createControls() {
  // controls = new THREE.OrbitControls(camera, renderer.domElement)
  controls = OrbitControls(camera, renderer.domElement)
}

function createObjects() {
  // const loader = new THREE.GLTFLoader()
  const loader = new GLTFLoader()
  loader.load(galleryUrl, (gltf) => {
    // loader.load("three/model/gallery.glb", (gltf) => {
    console.log("GLTFLoader 加载完成", gltf)
    gallery = gltf
    galleryScene = gltf.scene

    gltf.scene.traverse((child) => {
      // console.log("child.name is ", child.name, child)
      // if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
      //   child.castShadow = true
      //   child.receiveShadow = true
      // }
      if (child.name.includes("casement_window")) {
        child.material.color.set(0xe0ffff)
        // child.color.set(0xe0ffff)
        // child.layers.enable(BLOOM_LAYER)
        // const light = new THREE.PointLight(0xe0ffff, 1, 100)
        // light.position.set(child.position.x, child.position.y, child.position.z)
        // scene.add(light)
      }
      if (child.name.includes("obstacle")) {
        colliders.push(child)
      }
      if (child.name.includes("obstacle_wall")) {
        // initWalls(child)
      }
      if (child.name.includes("pointolite")) {
        // child.visible = false
        // console.log("pointolite child ", child)
        // child.color = new THREE.Color(0xe0ffff)
        child.intensity = 0.03
        // child.intensity = 1111
      } else {
        child.receiveShadow = true
        child.castShadow = true
      }
      if (child.name.includes("picture")) {
        initDraws(child)
      }
      if (child.name.includes("spotlight")) {
        // child.visible = false
        // console.log("child spotlight is ", child)
        child.intensity = 0.8
        child.position.y += 2
      }

      return
      switch (child.name) {
        case "walls":
          initWalls(child)
          break
        case "stairs":
          initStairs(child)
          break
      }
      //设置展画边框贴图
      if (child.name.includes("paint")) {
        initFrames(child)
      }
      //设置展画图片贴图
      if (child.name.includes("draw")) {
        initDraws(child)
      }
    })
    scene.add(gltf.scene)

    hdrLoad()
  })
}

function initDraws(child) {
  // console.log("initDraws is ", child)

  let index = parseInt(child.name.split("_")[1])
  let indexOri = index

  // if (index == 1) {
  //   console.log("chils 2 的是", child)

  //   video = document.getElementById("video1")

  //   // video.addEventListener("play", () => {
  //   //   //播放开始执行的函数
  //   //   videoPlay = true
  //   // })
  //   // video.addEventListener("pause", () => {
  //   //   // 暂停播放执行的函数
  //   //   videoPlay = false
  //   // })
  //   // video.addEventListener("pause", () => {
  //   //   //播放开始执行的函数
  //   //   videoPlay = false
  //   // })
  //   video?.play()

  //   let texture = new THREE.VideoTexture(video)
  //   texture.encoding = THREE.sRGBEncoding
  //   texture.flipY = false
  //   const material = new THREE.MeshPhongMaterial({
  //     map: texture,
  //   })
  //   child.indexOri = indexOri
  //   child.cIndex = index
  //   child.material = material
  //   return
  // }
  if (isNaN(index)) index = parseInt(Math.random() * imgArr.length - 1 + 1, 10)
  // if (index > 18) index = 13
  if (index > 18) index = parseInt(Math.random() * imgArr.length - 1 + 1, 10)
  // const index = child.name.split("draw")[1]
  const texture = new THREE.TextureLoader().load(`/three/img/${imgArr[index]}`)

  texture.encoding = THREE.sRGBEncoding
  texture.flipY = false
  // console.log("texture is ", texture)
  const material = new THREE.MeshPhongMaterial({
    map: texture,
  })
  child.cIndex = index
  child.indexOri = indexOri
  child.material = material
}

function initFrames(child) {
  child.material = new THREE.MeshBasicMaterial({
    color: 0x7f5816,
    wireframe: true,
  })
}

function initStairs(child) {
  child.material = new THREE.MeshStandardMaterial({
    color: 0xd1cdb7,
  })
  child.material.roughness = 0.5
  child.material.metalness = 0.6
}

function initWalls(child) {
  child.material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
  })
  child.material.roughness = 0.5
  child.material.metalness = 0.6
}

function onResize() {
  const w = window.innerWidth
  const h = window.innerHeight
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.setSize(w, h)
}

function render() {
  const dt = clock.getDelta()
  update(dt)
  renderer.render(scene, camera)
  window.requestAnimationFrame(render)
}

function update(dt) {
  updatePlayer(dt)
  updateCamera(dt)
}

function updatePlayer(dt) {
  const pos = player.position.clone()
  pos.y += 2
  let dir = new THREE.Vector3()

  player.getWorldDirection(dir)
  dir.negate()

  if (move.forward < 0) dir.negate()
  let raycaster = new THREE.Raycaster(pos, dir)
  let blocked = false

  if (colliders.length > 0) {
    const intersect = raycaster.intersectObjects(colliders)
    if (intersect.length > 0) {
      if (intersect[0].distance < 1) {
        blocked = true
      }
    }
  }

  // if(colliders.length > 0) {
  //   //左方向碰撞监测
  //   dir.set(-1, 0, 0)
  //   dir.applyMatrix4(player.matrix)
  //   dir.normalize()
  //   raycaster = new THREE.Raycaster(pos, dir)

  //   let intersect = raycaster.intersectObjects(colliders)
  //   if(intersect.length > 0) {
  //     if(intersect[0].distance < 2) {
  //       player.translateX(2 - intersect[0].distance)
  //     }
  //   }

  //   //右方向碰撞监测
  //   dir.set(1, 0, 0)
  //   dir.applyMatrix4(player.matrix)
  //   dir.normalize()
  //   raycaster = new THREE.Raycaster(pos, dir)

  //   intersect = raycaster.intersectObjects(colliders)
  //   if(intersect.length > 0) {
  //     if(intersect[0].distance < 2) {
  //       player.translateX(intersect[0].distance - 2)
  //     }
  //   }
  // }

  if (!blocked) {
    if (move.forward !== 0) {
      if (move.forward > 0) {
        player.translateZ(-dt * speed)
      } else {
        player.translateZ(dt * speed * 0.5)
      }
    }
  }

  if (move.turn !== 0) {
    player.rotateY(move.turn * dt)
  }
  // console.log("player.position is ", player.position)
}

function updateCamera(dt) {
  //更新摄像机
  camera.position.lerp(activeCamera.getWorldPosition(new THREE.Vector3()), 0.08)
  const pos = player.position.clone()
  pos.y += 2
  camera.lookAt(pos)

  // console.log("camera.position is ", camera.position)
}

// init()
export default init
