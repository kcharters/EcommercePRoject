<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
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
            <ul>
              <li class="header-menu">
                <span>General</span>
              </li>
              <li class="sidebar-dropdown">
                <a>
                  <i class="fa fa-tachometer-alt"></i>
                  <span class="menu-text">Dashboard</span>
                </a>
              </li>

              <li class="sidebar-dropdown">
                <a>
                  <i class="fa fa-shopping-cart"></i>
                  <span class="menu-text">Products</span>
                </a>
                <div class="sidebar-submenu">
                  <ul>
                    <li>
                      <a>Products </a>
                    </li>
                    <li>
                      <a>Orders</a>
                    </li>
                    <li>
                      <a>Credit cart</a>
                    </li>
                  </ul>
                </div>
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
      <!-- page-content  -->
      <main class="page-content pt-2">
        <div id="overlay" class="overlay"></div>
        <div class="container-fluid p-5">
          <div class="row">
            <div class="form-group col-md-12">
              <h2>Admin Area</h2>
               <section>
        <div class="ui middle aligned center aligned grid">
            <div class="column">
               
                <button class="ui pink submit button" @click="signout">Signout</button>
                <table class="ui celled table">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </section>
            </div>

            <div class="form-group col-md-12">
              <p
                id="toggle-sidebar"
                @click="toggleSidebar"
                class="btn btn-secondary rounded-0"
              >
                <span>Toggle Sidebar</span>
              </p>
            </div>
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
      </main>
      <!-- page-content" -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import $ from "jquery";
import { productsRef, adminref } from "../firebase-config.js";
import firebase from "firebase";

export default {
  name: "admin",
  components: {},
  data: function () {
    return {
      products: [],
      adminref: "",
      users: [],
      user: null,
      email: "Admin",
    };
  },
  firebase: {
    products: productsRef,
  },
  created() {
    var self = this;
    firebase.auth().onAuthStateChanged(function (user) {
      self.user = user;
    });
    this.users = [];
    firebase
      .firestore()
      .collection("roles")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          var user = doc.data();
          user.id = doc.id;
          console.log(doc.data());
          if (!user.role.admin) this.users.push(user);
        });
      });
      
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
    changeRole(uid, event) {
      var addMessage = firebase.functions().httpsCallable("setUserRole");
      var data = { uid: uid, role: { [event.target.value]: true } };
      addMessage(data)
        .then(function (result) {
          console.log(result);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    log(msg) {
      console.log(msg);
    },
  },
};
</script>
