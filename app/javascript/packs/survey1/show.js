import Vue from 'vue/dist/vue.esm'
import "../../../stylesheets/survey1/show.scss"

Vue.config.productionTip = false

document.addEventListener("DOMContentLoaded", () => {
  const language = document.querySelector("[v-model='user.language']:checked")

  new Vue({
    el: "#survey-form",
    data: function () {
      return {
        user: {
          name: document.querySelector("[v-model='user.name']").value,
          language: language ? language.value : undefined,
          other_language: document
            .querySelector("[v-model='user.other_language']").value
        }
      }
    }
  })
})
