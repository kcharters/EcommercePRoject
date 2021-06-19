<template>
  <div class="company">
        <NavBar></NavBar>
         <LoginModal></LoginModal>
      <SignUpModal></SignUpModal>
    <AboutUs></AboutUs>
  </div>
</template>

<script>
import LoginModal from '../components/LoginModal.vue';
import SignUpModal from '../components/SignUpModal.vue';
import AboutUs from '../components/AboutUs.vue'
export default {
    name: "Home",
    components:{
      SignUpModal,
      LoginModal,
      AboutUs

    }
};
</script>