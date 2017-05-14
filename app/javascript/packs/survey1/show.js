import Vue from 'vue/dist/vue.esm'
import "../../../stylesheets/survey1/show.scss"

Vue.config.productionTip = false

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#survey-form",
    data: function () {
      return {
        user: {
          name: "",
          language: undefined,
          other_language: ""
        }
      }
    }
  })
})
