<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a> 显示当前页面的路径，快速返回之前的任意页面。 </template>
    <template #b>
      适用广泛的基础用法。
      <yulang-describe-frame :codeStr="codeStrB">
        <breadcrumb-b></breadcrumb-b>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import YulangAnchorPoint from "@/packages/yulang-anchor-point/YulangAnchorPoint.vue";
import YulangDescribeFrame from "@/packages/yulang-describe-frame/YulangDescribeFrame.vue";
import BreadcrumbB from "./components/BreadcrumbB.vue";
import { codeStrB } from "./data";

export default {
  name: "yulang-breadcrumb",
  components: {
    YulangAnchorPoint,
    YulangDescribeFrame,
    BreadcrumbB,
  },
  data() {
    return {
      codeStrB,
      slotArr: [
        { slotName: "a", slotTitle: "Breadcrumb 面包屑", level: 1 },
        { slotName: "b", slotTitle: "基础用法", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
