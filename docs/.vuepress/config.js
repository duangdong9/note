const fs = require('fs');
const path = require('path');
const process = require('process');

const ignoreList = ['.DS_Store'];
const ignoreSiderList = ['.vuepress', '.DS_Store', 'README.md', 'temp'];

const workPath = path.join(process.cwd() + '/docs');

function getSiderChildren(parentName) {
  const currentPath = path.join(workPath + `/${parentName}`);
  const filterFiles = fs.readdirSync(currentPath).filter((file) => !ignoreList.includes(file));
  const files = filterFiles.map((file) => {
    if (file === 'README.md') {
      return `/${parentName}/`;
    }
    if (file.endsWith('.md')) {
      const fileName = file.split('.')[0];
      return `/${parentName}/${fileName}`;
    }
    let currentFile = { title: file };
    const subPath = `${currentPath}/${file}`;
    if(fs.statSync(subPath).isDirectory()) {
        return {
            ...currentFile,
            children: getSiderChildren(`${parentName}/${file}`)
        }
    }
  });
  return files.filter(item => item)
}

const getSortList  = (parentName) => {
    const list = getSiderChildren(parentName);
    return [...new Set([`/${parentName}/`, ...list])]
}

const getSiderList = () => {
    let siderObj = {};
    const siderFiles = fs.readdirSync(workPath).filter((file) => !ignoreSiderList.includes(file));
    for(let val of siderFiles) {
        siderObj = {
            ...siderObj,
            [`/${val}/`]: getSortList(val)
        }
    }
    return siderObj;
}
  
const sidebar = getSiderList();

module.exports = {
    title: 'qd blog',
    description: '前端相关知识',
    base: '/blog/',
    port: 9199,
    head: [['link', { rel: 'icon', href: '/logo.png' }]],
    plugins: [
        ['@vuepress/medium-zoom', true],
        ['@vuepress/back-to-top', true],
    ],
    smoothScroll: true,
    editLinks: true,
    themeConfig: {
      sidebarDepth: 2,
      searchMaxSuggestions: 10,
      lastUpdated: '上次更新',
      nav: [
        { text: 'React', link: '/react/' },
        { text: '算法和数据结构', link: '/leetcode/' },
        { text: '可视化', link: '/visual/' },
        { text: '工程化', link: '/engineering/' },
        { text: 'JS', link: '/javascript/' },
        { text: 'Node', link: '/node/' },
        { text: 'TS', link: '/typescript/' },
        { text: 'CSS', link: '/c3/' },
        { text: '随笔', link: '/essay/' },
        { text: 'Vue', link: '/vue/' },
        { text: '小程序', link: '/mini-program/' },
        {
          text: '个人链接',
          ariaLabel: '个人链接',
          items: [
            { text: '优质链接', link: '/link/' },
            { text: '博客', link: 'http://qdzhou.cn/', target: '_blank' },
            { text: '语雀', link: 'https://www.yuque.com/xdxmvy' },
            { text: 'Github', link: 'https://github.com/ZQD1224', target: '_blank' },
          ],
        },
      ],
      sidebar
    },
  };


//   [
//     {
//       title: '性能优化',
//       children: ['性能优化/性能优化'],
//     },
//     {
//       title: 'Hooks',
//       children: ['Hooks/reducer'],
//     },
//     {
//       title: '源码',
//       children: ['源码解析/fiber', '源码解析/生命周期'],
//     },
//     '错误边界',
//   ]
