# 医学学习资料库

一个基于 Astro Starlight 的个人医学学习资料网站模板，适合中西医临床医学学生整理课程复习资料、文献阅读笔记、组会汇报和 PDF 复习资料。

站点标语：把医学学习资料整理成可检索、可复用、可长期积累的知识库。

## 本地运行

```bash
npm install
npm run dev
```

默认开发地址通常是 `http://localhost:4321`。

## 构建与部署

```bash
npm run build
npm run preview
```

构建产物会输出到 `dist/`。这是静态站点，可以部署到 GitHub Pages、Cloudflare Pages、Vercel、Netlify 或任意静态网站托管服务。

## 如何新增一个 PDF

1. 将 PDF 放入 `public/files/`。
2. 打开 `src/data/materials.ts`。
3. 在 `materials` 数组中新增一条记录。
4. 将 `fileUrl` 设置为 `/files/xxx.pdf`。

示例：

```ts
{
  id: 'new-review-note',
  title: '新资料标题',
  category: '温病学',
  description: '资料简介。',
  updatedAt: '2026-06-14',
  fileType: 'PDF',
  fileUrl: '/files/new-review-note.pdf',
  tags: ['温病学', '复习资料'],
}
```

新增后，资料会自动出现在资料库和 PDF 资料页面中，并支持在线浏览、下载、搜索、分类筛选、标签筛选和排序。

## PDF 文件命名建议

- 使用英文小写。
- 使用短横线连接单词，例如 `wenbing-review.pdf`。
- 避免空格。
- 避免过长中文文件名。
- 尽量让文件名能表达资料主题。

## 如何新增课程分类

1. 打开 `src/data/materials.ts`。
2. 在 `materialCategories` 数组中新增分类名称。
3. 给资料记录的 `category` 字段设置为该分类。

课程分类页面会根据数据自动统计每个分类下的资料数量。

## 如何修改资料信息

打开 `src/data/materials.ts`，直接修改对应资料记录：

- `title`：资料标题。
- `description`：资料简介。
- `updatedAt`：更新时间，建议使用 `YYYY-MM-DD`。
- `tags`：标签数组，用于筛选。
- `fileUrl`：PDF 公开访问路径。

## 当前 PDF 为什么是公开访问

当前 MVP 使用 `public/files/` 方案。放在这个目录里的 PDF 会被作为静态资源公开发布：

- 任何人只要知道 PDF 地址，就可以直接浏览或下载。
- 前端密码、隐藏按钮或简单口令不能实现真正权限控制。
- 浏览器端代码对用户可见，所以不能把密钥、对象存储 AK/SK、bucket 等私密配置写死在前端代码中。

这个阶段适合公开资料展示、个人知识库原型和静态站部署。

## 后续如何升级为每日密钥权限版

当前资料字段使用 `fileUrl`。未来正式权限版可以替换或扩展为 `fileId`，并把 `src/components/MaterialsExplorer.astro` 中的 `handleViewMaterial` 和 `handleDownloadMaterial` 改为：

1. 弹出每日密钥输入框。
2. 请求后端接口，例如 `/api/get-pdf-url`。
3. 服务端验证每日密钥。
4. 服务端从私有对象存储生成 10 分钟有效的签名 URL。
5. 前端拿到签名 URL 后再打开或下载 PDF。

真正权限控制必须依赖服务端验证和私有对象存储签名 URL。`.env.example` 中预留了未来服务端配置项，但真实密钥只能放在服务端环境变量里，不要暴露给前端。

## 关于 PDF.js

当前 MVP 不启用复杂 PDF 阅读器插件，优先使用浏览器原生 PDF 预览能力。如果未来需要网页内目录、批注、页码跳转、缩略图或阅读进度，可以接入 PDF.js，并把阅读器页面与权限接口结合。

## 项目结构

```text
public/files/              PDF 文件放置目录
src/data/materials.ts      资料数据入口
src/components/            首页、资料库、课程分类和文献汇报组件
src/content/docs/          Starlight 页面内容
src/styles/custom.css      站点视觉样式
.env.example               后续权限版配置示例
```
