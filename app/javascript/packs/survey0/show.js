import Vue from 'vue/dist/vue.esm'
import SurveyForm from "../../components/survey_form.vue"

Vue.config.productionTip = false

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#survey-form",
    template: "<SurveyForm/>",
    components: { SurveyForm }
  })
})
