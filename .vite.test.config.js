/*
 * @Author: jiapandong jiapandong@supconit.com
 * @Date: 2023-10-09 15:43:29
 * @LastEditors: jiapandong jiapandong@supconit.com
 * @LastEditTime: 2023-10-09 16:19:17
 * @FilePath: /vue3-vite4-pinia-template/.vite.test.config.js
 * @Description:
 *
 * Copyright (c) 2023 by jiapandong email: jiapandong@supconit.com, All Rights Reserved.
 */
import viteBaseConfig from './.vite.base.config.js';
import viteDevelopmentConfig from './.vite.development.config.js';
import { setPreLoadFile } from './src/plugins/vite-plugin-preload';

export default {
  ...viteDevelopmentConfig,
  plugins: [
    ...viteBaseConfig.plugins,
    setPreLoadFile({
      pathList: [
        // 需要提前加载的资源目录
        './src/views/',
        './src/components/',
      ],
      preFix: '', // 项目根路径
    }),
  ],
};
