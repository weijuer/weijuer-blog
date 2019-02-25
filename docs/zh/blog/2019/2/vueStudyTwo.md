---
sidebarDepth: 2
---

# 踩坑之路：Vue2+VueRouter2+webpack 构建项目实战（二）项目目录解析

>在《[踩坑之路：Vue2+VueRouter2+webpack 构建项目实战（一）准备](/zh/blog/2019/2/vueStudyOne)》中，我们通过安装 `nodejs` 系统环境，以及> `vue-cli` 脚手架工具，在执行完命令后，我们就已经将一个初始项目跑起来了。

\- \- \- \- \- \- \- \- \- \- \- \- \- \- \- \-✂\- \- \- \- \- \- \- \- \- \- \- \- \- \-✂\-\- \- \- \- \- \- \-\- \- \- \- \- \- \- \-✂\- \- \- \- \- \- \-\- \- \- \- \- \- \- \- -

这个章节，我们先来认识一下所有的文件。

# 2.1.1 项目结构

![docs](/blog/assets/img/pages/blog/2019/2/vueStudy-2.png)

```
├── README.md                   // 项目说明文档
├── node_modules                // 项目依赖包文件夹
├── build                       // 编译配置文件
│   ├── build.js
│   ├── check-versions.js
│   ├── logo.png
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config                      // 项目基本设置文件夹
│   ├── dev.env.js              // 开发配置文件
│   ├── index.js                // 配置主文件
│   └── prod.env.js             // 编译配置文件
├── index.html                  // 项目入口文件
├── package-lock.json           // npm5新增文件，优化性能
├── package.json                // 项目依赖包配置文件
├── src                         // 我们的项目的源码编写文件
│   ├── App.vue                 // APP入口文件
│   ├── assets                  // 初始项目资源目录
│   │   └── logo.png
│   ├── components              // 组件目录
│   │   └── HelloWorld.vue           // 测试组件
│   ├── main.js                 // 主配置文件
│   └── router                  // 路由配置文件夹
│       └── index.js            // 路由配置文件
└── static                      // 静态资源放置目录
```

如上，就是我们的 `vue` 初始化后得到的一个项目的完整结构。其他大多数文件我们是不用管的。