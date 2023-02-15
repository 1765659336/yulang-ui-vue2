export const codeStrB = `
<template>
  <yulang-input v-model="value" placeholder="请输入"></yulang-input>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    };
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrC = `
<template>
  <yulang-input v-model="value" placeholder="请输入" disabled></yulang-input>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    };
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrD = `
<template>
  <yulang-input v-model="value" placeholder="请输入" clearable></yulang-input>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    };
  },
};
</script>

<style lang="less" scoped></style>
`

export const codeStrE = `
<template>
  <yulang-input
    v-model="value"
    placeholder="请输入"
    showPassword
  ></yulang-input>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    };
  },
};
</script>

<style lang="less" scoped></style>
`