<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a>
      由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据
    </template>
    <template #b>
      包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。
      <yulang-describe-frame :codeStr="codeStrB">
        <form-b></form-b>
        <template #tip>
          在 Form 组件中，每一个表单域由一个 Form-Item
          组件构成，表单域中可以放置各种类型的表单控件，包括
          Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker
        </template>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import YulangAnchorPoint from "@/packages/yulang-anchor-point/YulangAnchorPoint.vue";
import YulangDescribeFrame from "@/packages/yulang-describe-frame/YulangDescribeFrame.vue";
import FormB from "./components/FormB.vue";
import { codeStrB } from "./data";

export default {
  name: "packages-demo-yulang-form",
  components: {
    YulangAnchorPoint,
    YulangDescribeFrame,
    FormB,
  },
  data() {
    return {
      codeStrB,
      slotArr: [
        { slotName: "a", slotTitle: "Form 表单", level: 1 },
        { slotName: "b", slotTitle: "典型表单", level: 2 },
        { slotName: "c", slotTitle: "Form 表单", level: 2 },
        { slotName: "d", slotTitle: "Form 表单", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
