import Vue from 'vue/dist/vue.esm'
import ColorSelector from "../../components/color_selector.vue"

Vue.config.productionTip = false

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#color-selector",
    template: "<ColorSelector/>",
    components: { ColorSelector }
  })
})
