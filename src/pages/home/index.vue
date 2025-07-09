<template>
    <div>
        <div>{{ $t('message.0001') }}</div>
        <button @click="switchLanguage">按钮</button>
    </div>
    <div>
        <div class="app">{{ currentTheme }}</div>
        <button @click="toggleTheme">切换主题</button>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useTheme } from '@/utils/theme'
import { loadLanguageAsync, i18n } from '@/i18n'
const { currentTheme, setTheme } = useTheme()

const toggleTheme = () => {
    const newTheme = currentTheme.value === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
}

onMounted(() => {
    console.log('home', import.meta.env.VITE_ENV_PORT)
})

// 切换语言的函数
const changeLanguage = async (lang: string) => {
    await loadLanguageAsync(lang)
};

const switchLanguage = () => {
    const newLnguage = i18n.global.locale === 'en' ? 'zh' : 'en'
    changeLanguage(newLnguage)
}
</script>
<style lang="less">
.app {
    color: @text-color;
}
</style>