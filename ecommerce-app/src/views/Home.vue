<template>
  <div class="home">
    <NavBar></NavBar>
    <hr>
        <Hero></Hero>
        <products></products>
          <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-md-6">
            <img  src="../assets/flowerart.png" alt="" width="450">
          </div>
          <div class="col-md-6">
            <h3>Learn More About us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!
            </p>
             <button class="btn btn-secondary btn-info mr-4">About Us</button>
          </div>
        </div>
      </div>
       <LoginModal></LoginModal>
      <SignUpModal></SignUpModal>
  </div>
</template>

<script>

import LoginModal from '../components/LoginModal.vue';
import SignUpModal from '../components/SignUpModal.vue';
export default {
    name: "Home",
    components:{
      SignUpModal,
      LoginModal,


    }
};
</script>
<style  lang="scss" >
.home{
  background-color: #2f6690 ;
      font-family: 'Roboto';
}
p{
   
color:white;
}
h3{
       font-family: 'Roboto';
  color:white;
}
</style>


