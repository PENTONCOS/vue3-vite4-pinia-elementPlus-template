import viteBaseConfig from './.vite.base.config.js'

export default {
  ...viteBaseConfig,
  build: {
    assetsInlineLimit: 4096 // 图片转 base64 编码的阈值
  },

  esbuild: {
    pure: ['console.log', 'debugger'], // 删除log消息
  },
}