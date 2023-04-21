<template>
  <div>
    <div>我是主页内容</div>
    <el-button type="primary" @click="changeRouter('scenicArea')"
      >子路由1</el-button
    >
    <el-button type="primary" @click="changeRouter('securityArea')"
      >子路由2</el-button
    >

    <RouterView />
  </div>
</template>

<script setup>
const router = useRouter();

/**
 * @description: 切换路由
 * @param {string} url 路由地址
 * @return 无返回值
 */
const changeRouter = (url) => {
  router.push("/home/" + url);
};
</script>

<style lang="scss" scoped>
</style>