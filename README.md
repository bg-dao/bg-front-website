# BG 官网

## 前置要求

### Node

`node` 需要 `^16` 版本 (`node > 16 会出现问题`)

查看 node 版本

```shell
node -v
```

### 服务端静态渲染的服务器执行命令和流程（目前使用这种方法）

拉取代码

```shell
git pull
```

安装包

```shell
npm i
```

执行静态文件打包命令

```shell
npm run generate
```

复制文件 dist 文件下到指定的目录

### 服务端动态渲染的服务器执行命令和流程（目前暂时不使用）

确保 node 全局安装了`pm2`，或者有更好的进程守护也行。以下是安装 pm2 的命令

```shell
npm i -g pm2
```

拉取代码

```shell
git pull
```

安装包

```shell
npm i
```

执行静态文件打包命令

```shell
npm run generate
```

执行服务端的打包命令

```shell
npm run build
```

以下四个文件要拷贝到执行的环境
`.nuxt static nuxt.config.js package.json`
拷贝到执行的环境之后执行以下命令

```
npm i
pm2 delete "nuxt-BGOffice-ssr"
pm2 start npm --name "nuxt-BGOffice-ssr" -- run start
```

## 本地运行命令一览

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

```

```
如果有新加的包要先
npm shrinkwrap --dev
锁定包文件
```
