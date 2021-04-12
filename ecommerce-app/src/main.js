import Vue from "vue";
import App from "./App.vue";

import "./registerServiceWorker";
import router from "./router";

import firebase from 'firebase/app';
import "firebase/auth";
import jQuery from'jquery';
window.$ = window.jQuery = jQuery;
import 'bootstrap';
import './assets/styles.scss';
// import store from './store';
import{ init } from 'emailjs-com';
init("user_psNoZ84QoMJgDzqhblmjK");
import Vuelidate from 'vuelidate';
import store from './store/index.js';

Vue.config.productionTip = false;
Vue.use(Vuelidate);

Vue.component('NavBar',require('./components/NavBar.vue').default);
Vue.component('ContactForm',require('./components/ContactForm.vue').default);
Vue.component('Hero',require('./components/Hero.vue').default);
Vue.component('products',require('./sections/products.vue').default);

//would normally be in its own config file not here 
//bt tutorial put it here 
let app ='';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};
firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});
firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          unsubscribe();
          resolve(user);
      }, reject);
  })
};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

