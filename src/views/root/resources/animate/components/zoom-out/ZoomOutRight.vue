<template>
  <div v-if="value" class="yulang-animate yulang-zoom-out-right">右移消失</div>
</template>

<script>
export default {
  name: "yulang-zoom-out-right",
  data() {
    return {
      value: true,
    };
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.value = false;
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="less" scoped>
div {
  height: 200px;
  width: 200px;
  background-color: pink;
}
</style>
