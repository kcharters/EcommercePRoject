<template>
  <div class="login">
    <h1>Login</h1>
    <input type="text" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="login">Login</button>
    <span>Dont have an account? <router-link to="/signup">Create one here </router-link></span>
    
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: "Login",
    data(){
        return{
          email:'',
          password:''
        };
    },
    methods: {
        login: function(){
            firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
              (user)=>{
                this.$router.replace('/')
              },
              (err)=>{
                alert('Oh no!' + err.message)
              }
            )
        }
    }

};
</script>
<style scoped>
</style>