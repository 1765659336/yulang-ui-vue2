<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #b>
      <yulang-describe-frame :codeStr="codeStrB">
        <input-b></input-b>
      </yulang-describe-frame>
    </template>
    <template #c>
      <yulang-describe-frame :codeStr="codeStrC">
        <input-c></input-c>
        <template #tip> 通过 disabled 属性指定是否禁用 input 组件 </template>
      </yulang-describe-frame>
    </template>
    <template #d>
      <yulang-describe-frame :codeStr="codeStrD">
        <input-d></input-d>
        <template #tip> 使用clearable属性即可得到一个可清空的输入框 </template>
      </yulang-describe-frame>
    </template>
    <template #e>
      <yulang-describe-frame :codeStr="codeStrE">
        <input-e></input-e>
        <template #tip>
          使用showPassword属性即可得到一个可切换显示隐藏的密码框
        </template>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import InputB from "./components/InputB.vue";
import InputC from "./components/InputC.vue";
import InputD from "./components/InputD.vue";
import InputE from "./components/InputE.vue";
import { codeStrB, codeStrC, codeStrD, codeStrE } from "./data.js";
export default {
  name: "package-demos-yulang-input",
  components: {
    InputB,
    InputC,
    InputD,
    InputE,
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      codeStrE,
      slotArr: [
        { slotName: "a", slotTitle: "Input 输入框", level: 1 },
        { slotName: "b", slotTitle: "基本用法", level: 2 },
        { slotName: "c", slotTitle: "禁用状态", level: 2 },
        { slotName: "d", slotTitle: "可清空", level: 2 },
        { slotName: "e", slotTitle: "密码框", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
