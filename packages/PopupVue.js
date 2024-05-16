import Vue from "vue";
import { Popup } from "./Popup";
export class PopupVue {
  viewer;
  element;
  popup;
  constructor(viewer, options) {
    this.viewer = viewer;
    this.init(options);
  }

  render(component, dom, props) {
    const extendVM = Vue.extend(component);
    const vue_tmp = new extendVM({ propsData: props });
    const ele = vue_tmp.$mount().$el;
    dom.appendChild(ele);
  }

  init(options) {
    const { component, position, popupCommonOption, props } = options;
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.className = "popup";

    this.element = div;
    if (component) this.render(component, div, props);
    this.viewer.container.appendChild(div);

    this.popup = new Popup(this.viewer, {
      ...popupCommonOption,
      element: div,
      position,
    });
  }

  remove() {
    if (this.element) this.viewer.container.removeChild(this.element);
    this.popup?.destory();
    this.element = null;
  }
}
