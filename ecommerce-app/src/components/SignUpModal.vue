<template>
  <div class="signupmodal">
    <div
      class="modal fade"
      id="signupmodal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
     <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="signupModalLabel">SignUp</h5>
        <div class="modal-body">
           <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                             <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>

        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       <button type="button" class="btn btn-primary" >Sign Up</button>
      </div>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "SignUpModal",
    data(){
        return{
          email:'',
          password:''
        }
    },
  props: {
    msg: String
  }

};
</script>
<style scoped >

</style>
