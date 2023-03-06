export default {
  // 指令的定义
  inserted: function (el, inserted) {
    // 利用事件冒泡，来判断当前点击的元素是不是指令绑定的元素
    // 调用addEventListenne给document添加点击事件，是不会覆盖的，而是按照顺序执行
    document.addEventListener("click", (e) => {
      e.target !== el && inserted.value();
    });
  },
};
