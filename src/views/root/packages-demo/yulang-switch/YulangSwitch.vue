<template>
  <div>
    开关
    <yulang-switch v-model="value"></yulang-switch>
    <yulang-switch
      v-model="value"
      inactive-color="#84adea"
      active-color="#2e2e2e"
    ></yulang-switch>
    <yulang-switch
      v-model="value"
      active-text="按月付费"
      inactive-text="按年付费"
    ></yulang-switch>
    <yulang-switch
      v-model="value"
      disabled
    ></yulang-switch>
    <button @click="outerClick">外面点击</button>
  </div>
</template>

<script>
export default {
  name: 'packages-demo-yulang-switch',
  data() {
    return {
      value: true,
    };
  },
  methods: {
    outerClick() {
      this.value = !this.value;
    },
  },
};
</script>

<style lang="less" scoped></style>
