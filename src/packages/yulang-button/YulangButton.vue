<template>
  <div
    :class="containerClass"
    @click="handleClick"
    ref="container"
  >
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
import { sizeArr } from "@/packages/constant";

export default {
  name: "yulang-button",
  props: {
    // 控制按钮是否禁用
    disabled: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    // 设置按钮的主题
    type: {
      type: String,
      default: () => {
        return "default";
      },
      validator: (value) => {
        return [
          "default",
          "success",
          "danger",
          "primary",
          "info",
          "warning",
        ].find((item) => item === value);
      },
    },
    // 设置按钮的大小
    size: {
      type: String,
      default: () => {
        return Vue.prototype.yulangComponentSize;
      },
      validator: (value) => {
        return sizeArr.find((item) => item === value);
      },
    },
    // 是否开启点击动画
    isOpenClickAnimate: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      // 控制点击动画
      clickAnimate: false,
    };
  },
  computed: {
    containerClass: {
      get() {
        return {
          "packages-yulang-button-container": true,
          "is-disable": this.disabled,
          "not-disable": !this.disabled,
          ["is-" + this.type]: true,
          "yulang-animate": this.clickAnimate,
          "yulang-push-release": this.clickAnimate,
          ["size-" + this.size]: true,
        };
      },
    },
  },
  methods: {
    handleClick(e) {
      if (!this.disabled) {
        if (this.clickAnimate) {
          this.clickAnimate = false;
          // v-if+nexttick重新渲染
          // 或者使用animation-fill-mode: none/both切换;
          this.$nextTick(() => {
            this.clickAnimate = true;
          });
        } else {
          this.isOpenClickAnimate && (this.clickAnimate = true);
        }
        if (this.$listeners.click) {
          this.$listeners.click(e);
        }
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
