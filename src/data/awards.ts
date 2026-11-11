import type { Award } from '../lib/types';

/**
 * Competition results, newest first. Chinese titles and issuers are kept for
 * provenance but never rendered; the page is English only.
 */
export const awards = [
  {
    id: 'sdust-star-of-innovation-2026',
    title: '2026 International Student Honour',
    titleZh: '2026年度山东科技大学国际学生“科创之星”',
    prize: '“Star of Innovation”',
    level: 'institutional',
    date: '2026-09',
    issuer: 'College of International Exchange, Shandong University of Science and Technology',
    issuerZh: '山东科技大学国际交流学院',
  },
  {
    id: 'csc-intelligent-computing-2025',
    title:
      'National University Student Computer Systems Ability Competition — Intelligent Computing Innovation Design Track (Xiandao Cup)',
    titleZh: '2025年全国大学生计算机系统能力大赛 智能计算创新设计赛（先导杯）',
    prize: 'Excellence Award',
    level: 'national',
    date: '2025-11',
    issuer: 'National Research Association for Computer Education in Higher Education',
    issuerZh: '全国高等学校计算机教育研究会',
  },
  {
    id: 'shandong-digital-engineer-2025',
    title:
      'Shandong Provincial Digital Engineer Innovation and Creativity Competition (International Digital Engineer Invitational)',
    titleZh: '首届山东省数字工程师创新创意大赛暨国际数字工程师邀请赛',
    prize: 'First Prize',
    level: 'provincial',
    date: '2025-12',
    issuer: 'Shandong Provincial Department of Human Resources and Social Security',
    issuerZh: '山东省人力资源和社会保障厅',
  },
  {
    id: 'xiandao-campus-2025',
    title: 'Xiandao Intelligent Computing Programme — SDUST Campus Competition',
    titleZh: '先导智算专项校内赛-山东科技大学比赛',
    prize: 'First Prize',
    level: 'institutional',
    date: '2025-07',
    issuer: 'Xiandao Industrial Ecosystem Cooperation Base; College of Computer Science and Engineering, SDUST',
    issuerZh: '先导产业生态合作基地秘书处、山东科技大学计算机科学与工程学院',
  },
] satisfies Award[];
