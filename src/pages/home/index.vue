<template>
    <div>
        {{ $t('message.0001') }}
    </div>
    <div @click="switchLanguage">按钮</div>
</template>
<script setup lang="ts">
import { onMounted, watchEffect, ref, provide, reactive } from 'vue'
import { useI18n } from 'vue-i18n';
// 获取 i18n 实例
const { locale } = useI18n();
interface User {
    name: string
    age: number
}

const user = reactive<User>({
    name: '小王',
    age: 10
})

let test = ref<number>(0)


provide('data', test)

onMounted(() => {
    console.log('home', import.meta.env.VITE_ENV_PORT)
})
watchEffect(() => {
    
})

// 切换语言的函数
const changeLanguage = (lang: string) => {
  locale.value = lang; // 更改语言
};

const switchLanguage = () => {
    changeLanguage('en')
}
</script>