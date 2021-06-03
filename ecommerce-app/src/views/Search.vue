<template>
  <div class="search">
      <NavBar></NavBar>
      
       <LoginModal></LoginModal>
      <SignUpModal></SignUpModal>
   <Search></Search>
  </div>
</template>
<script>
import LoginModal from '../components/LoginModal.vue';
import SignUpModal from '../components/SignUpModal.vue';
import Search from "../components/Search.vue"
export default {
    name: "Home",
    components:{
      SignUpModal,
      LoginModal,
      Search,
     }
};
</script>
<style scoped>

</style>