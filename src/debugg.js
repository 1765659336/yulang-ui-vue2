import Vue from "vue";
// 阿里图标初始化样式文件
import "@/assets/icon/reset.css";
// 引入icon
import "@/assets/icon/iconfont.css";
// 引入动画样式文件
import "@/assets/style/animate.css";

import { Packages, Directives, CreateNode } from "@/packages/index";

// 引入全局index
import Index from "@/tools/getIndex";

Vue.prototype.$yulangIndex = new Index(3000);
Vue.prototype.yulangComponentSize = "mini";

Packages.forEach((component) => {
  Vue.component(component.name, component);
});

Object.keys(Directives).forEach((key) => {
  Vue.directive(key, Directives[key]);
});

CreateNode.forEach((createNodeObj) => {
  Vue.prototype[createNodeObj.name] = createNodeObj.value;
});
