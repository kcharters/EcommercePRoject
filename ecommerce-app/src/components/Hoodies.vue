<template>
  <div class="Hoodies">

   <div v-for="(testObject, index) in mappedTest.slice(0, 4)" :key="index">

    <div class="d-flex flex-row-4">
               <div class ="
      card-columns">
 
    <div v-for="(hoodies, idx) in testObject.hoodies" :key="idx">
 
          <div class="card" style="width: 18rem; margin-left: 20px; ">
            <img :src="hoodies.url" class="card-img-top" alt="..." width="100" height="250"/>
            <div class="card-body">
              <h5 class="card-title">{{ hoodies.name }}</h5>
              <p class="card-subtitle mb-2 text-muted">
              {{ hoodies.description }}
              </p>
              <p class="card-subtitle mb-2 text-muted"> ${{ hoodies.price }}</p>
              <add-to-cart 
              :product-id="hoodies.id"
              :name="hoodies.name"
              :description="hoodies.description"
              :price="hoodies.price"
              :product-image="hoodies.url"
              
              ></add-to-cart>
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
    },
  },
  methods: {
    log(msg) {
      console.log(msg);
    },
  },
};
</script>
<style scoped>
 .card-columns {
    column-count: 4;
    
  }
 

.card{
 margin:10px;
 font-size: 12px;
min-height: 500px;
width: 18rem; margin-left: 20px; 
}
.card-img-top{
width:250px; 
height:200px;
}
</style>