<template>
  <el-select
    v-model="selectLabel"
    :popper-append-to-body="false"
    class="components-mainTreeSelect-container"
    :style="{ '--main-select-tree-container-width--': containerWidth }"
    ref="mainTreeSelectRef"
  >
    <el-option
      v-for="item in treeData"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      style="display: none"
    >
    </el-option>
    <el-tree
      ref="treeRef"
      :data="treeData"
      :props="defaultProps"
      :node-key="nodeKey"
      @node-click="handleNodeClick"
    ></el-tree>
  </el-select>
</template>

<script>
export default {
  name: "yulang-tree-select",
  data() {
    return {
      treeData: [],
      selectLabel: null,
      // 容器的宽度，给树形结构初始宽度
      containerWidth: "100px",
      // 树形结构的node-key
      nodeKey: "value",
    };
  },
  props: {
    value: {},
    // 下拉值接口类型
    selectTypeNumber: {
      type: Number,
      required: true,
    },
    // 是否直接调用接口
    isAutoAxios: {
      type: Boolean,
      default: true,
    },
    // 树形结构的label和children对应的字段名
    defaultProps: {
      type: Object,
      default: () => {
        return {
          children: "children",
          label: "label",
        };
      },
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    selectValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
  watch: {
    isAutoAxios: {
      //初始化时让handler调用一下
      immediate: true,
      //handler什么时候调用？当isAutoAxios发生改变时。
      handler(newValue) {
        // 初始化下拉值
        if (newValue) {
          this.treeData = [
            {
              label: "一级 1",
              value: 1,
              children: [
                {
                  label: "二级 1-1",
                  value: 11,
                  children: [
                    {
                      label: "三级 1-1-1",
                      value: 111,
                    },
                  ],
                },
              ],
            },
            {
              label: "一级 2",
              value: 2,
              children: [
                {
                  label: "二级 2-1",
                  value: 21,
                  children: [
                    {
                      label: "三级 2-1-1",
                      value: 211,
                    },
                  ],
                },
                {
                  label: "二级 2-2",
                  value: 22,
                  children: [
                    {
                      label: "三级 2-2-1",
                      value: 221,
                    },
                  ],
                },
              ],
            },
            {
              label: "一级 3",
              value: 3,
              children: [
                {
                  label: "二级 3-1",
                  value: 31,
                  children: [
                    {
                      label: "三级 3-1-1",
                      value: 311,
                    },
                  ],
                },
                {
                  label: "二级 3-2",
                  value: 32,
                  children: [
                    {
                      label: "三级 3-2-1",
                      value: 321,
                    },
                  ],
                },
              ],
            },
          ];
        }
      },
    },
  },
  methods: {
    // 树全展开或关闭
    openOrCloseAllTreeNode(treeData, isOpen = true) {
      treeData.forEach((node) => {
        this.$refs.treeRef.store.nodesMap[node[this.nodeKey]].expanded = isOpen;
        node.children && node.children.length > 0
          ? this.openOrCloseAllTreeNode(node.children)
          : null;
      });
    },
    handleNodeClick(node) {
      // 如果点击的节点不包含children属性说明是叶节点
      // console.log(node);
      if (!node.children) {
        this.selectValue = node.value;
        this.selectLabel = node.label;
        // 执行外部传入的change事件
        this.$listeners.change && this.$listeners.change(node);
        // 如果是单选则点击之后直接关闭树
        if (!this.multiple) {
          this.openOrCloseAllTreeNode(this.treeData, false);
          // 使select失去焦点
          this.$refs.mainTreeSelectRef.blur();
        }
      }
    },
  },
  mounted() {
    this.containerWidth = this.$refs.mainTreeSelectRef.$el.offsetWidth + "px";
  },
};
</script>

<style lang="less" scoped>
.components-mainTreeSelect-container {
  width: 100%;
  /deep/ .el-select-dropdown {
    min-width: var(--main-select-tree-container-width--) !important;
  }
}
</style>
