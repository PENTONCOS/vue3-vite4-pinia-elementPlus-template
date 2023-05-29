/**
 * 获取资源文件路径
 * @param {string} baseUrl - 基础路径
 * @param {string} pictureName - 图片名称
 * @returns {string} - 资源文件路径
 */
export const getAssetsFile = (baseUrl, pictureName) => {
  return new URL(`../assets/img/${baseUrl}/${pictureName}`, import.meta.url)
    .href;
};
