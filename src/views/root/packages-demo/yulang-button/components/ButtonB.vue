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
