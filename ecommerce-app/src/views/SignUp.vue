<template>
  <div class="sign-up">
      <NavBar></NavBar>
      <h1>Sign Up</h1>
      <div class="container w-25 centered">
    <form class="">
     <div class="form-group ">
     <label for="signupInputEmail1">Email address</label>
    <input type="text" class="form-control" v-model="email" placeholder="Email" required>
    </div>
    <div class="form-group">
     <label for="signupInputPassword1">Password</label>
    <input type="password" class="form-control" v-model="password" placeholder="Password" required>
    </div>
    <button type="submit" class="btn btn-primary" @click="signUp">Create Account</button>
    <div class="form-group">
    <span>Already have an Account? <a data-toggle="modal" data-target="#login" class="link" > Login here </a></span>
</div>
  </form>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: "SignUp",
    data(){
        return{
            email:'',
            password: ''

        };
    },
    methods: {
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
                 (user) => {
           // var user = firebase.auth().currentUser;
            this.$router.push('shop')     
            console.log(user)      
                },
                (err) => {
                    alert('Oh no!' + err.message)
                }
            ).catch((error)=>{
                var errorCode = error.code;
            var errorMessage = error.message;
            });
        }
    }
    
};
</script>
<style scoped>
</style>