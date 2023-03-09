const model = require.context("./components", true, /\.vue$/);
let components = {};
let animateClassArrLeftShow = []
let animateClassArrLeftLeave = []
let animateClassArrLeft = []

export const AnimateClassArr = model.keys().map((item) => {
  let comp = model(item);
  components[comp.default.name] = comp.default;

  let itemCompoent = {
    title: comp.default.data().title,
    value: comp.default.name,
    copy: "yulang-animate " + comp.default.name,
  };

  if (comp.default.data().attribute && ['left', 'show'].every(item => comp.default.data().attribute.includes(item))) {
    animateClassArrLeftShow.push(itemCompoent)
  }
  if (comp.default.data().attribute && ['left', 'leave'].every(item => comp.default.data().attribute.includes(item))) {
    animateClassArrLeftLeave.push(itemCompoent)
  }
  if (comp.default.data().attribute && ['left'].every(item => comp.default.data().attribute.includes(item))) {
    animateClassArrLeft.push(itemCompoent)
  }
  return itemCompoent
});



export const Components = components;
export const AnimateClassArrLeftShow = animateClassArrLeftShow
export const AnimateClassArrLeftLeave = animateClassArrLeftLeave
export const AnimateClassArrLeft = animateClassArrLeft