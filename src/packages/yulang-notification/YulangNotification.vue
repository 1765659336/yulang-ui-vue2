<template>
  <transition name="hh" appear>
    <div class="notification-container" v-if="isShow" :style="getIndex">
      <!-- 前面的图标范围 -->
      <div class="notification-container-icon">
        <img v-if="type == 'success'" src="@/assets/images/success.svg" />
        <img v-else src="@/assets/images/fail.svg" />
      </div>

      <!-- 中间的内容区 -->
      <div class="notification-container-content">
        <div class="notification-container-content-title">
          {{ notificationText }}
        </div>
        {{ message }}
      </div>

      <!-- 尾部的删除区 -->
      <div class="notification-container-tail">
        <img
          src="@/assets/images/delete.svg"
          @click="deleteNotificationComponent"
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'yulang-notification',
  data() {
    return {
      isShow: true,
    };
  },
  computed: {
    notificationText() {
      if (this.type == 'success') return '成功';
      if (this.type == 'fail') return '失败';
      return '不确定什么类型';
    },
    // 在创建初设置通知框的index值
    getIndex() {
      return {
        '--index--': this.$index.getIndex()
      };
    },
  },
  methods: {
    deleteNotificationComponent() {
      document.querySelector('#notificationParentId').removeChild(this.$el);
    },
  },
  mounted() {
    // 如果未设置参数则持久显示
    if (this.timeout) {
      // 判断是否这个结束时间最小不小于500ms,小于500ms则为500ms
      if (this.timeout < 500) {
        this.$nextTick(() => {
          const time = setTimeout(() => {
            clearTimeout(time);
            this.isShow = false;
          }, 500);
        });
      } else {
        this.$nextTick(() => {
          const time = setTimeout(() => {
            clearTimeout(time);
            this.isShow = false;
          }, this.timeout - 500);
        });
      }
    }
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
