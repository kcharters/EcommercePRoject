import Vue from "vue";
import App from "./App.vue";

import "./registerServiceWorker";
import firebase from 'firebase';
import router from './router';
import jQuery from'jquery';
window.$ = window.jQuery = jQuery;
import 'bootstrap';
import './assets/styles.scss';

Vue.component('NavBar',require('./components/NavBar.vue').default);
//would normally be in its own config file not here 
//bt tutorial put it here 
let app ='';
const firebaseConfig = {
  apiKey: "AIzaSyAPFRj6hGYC7WpSGMiAXyutMDjjQYcwp5g",
  authDomain: "ecommerceapp-e526f.firebaseapp.com",
  databaseURL: "https://ecommerceapp-e526f.firebaseio.com",
  projectId: "ecommerceapp-e526f",
  storageBucket: "ecommerceapp-e526f.appspot.com",
  messagingSenderId: "92254759656",
  appId: "1:92254759656:web:24f0b98cd9972b8bae775d",
  measurementId: "G-SP1VES4VWH"
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
