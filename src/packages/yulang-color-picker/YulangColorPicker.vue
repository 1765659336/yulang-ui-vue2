<template>
  <div
    class="yulang-color-picker-container"
    :style="{ '--color-block-background-color--': 'green' }"
  >
    <yulang-popover trigger="click" placement="bottom-start">
      <template #reference>
        <div class="reference-container">
          <div class="color-block">
            <i class="iconfont icon-chevron-down"></i>
            <!-- <i class="iconfont icon-guanbi"></i> -->
          </div>
        </div>
      </template>
      <template #content> hahaha </template>
    </yulang-popover>
  </div>
</template>

<script>
import YulangPopover from "@/packages/yulang-popover/YulangPopover";
export default {
  name: "yulang-color-picker",
  components: {
    YulangPopover,
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
