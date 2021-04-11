<template>
  <div class="faq">
        <NavBar></NavBar>
         <LoginModal></LoginModal>
      <SignUpModal></SignUpModal>
    <h1>FAQ</h1>
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