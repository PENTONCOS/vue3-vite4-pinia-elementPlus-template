import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import viteCompression from 'vite-plugin-compression';
import { svgBuilder } from './src/plugins/svgBuilder';
import eslintPlugin from 'vite-plugin-eslint';

const publicPath = '/my-project/'; // 修改为你的项目前缀

const baseConfig = {
  server: {
    proxy: {
      '^/api': {
        target: 'xxx/',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    host: true,
    port: 3000,
    open: true,
  },
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

  esbuild: {
    pure: ['console.log', 'debugger'], // 删除log消息
  },
};

export default defineConfig((command, mode) => {
  if (command === 'build') {
    return {
      ...baseConfig,
      // base: loadEnv(mode, process.cwd().VITE_BASE_HistoryBaseURL),
      base: path.join(publicPath, loadEnv(mode, process.cwd().VITE_BASE_HistoryBaseURL)),
    };
  }
  return baseConfig;
});
