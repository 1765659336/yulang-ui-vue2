<template>
  <div>
    <div>开关按钮</div>
    <!-- <div class="test">{{ value }}</div> -->
    <div class="button">
      <span v-if="inactiveText">{{ inactiveText }}</span>
      <div :class="ButtonClass" :style="bg" @click="changeVal">
        <div
          class="circle"
          :class="[value ? 'circleSuccess' : 'circleFail']"
        ></div>
      </div>
      <span v-if="activeText">{{ activeText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'packages-yulang-switch',
  props: {
    value: {
      type: Boolean,
      default: true,
    },
    inactiveColor: {
      type: String,
      default: '#ff4949',
    },
    activeColor: {
      type: String,
      default: '#13ce66',
    },
    inactiveText: {
      type: String,
      default: '',
    },
    activeText: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ButtonClass() {
      return {
        ButtonClassCommon: true,
        ButtonClassAble: !this.disabled,
        ButtonClassDisabled: this.disabled,
      };
    },
    bg() {
      let backgroundColor;
      // 是成功的情况下
      if (this.value) {
        backgroundColor = this.activeColor;
      } else {
        backgroundColor = this.inactiveColor;
      }
      return { backgroundColor };
    },
  },
  data() {
    return {};
  },
  methods: {
    changeVal() {
      // eslint-disable-next-line
      !this.disabled && (this.value = !this.value);
    },
  },
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
