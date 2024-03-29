/*
 * @Author: jiapandong jiapandong@supconit.com
 * @Date: 2023-07-07 10:15:47
 * @LastEditors: jiapandong jiapandong@supconit.com
 * @LastEditTime: 2023-10-09 15:45:37
 * @FilePath: /vue3-vite4-pinia-template/.vite.base.config.js
 * @Description: 
 * 
 * Copyright (c) 2023 by jiapandong email: jiapandong@supconit.com, All Rights Reserved. 
 */
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import viteCompression from 'vite-plugin-compression';
import eslintPlugin from 'vite-plugin-eslint';
import { visualizer } from 'rollup-plugin-visualizer';
import { svgBuilder } from './src/plugins/svgBuilder';


export default {
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue-router', 'vue'],
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // 组件化svg
    // svgBuilder('./src/assets/icon/svg/'),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    eslintPlugin(),
    visualizer({
      emitFile: false,
      file: "stats.html", //分析图生成的文件名
      open: false //如果存在本地服务端口，将在打包后自动展示
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.ts', '.json'], // 导入时想要省略的扩展名列表
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/css/main.scss";`, // 全局scss文件挂载
      },
    },
  },

  clearScreen: false, // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息。命令行模式下可以通过 --clearScreen false 设置。
};