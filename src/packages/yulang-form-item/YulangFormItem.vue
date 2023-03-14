<template>
  <div
    class="packages-yulang-form-item-container"
    :style="{
      '--yulang-form-container-direction--':
        yulangForm.labelPosition === 'top' ? 'column' : 'row',
      '--yulang-form-label-text-align--':
        yulangForm.labelPosition !== 'top' ? yulangForm.labelPosition : 'left',
      '--yulang-form-label-width--': yulangForm.labelWidth
        ? yulangForm.labelWidth
        : 'auto',
    }"
  >
    <label v-if="label" class="yulang-form-item-lable">{{ label }}</label>
    <div class="yulang-form-item-content">
      <slot></slot>
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  name: "yulang-form-item",
  inject: ["yulangForm"],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: String,
  },
  data() {
    return { errorMessage: "" };
  },
  methods: {
    validate() {
      if (this.prop) {
        let rule = this.yulangForm.rules[this.prop];
        let newValue = this.yulangForm.model[this.prop];
        let descriptor = {
          [this.prop]: rule,
        };
        let schema = new Schema(descriptor);
        let validateData = { [this.prop]: newValue };
        return schema.validate(validateData, (err) => {
          if (err) {
            this.errorMessage = err[0].message;
          } else {
            this.errorMessage = "";
          }
        });
      } else {
        return false;
      }
    },
    resetFields() {
      this.$children.forEach((item) => {
        if (item.resetFields) {
          item.resetFields();
        }
      });
    },
  },
  mounted() {
    // console.log(this, "yulang-form-item");
  },
};
</script>

<style lang="less" scoped>
.packages-yulang-form-item-container {
  display: flex;
  flex-direction: var(--yulang-form-container-direction--);
  align-items: center;
  margin: 10px;

  .yulang-form-item-lable {
    display: inline-block;
    padding: 0 5px;
    text-align: var(--yulang-form-label-text-align--);
    width: var(--yulang-form-label-width--);
  }

  .yulang-form-item-content {
  }
}
</style>
