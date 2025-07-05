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
import { useI18n } from 'vue-i18n';
import { useTheme } from '@/utils/theme'

const { currentTheme, setTheme } = useTheme()

const toggleTheme = () => {
    const newTheme = currentTheme.value === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
}
// 获取 i18n 实例
const { locale } = useI18n();

onMounted(() => {
    console.log('home', import.meta.env.VITE_ENV_PORT)
})

// 切换语言的函数
const changeLanguage = (lang: string) => {
    locale.value = lang; // 更改语言
};

const switchLanguage = () => {
    changeLanguage('en')
}
</script>
<style lang="less">
.app {
    color: @text-color;
}
</style>