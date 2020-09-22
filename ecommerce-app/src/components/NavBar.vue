<template>
  <div >
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Bek + Kirstens Shop</a>
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
        <a data-toggle="modal" data-target="#login" class="nav-link">Login</a>
      </li>
  
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  <Login></Login>
</nav>
   
  </div>
 
</template>

<script>
import Login from '../views/Login.vue';
export default {
  name: "NavBar",
  props: {
    msg: String
  },
  components:{
    Login
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>