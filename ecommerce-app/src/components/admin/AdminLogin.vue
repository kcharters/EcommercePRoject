<template>
    <div class="ui middle aligned center aligned grid">
        <div class="column">
            <form class="ui large form">
                <div class="ui stacked secondary segment">
                    <div class="field">
                        <div class="ui left icon input large">
                            <i class="user icon"></i>
                            <input
                                type="text"
                                name="email"
                                placeholder="E-mail address"
                                v-model="email"
                            />
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui left icon input large">
                            <i class="lock icon"></i>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                v-model="password"
                            />
                        </div>
                    </div>
                    <div class="ui fluid large teal submit button" @click="loginButtonPressed">Login</div>
                </div>

                <div class="ui error message"></div>
            </form>
            
        </div>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
    data() {
        return {
            email: "",
            password: "",
            adminID: process.env.VUE_APP_ADMINID,
            admindata:""
        };
    },

    created() {
     this.__created();
    },

    methods: {
        __created(){
  

        },
         loginButtonPressed() {    
 
           if(adminUser.user_id == adminid){
            firebase
                    .auth()
                    .signInWithEmailAndPassword(this.email, this.password)
                     .then(() => {
                 this.$router.replace({ name: "admin" });
            });
            }
           else{
               alert("You do not have permission to access the admin panel, if you are admin please signin on the main site otherwise contact your server admin")
           }
        }
    }
};
</script>

