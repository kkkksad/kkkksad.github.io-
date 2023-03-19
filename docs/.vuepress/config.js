module.exports = {
    title: '小康のhome',
    description: '没有bug,就没有伤害',
    theme: 'reco',
    themeConfig: {
        author: "kkkksad",
        nav: [
            { text: "首页", link: "/" },
            {
                text: "kkkksad 的博客",
                items: [
                    { text: "Gitee", link: "https://gitee.com/" },
                    { text: "Github", link: "https://github.com/kkkksad/kkkksad.github.io-" }
                ]
            }
        ],
        locales: {
            "/": {
                lang: "zh-CN",
            },
        },
        // sidebar: [
        //     {
        //         title: "欢迎学习",
        //         path: "/",
        //         collapsable: false,  // 是否折叠
        //         children: [{ title: "博客简介", path: "/" }],
        //     },
        //     {
        //         title: "JavaScript",
        //         path: "/blogs/1",
        //         collapsable: true,
        //         children: [
        //             { title: "第一篇", path: "/blogs/1" },
        //             { title: "第二篇", path: "/blogs/2" },
        //         ]
        //     }
        // ]
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: "博客", // 默认文案 “分类”
            },
            tag: {
                location: 4, // 在导航栏菜单中所占的位置，默认4
                text: "Tag", // 默认文案 “标签”
            },
        }
    }
}