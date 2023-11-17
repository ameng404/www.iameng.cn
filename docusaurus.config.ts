import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import footer from './footer';

const config: Config = {
  title: 'Hello, I am Ameng!',
  tagline: '科技改变世界，技术成就未来！',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://iameng.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ameng404', // Usually your GitHub org/user name.
  projectName: 'www.iameng.cn', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://iameng.cn/docs/intro',
      },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://iameng.cn/blog',
      },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Ameng',
      logo: {
        alt: 'ameng logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        {to: '/blog', label: '博客', position: 'left'},
        {to: '/about', label: '关于', position: 'left' },
        {
          href: 'https://github.com/ameng404',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '社交媒体',
          items: [
            {
              label: '知乎',
              href: 'https://www.zhihu.com/people/yin-meng-51-78',
            },
            {
              label: '掘金',
              href: 'https://juejin.cn/user/2752832847498935',
            },
            {
              label: 'CSDN',
              href: 'https://blog.csdn.net/qq_35858704',
            },
            {
              label: '博客园',
              href: 'https://www.cnblogs.com/ameng666/',
            },
            {
              label: '哔哩哔哩',
              href: 'https://space.bilibili.com/23202023',
            },
          ],
        },
        {
          title: '友情链接',
          items: [
            {
              label: '阮一峰',
              href: 'http://www.ruanyifeng.com/',
            },
            {
              label: '张鑫旭',
              href: 'https://www.zhangxinxu.com/',
            },
            {
              label: '阿西河',
              href: 'https://www.axihe.com/',
            },
            {
              label: '峰华',
              href: 'https://zxuqian.cn/',
            },
            {
              label: '大漠',
              href: 'https://www.w3cplus.com/',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ameng404',
            },
          ],
        },
      ],
      copyright: footer,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
