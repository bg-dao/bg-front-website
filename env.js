// console.log("env.js process.env.HOME is ", process.env.HOME)

module.exports = {
  // 开发环境
  dev: {
    NODE_ENV: "development",
    HOME: process.env.HOME ? process.env.HOME : "dev---",
    USER: process.env.USER ? process.env.USER : "dUSER---",
    PWD: process.env.PWD ? process.env.PWD : "dPWD---",
    BC_URL: process.env.BC_URL ? process.env.BC_URL : "http://test-meta.web3ssc.com:32582",
    BASE_API: process.env.BASE_API ? process.env.BASE_API : "http://test-meta.web3ssc.com:32582", // 开发服务器地址
  },
  // 生产环境
  pro: {
    NODE_ENV: "production",
    HOME: process.env.HOME ? process.env.HOME : "---",
    USER: process.env.USER ? process.env.USER : "USER---",
    PWD: process.env.PWD ? process.env.PWD : "PWD---",
    BC_URL: process.env.BC_URL ? process.env.BC_URL : "OPS_DOMAIN_NAME",
    BASE_API: process.env.BASE_API ? process.env.BASE_API : "OPS_DOMAIN_NAME", // 正式服务器地址
  },
}
