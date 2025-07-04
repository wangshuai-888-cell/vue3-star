// src/i18n.ts
import { createI18n, I18n  } from 'vue-i18n';

// 导入多语言文件
import en from './language/en.json';
import zh from './language/zh.json';

// 创建 i18n 实例
const i18n: I18n  = createI18n({
  legacy: false, // 使用 Composition API 风格
  locale: 'zh', // 默认语言
  fallbackLocale: 'en', // 如果找不到翻译，使用英语
  messages: {
    en,
    zh
  }
});

export default i18n;
