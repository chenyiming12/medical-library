import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://chenyiming12.github.io',
  base: '/medical-library',
  integrations: [
    starlight({
      title: '医学学习资料库',
      description: '中西医临床医学学生的课程复习、文献笔记和 PDF 资料知识库。',
      customCss: ['./src/styles/custom.css'],
      head: [
        {
          tag: 'script',
          content:
            "try{if(!localStorage.getItem('starlight-theme')){localStorage.setItem('starlight-theme','light');document.documentElement.dataset.theme='light';}}catch{}",
        },
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      sidebar: [
        { label: '首页', slug: '' },
        { label: '资料库', slug: 'library' },
        { label: '课程分类', slug: 'courses' },
        { label: '文献汇报', slug: 'literature-report' },
        { label: 'PDF 资料', slug: 'pdf-materials' },
        { label: '关于我', slug: 'about' },
        { label: '更新日志', slug: 'changelog' },
      ],
      lastUpdated: true,
    }),
  ],
});
