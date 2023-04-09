<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a>
      <yulang-describe-frame codeStr="">
        <yulang-tree-select
          v-model="treeSelectValue"
          :selectTypeNumber="1"
        ></yulang-tree-select>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
export default {
  name: "packages-demo-yulang-tree-select",
  data() {
    return {
      treeSelectValue: null,
      slotArr: [{ slotName: "a", slotTitle: "TreeSelect 树形下拉", level: 1 }],
    };
  },
};
</script>

<style lang="less" scoped></style>
