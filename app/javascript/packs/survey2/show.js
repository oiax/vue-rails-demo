import Vue from "vue/dist/vue.esm"
import VueDataScooper from "vue-data-scooper"
import "../../../stylesheets/survey2/show.scss"

Vue.config.productionTip = false
Vue.use(VueDataScooper)

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#survey-form"
  })
})
