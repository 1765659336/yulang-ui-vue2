<template>
  <div class="package-yulang-input-container">
    <input
      :class="inputClassComputed"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="valueComputed"
      @input="valueComputedInput"
    />
    <i
      class="iconfont icon-guanbi yulang-input-close-icon"
      v-show="iconIsShow"
      @click="clearValue"
    ></i>
  </div>
</template>

<script>
export default {
  name: "yulang-input",
  props: {
    value: {},
    // 输入框的类型
    type: {
      type: String,
      default: () => {
        return "text";
      },
    },
    // 提示文本
    placeholder: {
      default: "请输入",
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    valueComputed: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
    // input动态class类名
    inputClassComputed() {
      return {
        input: true,
        "input-disabled": this.disabled,
      };
    },
    // icon是否显示
    iconIsShow() {
      return this.valueComputed && !this.disabled && this.clearable;
    },
  },
  methods: {
    resetFields() {
      this.valueComputed = null;
    },
    valueComputedInput(e) {
      this.valueComputed = e.target.value;
    },
    // icon点击事件
    clearValue() {
      this.valueComputed = null;
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
