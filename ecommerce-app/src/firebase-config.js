//firebase config in its own file
import Vue from "vue";
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import 'firebase/firestore'
import store from './store/index.js';

import { rtdbPlugin } from 'vuefire';
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)
Vue.use(rtdbPlugin);

export let firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID,
  };

  
let app = firebase.initializeApp(firebaseConfig);
let fsdb = firebase.firestore();
let db = firebase.database();
let productsRef = db.ref("products");  
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
  export { app, db, productsRef, fsdb};