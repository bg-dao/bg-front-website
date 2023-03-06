import env from "./env"
// console.log("process.env.HOME  is ", process.env.HOME)
// console.log("process.env.HOME  is ", process.env.NODE_ENV)

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "BG官网",
    htmlAttrs: {
      lang: "en",
    },
    meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover" }, { hid: "description", name: "description", content: "一站式AI创作、数字资产化和展示平台，创新结合前沿技术，探索创作者经济新模式，让每个人真正拥有自己的价值，致力成为一流的创新价值服务平台" }, { name: "format-detection", content: "telephone=no" }, { name: "keywords", content: "BG,bg,官网,BG官网,区块链,区块链技术,数字藏品,元宇宙,数藏平台,dna,dna作品,一站式AI创作,AI创作,AI,数字资产化" }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  env: {
    // ...env[process.env.NODE_ENV],
    NODE_ENV: process.env.NODE_ENV,
    BC_URL: env[process.env.NODE_ENV].BC_URL,
    HOME: env[process.env.NODE_ENV].HOME,
    BASE_API: env[process.env.NODE_ENV].BASE_API,
    USER: env[process.env.NODE_ENV].USER,
    PWD: env[process.env.NODE_ENV].PWD,
  },
  server: {
    port: 13030, // default: 3000
    host: "0.0.0.0",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/css/flex.css", "~assets/css/animate.css", "swiper/dist/css/swiper.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/swiper", ssr: false },
    { src: "@/plugins/store", ssr: false },
    // { src: "@/plugins/wow", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      // 添加插件名称作为键，参数作为值
      plugins: {
        "postcss-px-to-viewport": {
          unitToConvert: "PX", // 默认值`px`，需要转换的单位
          viewportWidth: 750, // 视窗的宽度,对应设计稿宽度
          viewportHeight: 1334, // 视窗的高度, 根据375设备的宽度来指定，一般是667，也可不配置
          unitPrecision: 6, // 指定`px`转换为视窗单位值的小数位数
          propList: ["*"], // 转化为vw的属性列表
          viewportUnit: "vw", // 指定需要转换成视窗单位
          fontViewportUnit: "vw", // 字体使用的视窗单位
          selectorBlaskList: [".ignore-"], // 指定不需要转换为视窗单位的类
          mediaQuery: false, // 允许在媒体查询中转换`px`
          minPixelValue: 1, // 小于或等于`1px`时不转换为视窗单位
          replace: true, // 是否直接更换属性值而不添加备用属性
          exclude: [], // 忽略某些文件夹下的文件或特定文件
          landscape: false, // 是否添加根据landscapeWidth生成的媒体查询条件 @media (orientation: landscape)
          landscapeUnit: "vw", // 横屏时使用的单位
          landscapeWidth: 1200, // 横屏时使用的视窗宽度
        },
      },
      preset: {
        // 更改postcss-preset-env 设置
        autoprefixer: {},
      },
    },
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   // const vueLoader = config.module.rules.find((loader) => loader.loader === "vue-loader")
    //   // console.log("vueLoader.options is ", vueLoader)

    //   // /* 把audio标签在编译时转成src属性 */
    //   // vueLoader.options.transformToRequire = {
    //   //   audio: "src",
    //   // }
    //   /* 对mp3等格式的文件用url-loader进行处理 */
    //   config.module.rules.push({
    //     test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    //     loader: "url-loader",
    //     options: {
    //       limit: 10000,
    //       name: process.env.NODE_ENV === "production" ? path.posix.join("./", "media/[name].[hash:7].[ext]") : path.posix.join("./", "media/[name].[hash:7].[ext]"),
    //     },
    //   })
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: "pre",
    //       test: /\.(js|vue)$/,
    //       loader: "eslint-loader",
    //       exclude: /(node_modules)/,
    //     })
    //   }
    // },
  },
}
