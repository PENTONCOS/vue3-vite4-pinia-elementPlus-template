/**
 * 格式化时间
 * @param {*} time 传入时间
 * @param {*} cFormat 可不传。格式化结构 默认 年-月-日 时:分:秒
 * {y}年 {m}月 {d}日 {h}时 {i}分 {s}秒 {a}星期
 */
const formatDate = (time, cFormat) => {
  if (!time) {
    return null;
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    let times = time;
    times = new Date(time).getTime();
    if (typeof times === 'string') {
      if (/^[0-9]+$/.test(times)) {
        times = parseInt(times);
      } else {
        times = times.replace(new RegExp(/-/g), '/');
      }
    }
    if (typeof times === 'number' && times.toString().length === 10) {
      times *= 1000;
    }
    date = new Date(times);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const timeStr = format.replace(/\{([ymdhisa])+\}/g, (result, key) => {
    const value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }
    if (!String.prototype.padStart) return padStart(2, value.toString());
    return value.toString().padStart(2, '0'); // 返回替换的字符串，padStart用于头部补全
  });
  return timeStr;
};

export default {
  formatDate,
};
