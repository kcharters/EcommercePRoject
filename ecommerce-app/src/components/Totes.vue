<template>
  <div class="Totes">
   

    <div v-for="(testObject, index) in mappedTest.slice(0, 1)" :key="index">

    <div class="d-flex flex-row-4">
               <div class ="
      card-columns">
     
     
    <div v-for="(totebag, idx) in testObject.totebag" :key="idx">
 
       
      
          <div class="card" style="width: 18rem; margin-left: 20px; height: 450px; ">
         
       
            <img :src="totebag.url" class="card-img-top" alt="..." height="250px"/>
            <div class="card-body">
              <h5 class="card-title">{{ totebag.name }}</h5>
              <p class="card-subtitle mb-2 text-muted">
              {{ totebag.description }}
              </p>
              <p class="card-subtitle mb-2 text-muted">${{ totebag.price }}</p>
                 <add-to-cart 
              :product-id="totebag.id"
              :name="totebag.name"
              :description="totebag.description"
              :price="totebag.price"
              :product-image="totebag.url" 
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