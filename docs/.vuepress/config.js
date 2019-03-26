module.exports = {
  // index
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
    repo: 'weijuer/blog/',
    locales: {
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        lastUpdated: 'Last Updated',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: require('./nav/en'),
        sidebar: {
          '/en/blog/': [
            // /en/blog/
            '',
            // /en/blog/2019/2/introJSX.html
            '2019/2/introJSX',
            '2019/2/vueStudyOne',
          ],
          '/en/guide/': [
            '',
            '',
          ]
        }
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
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
        nav: require('./nav/zh'),
        sidebar: {
          '/zh/blog/': [
            // /en/blog/
            '',
            // /zh/blog/2019/2/introJSX.html
            '2019/2/introJSX',
            '2019/2/vueStudyOne',
            '2019/2/vueStudyTwo',
          ],
          '/zh/guide/': [
            '',
            'components/button',
          ]
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/zh.js',
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@styles': 'styles'
      }
    }
  }
}