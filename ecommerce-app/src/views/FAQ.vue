<template>
  <div class="faq">
        <NavBar></NavBar>
         <LoginModal></LoginModal>
      <SignUpModal></SignUpModal>
      <AddToCartModal></AddToCartModal>
      <FAQ></FAQ>
  </div>
</template>

<script>
import LoginModal from '../components/LoginModal.vue';
import SignUpModal from '../components/SignUpModal.vue';
import FAQ from '../components/FAQ.vue'
export default {
    name: "Home",
    components:{
      SignUpModal,
      LoginModal,
      FAQ

    }
};
</script>