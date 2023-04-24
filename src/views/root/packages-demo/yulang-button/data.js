export const codeStrB = `
<template>
  <div>
    <yulang-button @click="btn">默认按钮</yulang-button>
    <yulang-button @click="btn" type="success">成功按钮</yulang-button>
    <yulang-button @click="btn" type="danger">危险按钮</yulang-button>
    <yulang-button @click="btn" type="primary">主要按钮</yulang-button>
    <yulang-button @click="btn" type="info">信息按钮</yulang-button>
    <yulang-button @click="btn" type="warning">警告按钮</yulang-button>
  </div>
</template>

<script>
export default {
  methods: {
    btn() {
      this.$yulangMessage({
        message: "点击事件",
        type: "success",
        close,
        delay: 1500,
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
`;

export const codeStrC = `
<template>
  <div>
    <yulang-button size="mini">默认按钮</yulang-button>
    <yulang-button size="small" type="success">成功按钮</yulang-button>
    <yulang-button size="medium" type="danger">危险按钮</yulang-button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
`;

export const codeStrD = `
<template>
  <div>
    <yulang-button disabled>默认按钮</yulang-button>
    <yulang-button disabled type="success">成功按钮</yulang-button>
    <yulang-button disabled type="danger">危险按钮</yulang-button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
`;

export const tableDataAttributes = [
  {
    attributeName: "disabled",
    explain: "控制按钮是否禁用",
    type: "Boolean",
    default: false,
  },
  {
    attributeName: "type",
    explain: "设置按钮的主题",
    type: "String(default、success、info、primary、danger、warning)",
    default: "default",
  },
  {
    attributeName: "size",
    explain: "设置按钮的大小",
    type: "String(medium、small、mini)",
    default: "medium",
  },
  {
    attributeName: "isOpenClickAnimate",
    explain: "是否开启点击动画",
    type: "Boolean",
    default: true,
  },
];
