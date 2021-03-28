<template>
  <div >
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" ><router-link to="/" class="nav-link"  style="color:black;"> Bek + Kirstens Shop </router-link></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/" class="nav-link"> Home </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/ourCompany" class="nav-link">About Us</router-link>
      </li>
        <li class="nav-item">
        <router-link to="/shop" class="nav-link">Shop</router-link>
      </li>
        <li class="nav-item">
        <router-link to="/faq" class="nav-link">FAQ</router-link>
      </li>
            <li class="nav-item">
        <router-link to="/contactus" class="nav-link">Contact Us</router-link>
      </li>
       <template v-if="user.loggedIn">
            <li class="nav-link">{{user.data.displayName}}</li>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="signOut">Sign out</a>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link to="login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="signup" class="nav-link">Register</router-link>
            </li>
          </template>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>

</nav>
   
  </div>
 
</template>

<script>
import Login from '../views/Login.vue';
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  name: "NavBar",
  props: {
    msg: String
  },
  components:{
    Login
  },
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Home"
          });
        });
    }
  } 

};
</script>

<style scoped lang="scss">

</style>