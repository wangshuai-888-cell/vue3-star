import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 例如，@ 表示 src 目录
    },
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/themes/variables.less";`, // 注册全局less样式，避免每个less文件都要手动引入
        javascriptEnabled: true,
      }
    }
  },
  server: {
    port: 3000,
  }
})
