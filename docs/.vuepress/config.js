module.exports = {
  title: 'Weijuer\'s Blog', // 设置网站标题
  description: 'Weijuer\'s Blog',
  base: '/',
  themeConfig: {
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: 'Guide',
      link: '/guide/'
    }, {
      text: 'Blog',
      link: '/blog/'
    }, {
      text: 'Music',
      link: '/music/'
    }, {
      text: 'Languages',
      items: [{
        text: '中文',
        link: '/language/chinese/'
      }, {
        text: 'English',
        link: '/language/english/'
      }]
    }, {
      text: 'Contact',
      link: '/contact/'
    }],
    sidebar: [],
    // 最近更新时间
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: true // Boolean | Object, 默认值是 undefined.
      // 如果设置为 true, 默认的文本配置将是: 
      // updatePopup: { 
      //    message: "New content is available.", 
      //    buttonText: "Refresh" 
      // }
    }
  }
}