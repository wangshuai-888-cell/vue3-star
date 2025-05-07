<template>
    HOME
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
    console.log('home', import.meta.env.VITE_ENV_PORT)
})
</script>