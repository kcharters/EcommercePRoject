<template>
 <div class="admin">
  <NavBar></NavBar>
    <Admin></Admin>
 </div>
</template>

<script>
import Admin from '../components/admin/Admin.vue';

export default {
    name: "Admin",
    components:{
      Admin,

    }
};
</script>
