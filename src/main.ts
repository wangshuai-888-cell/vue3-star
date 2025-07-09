import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { i18n, loadLanguageAsync } from './i18n.js';
import router from './router' // 引入路由
import { useTheme } from './utils/theme'
// 初始化主题
const { initTheme } = useTheme()
initTheme()

// 获取浏览器默认语言
const userLanguage = navigator.language.split('-')[0]  // 获取浏览器语言，如 'en', 'zh'
loadLanguageAsync(userLanguage)
const app = createApp(App)
app.use(ElementPlus)
app.use(i18n)
app.use(router) // 使用路由
app.mount('#app')