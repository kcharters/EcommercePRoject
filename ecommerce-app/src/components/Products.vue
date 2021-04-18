<template>
  <div class="panel-body">
    <h3>Products</h3>
    <li v-for="(item, idx) in products" :key="idx">
      <p>{{item}} </p>
    </li>
  </div>
</template>

<script>
import { productsRef } from "../firebase-config.js";

export default {
 name: "Products",
  data: function() {
         return  {
           products: []
         }
  },
  firebase: {
    products: productsRef,
  },
  created(){

  },
  methods: {
 log(msg){
  console.log(msg); 
 }

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
