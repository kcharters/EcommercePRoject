<template>
  <div class="panel-body">
    <h3>Products</h3>
    <hr>
    <h1>Pins</h1>
    <hr>

    <Pins></Pins>
    <hr>
    <h1>Stickers</h1>
    <hr>

   <Stickers></Stickers>
    <hr>
    <h1>Totes</h1>
    <hr>
   <Totes></Totes>
 <hr>
    <h1>Mugs</h1>
    <hr>
   <Mugs></Mugs>
  
<hr>
    <h1>Hoodies</h1>
    <hr>
  <Hoodies></Hoodies>
  <hr>
    <h1>Tshirts</h1>
    <hr>
    <Tshirts></Tshirts>
    
<AddToCartModal></AddToCartModal>
  </div>

  
</template>

<script>
import { productsRef } from "../firebase-config.js";

export default {
  name: "Products",
  data: function () {
    return {
      products: [],
    };
  },
  firebase: {
    products: productsRef,
  },
  created() {},
  computed: {
    mappedTest() {
      //this maps over the keys in the json file so we can pick out the products 
      return Object.keys(this.products).map((e) => {
        return this.products[e];
      });
    },
  },
  methods: {
    log(msg) {
      console.log(msg);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
img {
  width: 100px !important;
  height: 100px !important;
}

</style>
