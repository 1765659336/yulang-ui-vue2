<template>
  <div class="root-resources-animate-container">
    <div class="animate-class-arr-container">
      <yulang-tabs
        v-model="activeName"
        @tabClick="handleClick"
        :isKeepAlive="false"
      >
        <yulang-tab-pane label="左侧进入" name="leftShow">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrLeftShow"
              :key="item.value"
            >
              {{ AnimateClassArrLeftShow[index].title }}
              <component :is="AnimateClassArrLeftShow[index].value"></component>
            </div>
          </div>
        </yulang-tab-pane>

        <yulang-tab-pane label="左侧退出" name="leftLeave">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrLeftLeave"
              :key="item.value"
            >
              {{ AnimateClassArrLeftLeave[index].title }}
              <component
                :is="AnimateClassArrLeftLeave[index].value"
              ></component>
            </div>
          </div>
        </yulang-tab-pane>

        <yulang-tab-pane label="右边" name="rightDirection"
          >配置管理</yulang-tab-pane
        >
        <yulang-tab-pane label="上边" name="topDirection"
          >角色管理</yulang-tab-pane
        >
        <yulang-tab-pane label="下边" name="bottomDirection"
          >定时任务补偿</yulang-tab-pane
        >
        <yulang-tab-pane label="中间" name="middleDirection"
          >定时任务补偿</yulang-tab-pane
        >
      </yulang-tabs>

      <div
        v-for="item in animateClassArr"
        :key="item.value"
        @click="animateClassItem(item)"
        :class="[
          'animate-class-item',
          item.value === value.value ? 'isSelect' : '',
        ]"
      >
        {{ item.title }}
      </div>

      <div class="copyBtn" v-YulangCopy:[copySuccess]="copyData">
        点我复制代码
      </div>
    </div>

    <component :is="value.value"></component>
  </div>
</template>

<script>
import {
  Components,
  AnimateClassArr,
  AnimateClassArrLeftShow,
  AnimateClassArrLeftLeave,
  AnimateClassArrLeft,
} from './index';
export default {
  name: 'root-resources-animate',
  components: Components,
  data() {
    return {
      value: AnimateClassArr[0],
      animateClassArr: AnimateClassArr,
      AnimateClassArrLeftShow,
      AnimateClassArrLeftLeave,
      AnimateClassArrLeft,
      // 选中tab的属性
      activeName: 'leftShow',
    };
  },
  computed: {
    copyData() {
      return this.value.copy + ` ` + this.value.title;
    },
  },
  methods: {
    animateClassItem(item) {
      this.value = item;
    },
    copySuccess(value) {
      // console.log("info", "复制成功值为:" + value);
      this.$yulangNotification({
        message: '复制成功' + value,
        type: 'success',
      });
    },
    // 控制tab切换
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less" scoped>
.yulang-animate-div,
.yulang-animate {
  width: 80px;
  height: 80px;
  background-color: yellow;
}
.root-resources-animate-container {
  .animate-class-arr-container {
    display: flex;
    flex-wrap: wrap;

    .animate-class-item {
      padding: 0 10px;
      margin: 10px 0;
      border-right: 1px solid #ccc;
      cursor: pointer;
    }

    .isSelect {
      color: skyblue;
    }

    .copyBtn {
      padding: 10px;
    }

    & > div {
      cursor: pointer;
    }
  }
}

.animationCollect {
  display: flex;
  flex-wrap: wrap;

  .animationItemBox {
    width: 120px;
    height: 120px;
    margin: 31.5px;
    background-color: red;
  }
}
</style>
