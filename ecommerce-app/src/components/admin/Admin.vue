<template>
  <div class="admin">
   
      <!-- page-content  -->
      <main class="page-content pt-2">
    
        <div class="container-fluid p-5">
          <div class="row">
            <div class="form-group col-md-12">
              <h2>Admin Area</h2>
              
          <component :is="theComponent" v-bind="somethingWeWantToPass"></component>
                <div class="column">
             <div class="form-group col-md-12">
              <p
                id="toggle-sidebar"
                @click="toggleSidebar"
                class="btn btn-secondary rounded-0"
              >
                <span>Toggle Sidebar</span>
              </p>
            </div>
          <div class="row">
            <div class="form-group col-md-12">
              <small
                >Made with
                <i class="fa fa-heart text-danger" aria-hidden="true"></i> by
                <span class="text-secondary font-weight-bold"
                  >Mohamed Azouaoui</span
                ></small
              >
            </div>
          </div>

                </div>
              
            </div>

            
          </div>

    <div class="page-wrapper default-theme sidebar-bg bg toggled">
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a>pro sidebar</a>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">
            <div class="user-pic">
              <!-- <img class="img-responsive img-rounded" src="" alt="User picture"> -->
            </div>
            <div class="user-info">
              <span class="user-name"
                >John
                <strong>Smith</strong>
              </span>
              <span class="user-role">Administrator</span>
              <span class="user-status">
                <i class="fa fa-circle"></i>
                <span>Online</span>
              </span>
            </div>
          </div>
          <!-- sidebar-search  -->
          <div class="sidebar-item sidebar-search">
            <div>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control search-menu"
                  placeholder="Search..."
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- sidebar-menu  -->
          <div class="sidebar-item sidebar-menu">
            <span class="header-menu">
                <span>General</span>
            </span>
            <ul >
              
              <li class="sidebar-dropdown">
                <a @click="goDashboard">
                  <i class="fa fa-tachometer-alt"></i>
                 <span class="menu-text">Dashboard</span>
                </a>
              </li>
                 
              <li class="sidebar-dropdown">
              <a @click="goProducts">
                  <i class="fa fa-shopping-cart"></i>
                  <span class="menu-text">Products</span>
              </a>
                   
              </li>
              
            </ul>
         
          </div>
          <!-- sidebar-menu  -->
        </div>
        <!-- sidebar-footer  -->
        <div class="sidebar-footer">
          <div class="dropdown">
            <a
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-cog"></i>
              <span class="badge-sonar"></span>
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuMessage">
              <a class="dropdown-item">My profile</a>
              <a class="dropdown-item">Help</a>
              <a class="dropdown-item">Setting</a>
            </div>
          </div>
          <div>
            <a>
              <i class="fa fa-power-off"></i>
            </a>
          </div>
          <div class="pinned-footer">
            <p>
              <i class="fas fa-ellipsis-h"></i>
            </p>
          </div>
        </div>
      </nav>
      
</div>

        </div>
      </main>
      <!-- page-content" -->
  </div>
</template>

<script>
// @ is an alias to /src


import { productsRef, fsdb } from "../../firebase-config.js";
import firebase from "firebase";
import ProductsList from "./ProductsList.vue"


export default {
  name: "Admin",
  components: {
    ProductsList
  },
  data: function () {
    return {
      products: [],
      myproducts: [],
      theComponent: '',
      somethingWeWantToPass: ProductsList,
    };
  },
  firebase: {
    products: productsRef,
  },

  created() {},
  computed: {
   
    
  },
  methods: {
   toggleSidebar() {
      $(".page-wrapper").toggleClass("toggled");
    },
    signout() {
      firebase
        .auth()
        .signOut()
        .then((user) => {
          this.$router.push("/admin");
        });
    },
    log(msg) {
      console.log(msg);
    },
    goProducts(){
this.theComponent = ProductsList
    }
    ,
    goDashboard(){
this.theComponent = ''
    }
  },
};
</script>
<style >
section{
  float: left;
}

</style>
