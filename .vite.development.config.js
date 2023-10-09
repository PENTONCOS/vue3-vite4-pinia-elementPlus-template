/*
 * @Author: jiapandong jiapandong@supconit.com
 * @Date: 2023-07-07 10:21:52
 * @LastEditors: jiapandong jiapandong@supconit.com
 * @LastEditTime: 2023-10-09 16:06:17
 * @FilePath: /vue3-vite4-pinia-template/.vite.development.config.js
 * @Description:
 *
 * Copyright (c) 2023 by jiapandong email: jiapandong@supconit.com, All Rights Reserved.
 */
import viteBaseConfig from './.vite.base.config.js';

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
};
