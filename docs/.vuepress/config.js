
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
    if (fs.statSync(subPath).isDirectory()) {
      return {
        ...currentFile,
        children: getSiderChildren(`${parentName}/${file}`),
      };
    }
  });
  return files.filter((item) => item);
}

const getSortList = (parentName) => {
  const list = getSiderChildren(parentName);
  return [...new Set([`/${parentName}/`, ...list])];
};

const getSiderList = () => {
  let siderObj = {};
  const siderFiles = fs.readdirSync(workPath).filter((file) => !ignoreSiderList.includes(file));
  for (let val of siderFiles) {
    siderObj = {
      ...siderObj,
      [`/${val}/`]: getSortList(val),
    };
  }
  return siderObj;
};

const sidebar = getSiderList();

const base = '/';
// const base = '/note/';

module.exports = {
  title: 'qd blog',
  description: '前端相关知识',
  base,
  port: 9199,
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  plugins: [
    ['@vuepress/medium-zoom', true],
    ['@vuepress/back-to-top', true],
    ['vuepress-plugin-code-copy', true],
  ],
  smoothScroll: true,
  editLinks: true,
  themeConfig: {
    sidebarDepth: 2,
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
    nav: [
      { text: 'React', link: '/react/' },
      { text: 'Leetcode', link: '/leetcode/' },
      {
        text: '数据结构',
        link: '/algorithm/',
      },
      { text: '可视化', link: '/visual/' },
      { text: '工程化', link: '/engineering/' },
      {
        text: 'JS',
        link: '/javascript/',
        items: [
          {
            text: 'js进阶',
            items: [
              { text: '《设计模式》', link: '/design-mode/' },
              { text: '《js运行》', link: '/js-advanced/' },
            ],
          },
          {
            text: 'js基础',
            items: [
              {
                text: '《js代码片段》',
                link: '/javascript/2-代码片段/代码片段-2',
              },
              {
                text: '《常用正则》',
                link: '/javascript/3-常用正则/emoji',
              },
              {
                text: '《常用问题》',
                link: '/javascript/4-常见问题/qa',
              },
              {
                text: '《js重要类型》',
                link: '/javascript/1-重要类型/Map',
              },
            ],
          },
        ],
      },
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
    sidebar,
  },
};