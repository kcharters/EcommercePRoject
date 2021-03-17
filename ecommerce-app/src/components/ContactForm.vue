<template>
  <div class="ContactForm">
      <div class="container"> 
          <h1>Contact Us</h1>
      <div class="contact-container">
        <div class="contact-form">
          <h3>Send your questions here</h3>
          <form class="contact-form" @submit.prevent="sendEmail">
            <div class="input-row">
              <div class="input-group form-inline">
                <label> First Name: </label>
                <input type="text" name = "user_name"/>
              </div>
              <div class="input-group form-inline">
                <label> Last Name: </label>
                <input type="text" />
              </div>
            </div>
            <div class="input-row ">
              <div class="input-phone form-inline">
                <label> Phone: </label>
                <input type="text" />
              </div>
              <div class="input-email form-inline">
                <label> Email: </label>
                <input type="email"  name ="user_email"/>
              </div>
            </div>
            <div class ="input-group form-inline" >
               <label > Subject: </label>
            <textarea name="message"  rows="10"></textarea>
            <button type="submit" value="Send"> Submit </button>
          
            </div>
           

          </form>
        </div>
        <div class="contact-info">
          <h3>Other ways reach us</h3>
          <table>
              <tr>
                  <td>Email: </td>
                  <td> Bek&kirsten@email.com</td>
              </tr>
              <tr>

               <td>Phone: </td>
               <td> 0273651928</td>
              </tr>
                <tr>

               <td>Address: </td>
               <td> 101 Roadtonowhere St, USA </td>
              </tr>
          </table>
                    <img src="../assets/Hero.png" class="card-img-top" alt="...">
        </div>   

      </div>
    </div>
   
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
  name: "ContactForm",
  props: {
    msg: String
  },
    methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_8630eyl', 'contact_form', e.target, 'user_psNoZ84QoMJgDzqhblmjK')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
label{
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
.contact-form h3{
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
.input-row .input-group{
  flex-basis: 45%;
}

input{
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  padding-bottom: 5px;
}
textarea{
  width: 100%;
  box-sizing: border-box;
   border-radius: d5px;


}
button{
    background-color:lightgrey;
    width:100%;
    border:none;
    outline:none;
    font-weight: bold;
    height: 40px;
     border-radius: 5px;
}

tr td:first-child{
    padding-right: 35px;
 
}
tr td{
 
    padding-top: 15px;
    text-align: center;
 
}
.contact-info h3{
  margin-bottom: 40px;
}


</style>