<template>
  <div>
    下拉页面
    <yulang-select v-model="selectValue">
      <yulang-options :data="options"></yulang-options>
    </yulang-select>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <div>1111</div>
    <yulang-select v-model="selectValue2" placement="right">
      <yulang-options :data="options2"></yulang-options>
    </yulang-select>
  </div>
</template>

<script>
export default {
  name: 'packages-demo-yulang-select',
  data() {
    return {
      selectValue: 'model值',
      selectValue2: 'model2值',
      options: [
        {
          name: 'KFC',
          label: 'KFC',
        },
        {
          name: '麦当劳',
          label: '麦当劳',
        },
        {
          name: '华莱士',
          label: '华莱士',
        },
        {
          name: '必胜客',
          label: '必胜客',
        },
      ],
      options2: [
        {
          name: '唱',
          label: '唱',
        },
        {
          name: '跳',
          label: '跳',
        },
        {
          name: 'RAP',
          label: 'RAP',
        },
        {
          name: '篮球',
          label: '篮球',
        },
      ],
    };
  },
  components: {
    // MyTest,
  },
};
</script>

<style lang="less" scoped></style>
