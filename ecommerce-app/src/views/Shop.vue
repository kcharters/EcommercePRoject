<template>
  <div class="shop">

        <NavBar></NavBar>
         <LoginModal></LoginModal>
      <SignUpModal></SignUpModal>
    <h1 v-if="user"> Why Not Go Shopping </h1>
  </div>

</template>

<script>
import { mapGetters } from "vuex";
import LoginModal from '../components/LoginModal.vue';
import SignUpModal from '../components/SignUpModal.vue';

export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
    components:{
      SignUpModal,
      LoginModal

    }
};
</script>