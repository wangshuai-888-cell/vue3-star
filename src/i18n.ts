// src/i18n.ts
import { createI18n, I18n  } from 'vue-i18n';

// 创建 i18n 实例
const i18n: I18n  = createI18n({
  legacy: true, // 不使用 Composition API 风格
  globalInjection: true, // 全局注册$t
  locale: 'zh', // 默认语言
  fallbackLocale: 'en', // 如果找不到翻译，使用英语
  messages: {}
});

// 动态加载语言文件的函数
const loadLanguageAsync = async (lang: string) => {
  // 检查是否已经加载过该语言

  if (i18n.global.availableLocales.includes(lang)) {
    i18n.global.locale = lang
    return Promise.resolve()
  }

  // 使用动态导入加载语言文件
  const messages = await import(`./language/${lang}.json`)
  i18n.global.setLocaleMessage(lang, messages.default)
  i18n.global.locale = lang
}

export { i18n, loadLanguageAsync };
