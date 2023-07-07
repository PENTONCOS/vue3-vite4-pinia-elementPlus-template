import viteBaseConfig from './.vite.base.config.js'

export default {
  ...viteBaseConfig,
  server: {
    proxy: {
      '^/api': {
        target: 'xxx/',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    host: true, // 监听所有设备
    port: 3000,
    open: true,
  },
}