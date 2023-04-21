<template>
  <el-config-provider :locale="locale">
    <RouterView />
  </el-config-provider>
</template>

<script setup>
// element-plus默认为英文，需设置为中文
import zhCn from "element-plus/lib/locale/lang/zh-cn";
const locale = zhCn;
</script>

<style rel='stylesheet/scss' lang='scss'>
</style>
