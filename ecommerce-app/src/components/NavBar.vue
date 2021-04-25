<template>
  <div >
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <a class="navbar-brand" ><router-link to="/" class="nav-link"  style="color:black;">            <img  src="../assets/logo_size.jpg" alt="">  </router-link></a>
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
              <p class="nav-link" data-toggle="modal" data-target="#loginmodal">Login</p>
              <!--dont use router link when using modal-->
            </li>
            <li class="nav-item">
              <p class="nav-link" data-toggle="modal" data-target="#signupmodal">Register</p>
            </li>
          </template>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-info mr-4" type="submit">Search</button>
    </form>
  </div>

</nav>
   
  </div>
 
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  name: "NavBar",
  props: {
    msg: String
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
.nav-item{
  color:black;
  font-size: 16pt;
}
</style>