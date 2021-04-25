import Vue from "vue";
import App from "./App.vue";

import "./registerServiceWorker";
import router from "./router";

import jQuery from'jquery';
window.$ = window.jQuery = jQuery;
import 'bootstrap';
import './assets/styles.scss';

import{ init } from 'emailjs-com';
init("user_psNoZ84QoMJgDzqhblmjK");
import Vuelidate from 'vuelidate';
import store from './store/index.js';
import { rtdbPlugin } from 'vuefire';

import VueSimpleAccordion from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';


Vue.use(VueSimpleAccordion);
Vue.use(rtdbPlugin);
Vue.config.productionTip = false;
Vue.use(Vuelidate);

Vue.component('NavBar',require('./components/NavBar.vue').default);
Vue.component('ContactForm',require('./components/ContactForm.vue').default);
Vue.component('Hero',require('./components/Hero.vue').default);
Vue.component('products',require('./sections/products.vue').default);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

