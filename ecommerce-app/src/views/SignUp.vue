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


    <input type="password" class="form-control" v-model="password" placeholder="Password" required title="Password must be 8 characters including 1 uppercase letter, 1 lowercase letter and numeric characters" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}">
    <span v-if="score === 0">Use better password</span>
    <span v-if="score === 1">Use better password</span>
    <span v-if="score === 2">Use better password</span>
     <password-meter :password="password" @score="onScore"/>
    </div>
    <button type="submit" class="btn btn-primary" v-on:click="signUp" :disabled='isDisabled'>Create Account</button>
    <div class="form-group">
    <span>Already have an Account? <a data-toggle="modal" data-target="#login" class="link" > Login here </a></span>
</div>
  </form>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import passwordMeter from "vue-simple-password-meter";
export default {
    name: "SignUp",
    components: { passwordMeter },
    data(){
        return{
            email:'',
            password: null,
            score: null
        };
    },
    methods: {
           signUp(){
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
  .then(() => {
    // Signed in
    this.$router.push('shop')
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Incorrect Email or password please try again.")
  });
        },
       onScore({ score, strength }) {
      this.score = score; 
    }
    },
     computed: {
  	isDisabled: function(){
    	return !this.password;
            }
        }

    
  
    
};
</script>
<style scoped>
</style>