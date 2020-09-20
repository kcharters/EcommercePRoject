<template>
  <div class="sign-up">
    <h1>Sign Up</h1>
    <input type="text" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="signUp">Create Account</button>
    <span>Already have an Account? <router-link to="/login"> Login here </router-link></span>
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
                    this.$router.replace('/')
                },
                (err) => {
                    alert('Oh no!' + err.message)
                }
            )
        }
    }
    
};
</script>
<style scoped>
</style>