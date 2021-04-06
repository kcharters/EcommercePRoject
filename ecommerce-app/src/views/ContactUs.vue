<template>
  <div class="contactus">
    <NavBar></NavBar>
    <ContactForm></ContactForm>
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
      LoginModal

    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
