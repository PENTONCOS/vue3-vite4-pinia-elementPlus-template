import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import viteCompression from 'vite-plugin-compression';
import eslintPlugin from 'vite-plugin-eslint';
import { svgBuilder } from './src/plugins/svgBuilder';


export default {
  base: './',
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