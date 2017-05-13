import Vue from 'vue/dist/vue.esm'
import ColorSelector from "../../components/color_selector.vue"

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#demo1",
    template: "<ColorSelector/>",
    components: { ColorSelector }
  })
})
