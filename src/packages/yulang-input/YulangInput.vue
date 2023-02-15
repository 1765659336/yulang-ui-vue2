<template>
  <div class="package-yulang-input-container">
    <input
      :class="inputClassComputed"
      :type="showPassword && !isShowPassword ? 'password' : type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="valueComputed"
      @input="valueComputedInput"
    />
    <div class="suffix-icon-container">
      <i
        class="iconfont icon-guanbi"
        v-show="iconIsShow"
        @click="clearValue"
      ></i>
      <i
        class="iconfont icon-yanjing"
        v-if="showPassword"
        v-YulangLongClick="passwordEyeClick"
      ></i>
    </div>
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
    // 是否可清空
    clearable: {
      type: Boolean,
      default: false,
    },
    // 是否是密码框
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isShowPassword: false,
    };
  },
  computed: {
    // 双向绑定外部传入的值
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
      console.log(this.disabled, this.clearable);
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
    // 清除icon点击事件
    clearValue() {
      this.valueComputed = null;
    },
    // 密码眼图标点击事件
    passwordEyeClick(type) {
      this.isShowPassword = type === "down";
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
