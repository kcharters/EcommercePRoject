
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Admin from "../components/admin/Admin.vue"
import ProductsCreate from "../components/admin/ProductsCreate.vue"
import ProductsList from "../components/admin/ProductsList.vue"
import dashboard from "../components/admin/Dashboard.vue"
import WomensHoodieEdit from "../components/edit/editwomenshoodies.vue"
import WomensTshirtEdit from "../components/edit/editwomenstshirts.vue"
import MensHoodieEdit from "../components/edit/editmenshoodies.vue"
import MensTshirtEdit from "../components/edit/editmentshirts.vue"
import MugsEdit from "../components/edit/editmugs.vue"
import StickersEdit from "../components/edit/editstickers.vue"
import ToteEdit from "../components/edit/edittote.vue"
import PinEdit from "../components/edit/editpins.vue"



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
    component: Admin,
      //to require auth from a page
    meta:{
      requiresAuth: true
     },
     children:[
      {
        path: "dashboard",
       name:"dashboard",
        component: dashboard,
        
      },
      {
        path: "productslist",
        name:"productslist",
        component: ProductsList, 
        }, 
        {
          path: "productscreate",
         name:"productscreate",
          component: ProductsCreate,
          
        },
        {
          path: "editwomenshoodie/:id",
          name: "editwomenshoodie",
          component: WomensHoodieEdit,
          
        },
        {
          path: "editwomenstshirt/:id",
          name: "editwomenstshirt",
          component: WomensTshirtEdit,
          
        },
        {
          path: "editmenshoodie/:id",
          name: "editmenshoodie",
          component: MensHoodieEdit,
          
        },
        {
          path: "editmensthirt/:id",
          name: "editmensthirt",
          component: MensTshirtEdit,
          
        },
        {
          path: "editmugs/:id",
          name: "editmugs",
          component: MugsEdit,
          
        },
        {
          path: "editstickers/:id",
          name: "editstickers",
          component: StickersEdit,
          
        },
        {
          path: "edittote/:id",
          name: "edittote",
          component: ToteEdit,
          
        },
        {
          path: "editpins/:id",
          name: "editpins",
          component: PinEdit,  
        },
    ]     
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

  },
  {
    path: "/contactus",
    name: "ContactUs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "" */ "../views/ContactUs.vue")
  },
  {
    path: "/search",
    name: "Search",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "" */ "../views/Search.vue")
  },  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach(async (to, from, next) => {

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await firebase.getCurrentUser()){
    next('SignUp');
  }else{
    next();
  }
});
export default router;