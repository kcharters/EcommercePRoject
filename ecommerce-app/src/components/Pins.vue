<template>
  <div class="Pins">
   

    <div v-for="(testObject, index) in mappedTest.slice(0, 1)" :key="index">

    <div class="d-flex">
      <div class ="
      card-columns">
     
     
        <div v-for="(pins, idx) in testObject.pins" :key="idx">
 
      
      
          <div class="card" style="width: 18rem; margin-left: 20px">
         
       
            <img :src="pins.url" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ pins.name }}</h5>
              <p class="card-subtitle mb-2 text-muted">
              {{ pins.description }}
              </p>
              <p class="card-subtitle mb-2 text-muted">${{ pins.price }}</p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
      
      </div>
      </div>
     </div>
    </div>
   

 
</template>
<script>
import { productsRef } from "../firebase-config.js";

export default {
  name: "Products",
  data: function() {
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
    }

  },
  methods: {
    log(msg) {
      console.log(msg);
    },

  },
};
</script>
<style>
*{
     justify-content: center;
}

.card-columns {
    column-count: 4;
    
  }
 


</style>
