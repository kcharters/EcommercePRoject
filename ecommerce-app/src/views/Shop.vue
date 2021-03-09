<template>
  <div class="shop">

        <NavBar></NavBar>
    <h1 v-if="user"> Why Not Go Shopping </h1>
  </div>

</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  }
};
</script>