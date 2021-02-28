
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";

import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import firebase from 'firebase/app';
import "firebase/auth";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin
  },
  {
    path: "/ourCompany",
    name: "OurCompany",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "" */ "../views/OurCompany.vue")
  },
  {
    path: "/faq",
    name: "FAQ",
    component: () =>
      import(/* webpackChunkName: "" */ "../views/FAQ.vue")
  },

  {
    path: "/shop",
    name: "Shop",
    //to require auth fro a page
    meta:{
      requiresAuth: true
     },
    component: () =>
      import(/* webpackChunkName: "" */ "../views/Shop.vue")

  },
  {
    path: "/login",
    name: 'Login',
    component: Login
  },
  {
    path: "/signup",
    name: 'SignUp',
    component: SignUp

  }


];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          unsubscribe();
          resolve(user);
      }, reject);
  })
};


router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await firebase.getCurrentUser()){
    next('SignUp');
  }else{
    next();
  }
});

export default router;