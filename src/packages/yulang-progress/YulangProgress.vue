<template>
  <div class="packages-yulang-progress-container">
    <div
      class="yulang-progress-inner"
      :style="{ '--stroke-height--': strokeHeight + 'px' }"
    >
      <div
        :class="[
          'yulang-progress-percentage',
          `percentage-${status}`,
          colorComputed ? 'progress-custom-color' : '',
        ]"
        :style="{
          '--percentage-width--': percentage + '%',
          '--custom-color--': colorComputed,
        }"
      ></div>
    </div>
    <div
      :class="[
        'yulang-progress-text',
        textInside ? 'progress-text-inside' : '',
      ]"
    >
      {{ format ? format(percentage) : percentage + "%" }}
    </div>
  </div>
</template>

<script>
export default {
  name: "yulang-progress",
  props: {
    // 进度
    percentage: {
      type: Number,
      required: true,
      validator(value) {
        return value <= 100;
      },
    },
    // 自定义文字
    format: {
      type: Function,
      validator(value) {
        return value();
      },
    },
    // 状态
    status: {
      type: String,
      validator(value) {
        return ["default", "success", "warning", "exception"].find(
          (item) => item === value
        );
      },
    },
    // 提示内连
    textInside: {
      type: Boolean,
      default: false,
    },
    // 进度条的高度
    strokeHeight: {
      type: Number,
      default: 10,
    },
    // 自定义进度条完成的颜色
    color: {
      type: [String, Function, Array],
    },
  },
  computed: {
    colorComputed() {
      if (typeof this.color === "string") {
        return this.color;
      } else if (Array.isArray(this.color)) {
        const colorCopy = [...this.color];
        colorCopy.sort((a, b) => a.percentage - b.percentage);
        return colorCopy.find((item) => this.percentage < item.percentage)
          ?.color;
      } else if (typeof this.color === "function") {
        return this.color(this.percentage);
      }
      return null;
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
