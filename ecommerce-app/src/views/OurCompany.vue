<template>
  <div class="company">
        <NavBar></NavBar>
         <LoginModal></LoginModal>
      <SignUpModal></SignUpModal>
    <h1> About Us </h1>
  </div>
</template>

<script>
import LoginModal from '../components/LoginModal.vue';
import SignUpModal from '../components/SignUpModal.vue';
export default {
    name: "Home",
    components:{
      SignUpModal,
      LoginModal

    }
};
</script>