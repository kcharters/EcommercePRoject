<template>
  <div class="login"> 
    
    <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="loginModalLabel">Login</h5>
        <div class="modal-body">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
          <input class="form-control"  type="text" v-model="email" placeholder="Email">
          </div>
          <div class="input-group-prepend">
          <input class="form-control"  type="password" v-model="password" placeholder="Password">
            </div>
          <span>Dont have an account? <router-link to="/signup" data-dismiss="modal">Create one here </router-link></span>
          </div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        </button>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="login">Login</button>
      </div>
    </div>
  </div>
</div>

  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: "Login",
    data(){
        return{
          email: null,
          password:null
        };
    },
    methods: {
        login(){
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
  .then(() => {
    // Signed in
    this.$router.push('shop')
    document.getElementById('loginbutton').innerHTML("Welcome")
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Incorrect Email or password please try again.")
    this.$router.push('login')
  });
        }
    }

};
</script>
<style scoped>
</style>