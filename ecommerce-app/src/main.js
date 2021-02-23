import Vue from "vue";
import App from "./App.vue";

import "./registerServiceWorker";
import router from "./router";

import firebase from 'firebase/app';

import jQuery from'jquery';
window.$ = window.jQuery = jQuery;
import 'bootstrap';
import './assets/styles.scss';

Vue.component('NavBar',require('./components/NavBar.vue').default);
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


firebase.auth().onAuthStateChanged(()=>{
if(!app){
  app = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app');
}
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

