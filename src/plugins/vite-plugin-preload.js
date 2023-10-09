/*
 * @Author: jiapandong jiapandong@supconit.com
 * @Date: 2023-10-09 15:55:02
 * @LastEditors: jiapandong jiapandong@supconit.com
 * @LastEditTime: 2023-10-09 15:56:11
 * @FilePath: /vue3-vite4-pinia-template/src/plugins/vite-plugin-preload.js
 * @Description:
 *
 * Copyright (c) 2023 by jiapandong email: jiapandong@supconit.com, All Rights Reserved.
 */
const fs = require('fs');
// 查找文件
function getFiles(e) {
  const arr = [];
  const dirents = fs.readdirSync(e, { withFileTypes: true });
  for (const dirent of dirents) {
    if (dirent.isDirectory()) arr.push(...getFiles(e + dirent.name + '/'));
    else {
      arr.push(e + dirent.name);
    }
  }
  return arr;
}

// 插入加载文件脚本
export const setPreLoadFile = (options) => {
  let { pathList = [], port = 3000, preFix = '' } = options;
  if (pathList && pathList.length) {
    let res = [];
    pathList.forEach((path) => {
      res = res.concat(getFiles(path));
    });
    let linkStr = `
        <script>
        setTimeout(() => {
            function preLoadSource(url){
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        console.log('预加载成功');
                    } else {
                        console.error('预加载失败');
                    }
                };
                xhr.send();
            }\n
        `;
    res.forEach((item) => {
      linkStr += `preLoadSource('http://localhost:${port}${
        preFix + item.substring(1)
      }')\n`;
    });
    linkStr += '})\n</script>';
    return {
      name: 'preload-file',
      transformIndexHtml(dom) {
        return dom.replace('</body>', `${linkStr}</body>`);
      },
    };
  }
};
