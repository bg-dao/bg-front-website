// console.log("env.js process.env.HOME is ", process.env.HOME)

module.exports = {
  // 开发环境
  dev: {
    NODE_ENV: "development",
    BASE_URL: process.env.BASE_URL ? process.env.BASE_URL : "/",
  },
  // 生产环境-test
  test: {
    NODE_ENV: "test",
    BASE_URL: process.env.BASE_URL ? process.env.BASE_URL : "/test/",
  },
  // 生产环境
  pro: {
    NODE_ENV: "production",
    BASE_URL: process.env.BASE_URL ? process.env.BASE_URL : "/",
  },
}
