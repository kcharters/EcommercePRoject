<template>
  <div class="ContactForm">
    <div class="container">
      <h1>Contact Us</h1>
      <div class="contact-container">
        <div>
          <h3>Send your questions here</h3>
          <form id="contact-form" class="contact-form"  @sumbit.prevent="submitForm"> 
            <div class="form-row">
              <input type="hidden" name="contact_number">
              <div class="form-group col-md-12">
                <label> Full Name: </label>
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="$v.fullname.$model"
                  :class="{
                    'is-invalid': $v.fullname.$error,
                    'is-valid': !$v.fullname.$invalid,
                  }"
                  name="user_name"
                />
                <div class="valid-feedback">Your Full Name is Valid</div>
                <div class="invalid-feedback">
                  <span v-if="!$v.fullname.required">
                    Full Name is required
                  </span>
                  <span v-if="!$v.fullname.minLength">
                    Full Name must have at least
                    {{ $v.fullname.$params.minLength.min }} characters
                  </span>
                  <span v-if="!$v.fullname.maxLength">
                    Full Name must have not exceed
                    {{ $v.fullname.$params.maxLength.max }} characters
                  </span>
                </div>
              </div>
            </div>
            <div class="form-row ">
              <div class="form-group col-md-6">
                <label> Phone: </label>
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="$v.phone.$model"
                  :class="{
                    'is-invalid': $v.phone.$error,
                    'is-valid': !$v.phone.$invalid,
                  }"
                />
                <div class="valid-feedback">Your Phone Number is Valid</div>
                <div class="invalid-feedback">
                  <span v-if="!$v.phone.required">
                    Phone Number is required
                  </span>
                  <span v-if="!$v.phone.minLength">
                    Phone Number must have at least
                    {{ $v.phone.$params.minLength.min }} characters
                  </span>
                  <span v-if="!$v.phone.maxLength">
                    Phone Number must have not exceed
                    {{ $v.phone.$params.maxLength.max }} characters
                  </span>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label> Email: </label>
                <input
                  type="email"
                  class="form-control"
                  v-model.trim="$v.email.$model"
                  :class="{
                    'is-invalid': $v.email.$error,
                    'is-valid': !$v.email.$invalid,
                  }"
                  name="user_email"
                />
                <div class="valid-feedback">Your Email is Valid</div>
                <div class="invalid-feedback">
                  <span v-if="!$v.email.required">
                    Email is required
                  </span>
                  <span v-if="!$v.email.minLength">
                    Email must have at least
                    {{ $v.email.$params.minLength.min }} characters
                  </span>
                  <span v-if="!$v.email.maxLength">
                    Email must have not exceed
                    {{ $v.email.$params.maxLength.max }} characters
                  </span>
                </div>
              </div>
            </div>
             <div class="form-group" data-size="compact" >
       <div id="recaptcha-main" class="g-recaptcha" :data-sitekey="sitekey"></div>
      </div>
            <div class="form-row">
              <div class="form-group col-md-12 ">
                <label> Subject: </label>
                <textarea
                  class="form-control"
                  v-model.trim="$v.message.$model"
                  :class="{
                    'is-invalid': $v.message.$error,
                    'is-valid': !$v.message.$invalid,
                  }"
                  name="message"
                  rows="10"
                ></textarea> 

                <div class="valid-feedback">Your Message is Valid</div>
                <div class="invalid-feedback">
                  <span v-if="!$v.message.required">
                    Message is required
                  </span>
                  <span v-if="!$v.message.minLength">
                    Message must have at least
                    {{ $v.message.$params.minLength.min }} characters
                  </span>
                  <span v-if="!$v.message.maxLength">
                    Message must have not exceed
                    {{ $v.message.$params.maxLength.max }} characters
                  </span>
                </div>
              </div>
              <button type="submit" class="btn btn-success"> Submit {{submitStatus}} </button>
            </div>
          </form>
        </div>
        <div class="contact-info">
          <h3>Other ways reach us</h3>
          <table>
            <tr>
              <td>Email:</td>
              <td>Bek&kirsten@email.com</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>0273651928</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>101 Roadtonowhere St, USA</td>
            </tr>
          </table>

          <img src="../assets/Hero.png" class="card-img-top" alt="..." />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength
}
from 'vuelidate/lib/validators';
import emailjs from "emailjs-com";
export default {
  name: "ContactForm",
  data: function() {
    return {
      fullname: "",
      email: "",
      phone: "",
      message: "",
     submitStatus: null
    }
  },
  validations: {
    fullname: { required, minLength: minLength(3), maxLength: maxLength(50) },
    email: { required, minLength: minLength(5), maxLength: maxLength(50) },
    phone: { required, minLength: minLength(1), maxLength: maxLength(10) },
    message: { required, minLength: minLength(1), maxLength: maxLength(500) },
  },

  props: {
    msg: String,
  },
   data() {
    return {
      form: {
        robot: false,
        
      },
      sitekey: process.env.VUE_APP_SITE_CAPTCHA
    }
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

     onVerify: function (response) {
      if (response) this.form.robot = true;
    },
/*       submit: (e) => {
            emailjs
        .sendForm(
          "service_8630eyl",
          "contact_form",
          e.target,
          "user_psNoZ84QoMJgDzqhblmjK"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
            alert("message sent");
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );

      alert("Data Submitted");
    },  */
   /*

      emailjs
        .sendForm(
          "service_8630eyl",
          "contact_form",
          e.target,
          "user_psNoZ84QoMJgDzqhblmjK"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
            alert("message sent");
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    }, */



    submitForm () {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "FAIL";
        
      } else {
        
         emailjs
        .sendForm(
          "service_8630eyl",
          "contact_form",
          this,
          "user_psNoZ84QoMJgDzqhblmjK"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
            alert("message sent");
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );

     
       this.submitStatus = "SUCCESS";
      
        
    };
   

  },
/* 
    mounted(){
     document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // generate a five digit number for the contact_number variable
                this.contact_number.value = Math.random() * 100000 | 0;
                // these IDs from the previous steps
                emailjs.sendForm("service_8630eyl",
            "contact_form",
            this,
            "user_psNoZ84QoMJgDzqhblmjK")
                    
            });
 }, */
}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
label {
  font-weight: bold;
}
.container {
  width: 80%;
  margin: 50px auto;
}
.contact-container {
  border-radius: 25px;
  display: flex;
}

.contact-form {
  flex-basis: 60%;
  padding: 40px 60px;
}
.contact-form h3 {
  margin-bottom: 40px;
}
.contact-info {
  flex-basis: 40%;
  padding: 40px;
  background-color: lightgrey;
  border-radius: 25px;
}

.container h1 {
  margin-bottom: 15px;
}

.input-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.input-row .input-group {
  flex-basis: 45%;
}

textarea {
  width: 100%;
  box-sizing: border-box;
  border-radius: d5px;
}
button {
  background-color: lightgrey;
  width: 100%;
  border: none;
  outline: none;
  font-weight: bold;
  height: 40px;
  border-radius: 5px;
  color: black;
  
}

tr td:first-child {
  padding-right: 35px;
}
tr td {
  padding-top: 15px;
  text-align: center;
}
.contact-info h3 {
  margin-bottom: 40px;
}

#message input {
  background-color: #fff;
  height: 1.5em;
  /* or */
  line-height: 1.5em;
}
</style>
