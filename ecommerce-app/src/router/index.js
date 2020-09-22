import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";

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
    component: () =>
      import(/* webpackChunkName: "" */ "../views/Shop.vue")
  }



];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;