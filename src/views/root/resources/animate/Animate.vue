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
              <component
                :is="AnimateClassArrLeftShow[index].value"
                class="animationItemBoxContent"
              ></component>
              <div
                class="copyBtn"
                v-YulangCopy:[copySuccess]="AnimateClassArrLeftShow[index].copy"
              >
                点我复制代码
              </div>
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
              <component
                :is="AnimateClassArrLeftLeave[index].value"
                class="animationItemBoxContent"
              ></component>
              <div
                class="copyBtn"
                v-YulangCopy:[copySuccess]="AnimateClassArrLeftShow[index].copy"
              >
                点我复制代码
              </div>
            </div>
          </div>
        </yulang-tab-pane>

        <yulang-tab-pane label="右侧进入" name="rightShow">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrRightShow"
              :key="item.value"
            >
              <component
                :is="AnimateClassArrRightShow[index].value"
                class="animationItemBoxContent"
              ></component>
              <div
                class="copyBtn"
                v-YulangCopy:[copySuccess]="AnimateClassArrLeftShow[index].copy"
              >
                点我复制代码
              </div>
            </div>
          </div>
        </yulang-tab-pane>

        <yulang-tab-pane label="右侧退出" name="rightLeave">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrRightLeave"
              :key="item.value"
            >
              <component
                :is="AnimateClassArrRightLeave[index].value"
                class="animationItemBoxContent"
              ></component>
              <div
                class="copyBtn"
                v-YulangCopy:[copySuccess]="AnimateClassArrLeftShow[index].copy"
              >
                点我复制代码
              </div>
            </div>
          </div>
        </yulang-tab-pane>

        <yulang-tab-pane label="上边进入" name="topShow">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrTopShow"
              :key="item.value"
            >
              <component
                :is="AnimateClassArrTopShow[index].value"
                class="animationItemBoxContent"
              ></component>
              <div
                class="copyBtn"
                v-YulangCopy:[copySuccess]="AnimateClassArrLeftShow[index].copy"
              >
                点我复制代码
              </div>
            </div>
          </div>
        </yulang-tab-pane>

        <yulang-tab-pane label="上边退出" name="TopLeave">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrTopLeave"
              :key="item.value"
            >
              <component
                :is="AnimateClassArrTopLeave[index].value"
                class="animationItemBoxContent"
              ></component>
              <div
                class="copyBtn"
                v-YulangCopy:[copySuccess]="AnimateClassArrLeftShow[index].copy"
              >
                点我复制代码
              </div>
            </div>
          </div>
        </yulang-tab-pane>

        <yulang-tab-pane label="下边进入" name="bottomShow">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrBottomShow"
              :key="item.value"
            >
              <component
                :is="AnimateClassArrBottomShow[index].value"
                class="animationItemBoxContent"
              ></component>
              <div
                class="copyBtn"
                v-YulangCopy:[copySuccess]="AnimateClassArrLeftShow[index].copy"
              >
                点我复制代码
              </div>
            </div>
          </div>
        </yulang-tab-pane>

        <yulang-tab-pane label="下边退出" name="bottomLeave">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrBottomLeave"
              :key="item.value"
            >
              <component
                :is="AnimateClassArrBottomLeave[index].value"
                class="animationItemBoxContent"
              ></component>
              <div
                class="copyBtn"
                v-YulangCopy:[copySuccess]="AnimateClassArrLeftShow[index].copy"
              >
                点我复制代码
              </div>
            </div>
          </div>
        </yulang-tab-pane>

        <yulang-tab-pane label="中间" name="middle">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrMiddle"
              :key="item.value"
            >
              <component
                :is="AnimateClassArrMiddle[index].value"
                class="animationItemBoxContent"
              ></component>
              <!-- <div
                class="copyBtn"
                v-YulangCopy:[copySuccess]="AnimateClassArrLeftShow[index].copy"
              >
                点我复制代码
              </div> -->
              {{ AnimateClassArrLeftShow[index]?.copy }}
            </div>
          </div>
        </yulang-tab-pane>

        <yulang-tab-pane label="X轴" name="xAxis">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrXAxis"
              :key="item.value"
            >
              <component
                :is="AnimateClassArrXAxis[index].value"
                class="animationItemBoxContent"
              ></component>
              <div
                class="copyBtn"
                v-YulangCopy:[copySuccess]="AnimateClassArrLeftShow[index].copy"
              >
                点我复制代码
              </div>
            </div>
          </div>
        </yulang-tab-pane>

        <yulang-tab-pane label="Y轴" name="yAxis">
          <div class="animationCollect">
            <div
              class="animationItemBox"
              v-for="(item, index) in AnimateClassArrYAxis"
              :key="item.value"
            >
              <component
                :is="AnimateClassArrYAxis[index].value"
                class="animationItemBoxContent"
              ></component>
              <div
                class="copyBtn"
                v-YulangCopy:[copySuccess]="AnimateClassArrLeftShow[index].copy"
              >
                点我复制代码
              </div>
            </div>
          </div>
        </yulang-tab-pane>
      </yulang-tabs>

      <!-- <div
        v-for="item in animateClassArr"
        :key="item.value"
        @click="animateClassItem(item)"
        :class="[
          'animate-class-item',
          item.value === value.value ? 'isSelect' : '',
        ]"
      >
        {{ item.title }}
      </div> -->

      <!-- <div class="copyBtn" v-YulangCopy:[copySuccess]="copyData">
        点我复制代码
      </div> -->
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
  AnimateClassArrRightShow,
  AnimateClassArrRightLeave,
  AnimateClassArrTopShow,
  AnimateClassArrTopLeave,
  AnimateClassArrBottomShow,
  AnimateClassArrBottomLeave,
  AnimateClassArrMiddle,
  AnimateClassArrXAxis,
  AnimateClassArrYAxis,
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
      AnimateClassArrRightShow,
      AnimateClassArrRightLeave,
      AnimateClassArrTopShow,
      AnimateClassArrTopLeave,
      AnimateClassArrBottomShow,
      AnimateClassArrBottomLeave,
      AnimateClassArrMiddle,
      AnimateClassArrXAxis,
      AnimateClassArrYAxis,
      // 选中tab的属性
      activeName: 'leftShow',
    };
  },
  computed: {
    copyData() {
      return (title) => {
        return 'yulang-animate' + ` ` + title;
      };
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
@import url('./index.less');
</style>
