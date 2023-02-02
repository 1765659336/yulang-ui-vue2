<template>
  <div class="yulang-describe-frame-container">
    <h2>这是一个描述框</h2>
    <div class="yulang-describe-frame-content">
      <yulang-describe-frame codeStr="1111111">
        设置xxx属性可以自定义不同分段的图标,设置xxx属性可以自定义不同分段的图标,设置xxx属性可以自定义不同分段的图标
        <template #tip>
          111
        </template>
      </yulang-describe-frame>
    </div>
  </div>
</template>

<script>
export default {
  name: 'packages-demo-yulang-describe-frame',
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
