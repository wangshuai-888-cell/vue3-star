import { ref } from 'vue'

type Theme = 'light' | 'dark'

const currentTheme = ref<Theme>('light')

export function useTheme() {
    const setTheme = (theme: Theme) => {
        currentTheme.value = theme
        document.documentElement.setAttribute('data-theme', theme)

        // 动态导入对应的主题变量
        if (theme === 'dark') {
            import('@/themes/theme-dark.less')
        } else {
            import('@/themes/theme-light.less')
        }
    }

    // 初始化主题
    const initTheme = () => {
        const savedTheme = localStorage.getItem('app-theme') as Theme || 'light'
        setTheme(savedTheme)
    }

    return {
        currentTheme,
        setTheme,
        initTheme
    }
}