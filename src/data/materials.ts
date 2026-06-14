export const materialCategories = [
  '温病学',
  '传染病学',
  '卫生法学',
  '中西医儿科学',
  '针灸学',
  '组会文献',
  '未分类',
] as const;

export type MaterialCategory = (typeof materialCategories)[number];

export type Material = {
  id: string;
  title: string;
  category: MaterialCategory;
  description: string;
  updatedAt: string;
  fileType: 'PDF' | 'PPT' | 'DOC' | 'NOTE';
  fileUrl: string;
  tags: string[];
};

export const materials: Material[] = [
  {
    id: 'wenbing-review-qna',
    title: '温病学重点习题匹配',
    category: '温病学',
    description: '根据温病学重点习题匹配文件整理的复习资料，适合用于考前题型练习和知识点回看。',
    updatedAt: '2026-06-14',
    fileType: 'PDF',
    fileUrl: '/files/wenbing-key-exercises-match.pdf',
    tags: ['温病学', '重点习题', '题目匹配', '期末复习'],
  },
  {
    id: 'infectious-hepatitis-case-template',
    title: '传染病学病毒性肝炎病案模板',
    category: '传染病学',
    description: '按病史采集、辅助检查、诊断依据、鉴别诊断和处理原则组织的病案复习模板。',
    updatedAt: '2026-06-12',
    fileType: 'PDF',
    fileUrl: '',
    tags: ['传染病学', '病毒性肝炎', '病案分析'],
  },
  {
    id: 'health-law-numbers-levels',
    title: '卫生法学判断题数字与层级归纳',
    category: '卫生法学',
    description: '汇总卫生法学判断题中容易混淆的时间、层级、主体和责任边界。',
    updatedAt: '2026-06-10',
    fileType: 'PDF',
    fileUrl: '',
    tags: ['卫生法学', '判断题', '数字记忆', '法规层级'],
  },
  {
    id: 'pediatrics-final-framework',
    title: '中西医儿科学期末复习框架',
    category: '中西医儿科学',
    description: '以常见病证为主线，整合西医诊断、辨证分型、治法方药和儿科特点。',
    updatedAt: '2026-06-08',
    fileType: 'PDF',
    fileUrl: '',
    tags: ['中西医儿科学', '期末复习', '辨证论治'],
  },
  {
    id: 'pcos-mechanism-journal-club',
    title: 'PCOS 机制链组会汇报笔记',
    category: '组会文献',
    description: '记录 PCOS 相关机制研究的背景、实验逻辑、机制链闭环和老师可能追问。',
    updatedAt: '2026-06-06',
    fileType: 'PDF',
    fileUrl: '',
    tags: ['组会文献', 'PCOS', '机制链', '文献汇报'],
  },
  {
    id: 'acupuncture-meridian-recite',
    title: '针灸经脉循行默写辅助资料',
    category: '针灸学',
    description: '按十二经脉循行、交接规律、重点穴位和默写提示整理的辅助材料。',
    updatedAt: '2026-06-04',
    fileType: 'PDF',
    fileUrl: '',
    tags: ['针灸学', '经脉循行', '默写', '穴位'],
  },
];

export const allTags = Array.from(new Set(materials.flatMap((material) => material.tags))).sort(
  (a, b) => a.localeCompare(b, 'zh-CN')
);
