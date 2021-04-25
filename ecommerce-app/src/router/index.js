
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AdminLogin from "../components/admin/AdminLogin.vue";
import Admin from "../components/admin/Admin.vue"
import ProductsCreate from "../components/admin/ProductsCreate.vue"
import ProductsEdit from "../components/admin/ProductsEdit.vue"
import ProductsList from "../components/admin/ProductsList.vue"

import firebase from 'firebase/app';
import "firebase/auth";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  // {
    //still working on admin specific login
  //   path: "/admin",
  //   name: "adminLogin",
  //   component: AdminLogin,
  // },
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
        path: "productslist",
       name:"productslist",
        component: ProductsList,
        meta:{keepAlive:true}

      },
      {
        path: "productsedit",
        name: "productsedit",
        component: ProductsEdit,
        meta:{keepAlive:true}
      },
      {
        path: "productscreate",
       name:"productscreate",
        component: ProductsCreate,
        meta:{keepAlive:true}
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
];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach(async (to, from, next) => {
  firebase.auth().onAuthStateChanged(userAuth => {
    if (userAuth) {
      firebase.auth().currentUser.getIdTokenResult()
        .then(function ({
          claims
        }) {
          if (claims.customer) {
            if (to.path !== '/customer')
            return next({
              path: '/customer',
            })
          } else if (claims.admin) {
            if (to.path !== '/admin')
              return next({
                path: '/admin',
              })
          } 
        })
    } else {
      if (to.matched.some(record => record.meta.auth)) {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        })
      } else {
        next()
      }
    }
  })
  next()
});
export default router;