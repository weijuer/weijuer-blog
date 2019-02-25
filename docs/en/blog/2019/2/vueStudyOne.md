---
sidebarDepth: 2
---

# 踩坑之路：Vue2+VueRouter2+webpack 构建项目实战（一）准备工作

> 既然你来到了这里，肯定你知道vue是什么，那么我们一起来踩坑吧。
> 
> 废话不多说。

## 一、环境准备

### **1.安装****nodejs+npm**

不知道的童鞋可以去百度，直接去[node.js官网](https://nodejs.org/zh-cn/)下载一个node.js，直接安装就可以了，默认node.js中就集成了**npm；**

安装好nodejs 之后，在终端下面输入命令`node -v`会有版本号出来。就说明安装成功了。输入`npm -v`也会有版本号出来，就说明，`npm`也已经安装好了。

### **2.安装cnpm淘宝镜像** ,之后可以使用 `cnpm` 代替 `npm`

> _**为何使用**_
> 
> 由于国内链接github可能速度会比较慢。我们可以使用国内淘宝提供的 `cnpm` 镜像源来进行安装
> 
> **_如何使用_**   
> 有很多方法来配置npm的registry地址，下面根据不同情境列出几种比较常用的方法。以淘宝cnpm镜像举例：

#### 2.1.临时使用 (以安装express为例 )

```
npm install express --registry https://registry.npm.taobao.org
```

#### 2.2.持久使用（修改npm的配置文件）

```
npm config set registry https://registry.npm.taobao.org
```

配置后可通过下面方式来验证是否成功 

```bash
npm config get registry
```

或 

```bash
npm info express
```

#### 2.3.通过使用cnpm

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

使用

```bash
cnpm install express
```

### 3.安装vue，临时使用淘宝镜像

```
npm install -g vue --registry=https://registry.npm.taobao.org
```

**4.安装webpack** 

```
npm install -g webpack
```

### **5.安装vue脚手架** 

`vue-cli`是vue的脚手架工具。我们首先，需要安装`vue-cli`。命令如下：

```bash
npm install -g vue-cli
```

\- \- \- \- \- \- \- \- \- \- \- \- \- \- \- \-✂\- \- \- \- \- \- \- \- \- \- \- \- \- \-✂\-\- \- \- \- \- \- \-\- \- \- \- \- \- \- \-✂\- \- \- \- \- \- \-\- \- \- \- \- \- \- \- -

—————————— 如果第二次编写新的vue项目，就可以在这里开始了———————————

## **二、创建项目** 

### 1.利用vue-cli脚手架，初始化vue项目

```
vue init webpack 项目名字<项目名字不能用中文>
```

### **2.些初始化的设置，如下输入:** 

```bash
? Project name vue-test (项目名称)
? Project description 我只是比你来坑的早，相信我你也可以！
? Author weijuer <ch_weijuer@163.com> (项目作者)
? Vue build standalone (编译器)
? Install vue-router? Yes (vue-router路由)
? Use ESLint to lint your code? Yes (是否启用静态js代码检查)
? Pick an ESLint preset Standard (检查风格-使用标准Standard)
? Set up unit tests No(单元测试不需要) 
? Setup e2e tests with Nightwatch? No(单元测试不需要) 
```

### **3.打开终端** **进入项目** 

```
cd 项目名字
```

### **4.安装项目依赖** 

```
npm install
```

### **5.安装 vue 路由模块vue-router和网络请求模块vue-resource**

注：–save-dev 是你开发时候依赖的东西，–save 是你发布之后还依赖的东西 ，对于网络请求模块**vue-resource（**vue-resources不再更新了，vue作者尤大推荐axios**）**

```
npm install vue-router vue-resource –save
```

#### 5.1 axios模块安装

使用 npm 安装 axios，**-S**即**--save**的缩写形式

npm install axios -S

### **6.启动项目** 

```
npm run dev
```

### **7.发布项目** 

```
npm run build
```