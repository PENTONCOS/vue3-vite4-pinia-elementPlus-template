<template>
  <el-config-provider :locale="locale">
    <RouterView />
  </el-config-provider>
</template>

<script setup>
// element-plus默认为英文，需设置为中文
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
const locale = zhCn;
</script>

<style rel="stylesheet/scss" lang="scss">
#app {
  color: #fff;
  border: 1px solid #000;
  width: 11px;
}
</style>
