<template>
  <div class="Tshirts">
   

   <div v-for="(testObject, index) in mappedTest.slice(0, 4)" :key="index">

    <div class="d-flex flex-row-4">
    <div class ="card-columns">
    <div class="item" v-for="(tshirts, idx) in testObject.tshirts" :key="idx">
          <div class="card" >
            <img :src="tshirts.url" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ tshirts.name }}</h5>
              <p class="card-subtitle mb-2 text-muted">
              {{ tshirts.description }}
              </p>
              <p class="card-subtitle mb-2 text-muted">${{ tshirts.price }}</p>
                      <add-to-cart 
              :product-id="tshirts.id"
              :name="tshirts.name"
              :description="tshirts.description"
              :price="tshirts.price"
              :product-image="tshirts.url" 
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