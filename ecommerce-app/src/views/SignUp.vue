<template>
  <div>
     <NavBar></NavBar>
    <div>
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                <div class="col-md-6">
                  <input
                    id="name"
                    type="name"
                    class="form-control"
                    name="name"
                    value
                    required
                    autofocus
                    v-model="form.name"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                     title="Password must be 8 characters including 1 uppercase letter, 1 lowercase letter and numeric characters" 
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    v-model="form.password"
                  />
                    <span v-if="score === 0">Use better password</span>
    <span v-if="score === 1">Use better password</span>
    <span v-if="score === 2">Use better password</span>
     <password-meter :password="form.password" @score="onScore"/>
                </div>
              </div>
               <label for="robot" class="col-sm-2 col-form-label"></label>
  <div class="form-group" data-size="compact" >
       <div id="recaptcha-main" class="grecaptcha" :data-sitekey="sitekey"></div>
      </div>
              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
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
          form:{
           name: "",
            email:"",
            password: null,  
            robot: false,
            },
            score: null,
            error:null,
            sitekey: process.env.VUE_APP_SITE_CAPTCHA
        };
    },
    mounted(){
    if (typeof grecaptcha === "undefined") {
        var script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
        script.onload = this.renderWait;
        document.head.appendChild(script);
    } 
},


   created(){
     this.$nextTick(function(){
       grecaptcha.render('recaptcha-main')
     })
    var $recaptcha = document.querySelector('recaptcha-main');

    if($recaptcha) {
        $recaptcha.setAttribute("required", "required");
    }
   },
    methods: {
           submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {
                 this.$router.replace({ name: "Shop" });
            });
        })
        .catch(err => {
          this.error = err.message;
        });
    },
 
       onScore({ score, strength }) {
      this.score = score; 
    },
     onVerify: function (response) {
      if (response) this.form.robot = true;
    },
     },

  
};
</script>
<style scoped>
</style>