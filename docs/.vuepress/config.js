module.exports = {
  base: '/blog/',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/en/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Weijuer Blog',
      description: 'Weijuer Blog'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Weijuer Blog',
      description: 'Weijuer Blog'
    }
  },
  // 默认主题配置
  themeConfig: {
    locales: {
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        // 最近更新时间
        lastUpdated: 'Last Updated',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [{
          text: 'Home',
          link: '/en/'
        }, {
          text: 'Guide',
          link: '/en/guide/'
        }, {
          text: 'Blog',
          link: '/en/blog/'
        }, {
          text: 'Music',
          link: '/en/music/'
        }, {
          text: 'Contact',
          link: '/en/contact/'
        }],
        sidebar: {
          '/': [ /* ... */ ],
          '/nested/': [ /* ... */ ]
        }
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        // 最近更新时间
        lastUpdated: '上次更新',
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [{
          text: '主页',
          link: '/zh/'
        }, {
          text: '指南',
          link: '/zh/guide/'
        }, {
          text: '日志',
          link: '/zh/blog/'
        }, {
          text: '音乐',
          link: '/zh/music/'
        }, {
          text: '关于我',
          link: '/zh/contact/'
        }],
        sidebar: {
          '/zh/': [ /* ... */ ],
          '/zh/nested/': [ /* ... */ ]
        }
      }
    }
  }
}