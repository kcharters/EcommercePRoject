import Vue from "vue";
import App from "./App.vue";

import "./registerServiceWorker";
import router from "./router";

import jQuery from'jquery';
window.$ = window.jQuery = jQuery;
import 'bootstrap';
import './assets/styles.scss';

import 'instantsearch.css/themes/reset.css';

import 'instantsearch.css/themes/satellite.css';

import{ init } from 'emailjs-com';
init("user_psNoZ84QoMJgDzqhblmjK");
import Vuelidate from 'vuelidate';
import store from './store/index.js';
import { rtdbPlugin } from 'vuefire';

import Element from 'element-ui'

Vue.use(Element)

import VueSimpleAccordion from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';
import InstantSearch from 'vue-instantsearch';

Vue.use(VueSimpleAccordion);
Vue.use(rtdbPlugin);
Vue.config.productionTip = false;
Vue.use(Vuelidate);

Vue.use(InstantSearch);

Vue.component('NavBar',require('./components/NavBar.vue').default);
Vue.component('ContactForm',require('./components/ContactForm.vue').default);
Vue.component('Hero',require('./components/Hero.vue').default);
Vue.component('products',require('./sections/products.vue').default);
Vue.component('Pins',require('./components/Pins.vue').default);
Vue.component('Stickers',require('./components/Stickers.vue').default);
Vue.component('Totes',require('./components/Totes.vue').default);
Vue.component('Mugs',require('./components/Mugs.vue').default);
Vue.component('Hoodies',require('./components/Hoodies.vue').default);
Vue.component('Tshirts',require('./components/Tshirts.vue').default);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

