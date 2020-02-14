module.exports = {
    title: 'Peng の Blog',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }]
    ],
    description: 'kongyubo blog',
    themeConfig: {
        nav: [
            // 网站导航
            { text: '首页', link: '/' },
            { text: '导航', link: '/goto/' },
            { text: 'GitHub', link: 'https://github.com/kongyubo/kongyubo.github.io' },
        ],
        sidebar: {
            // 显示侧边导航
            "/goto/": [""],
            "/web/HTML/": [""],
            "/web/CSS/": [""]
        }
    }
}