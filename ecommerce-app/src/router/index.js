
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
//import SignUpModal from "..";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
//import firebase from 'firebase';

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
    // meta:{
    //   requiresAuth: true
    // },
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

  },
/*   {
    path: "/signUpModal",
    name: 'SignUpModal',
    component: SignUpModal

  },
 */

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

//will look in to this later
// router.beforeEach((to,from,next) => {
// const currentUser = firebase.auth().currentUser;
// const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
// if(requiresAuth && !currentUser) 
// {next('login')}
// else if (!requiresAuth && currentUser){next('home')}
// else {next()}
// });
export default router;