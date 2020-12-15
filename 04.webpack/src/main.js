// let a = 1;
// console.log(a)

// require("./main.css")
import Vue from 'vue'
import app from "../components/app.vue";
Vue.config.productionTip = false
new Vue({
    el: '#app',
    data: {
        msg: '666'
    },
    components: {
        app,
    },
})