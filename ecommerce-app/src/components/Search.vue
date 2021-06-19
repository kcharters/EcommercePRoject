<template>
<div class="container ">
   <img class="searchby" src="../assets/search-by-algolia-light-background.png" alt="">
   <ais-instant-search
     index-name="ecommerce_app"
  :search-client="searchClient"
  >

<ais-search-box>
  
</ais-search-box>
<ais-sort-by
  :items="[
    { value: 'ecommerce_app', label: 'Featured' },
    { value: 'ecommerce_app_price_asc', label: 'Price asc.' },
    { value: 'ecommerce_app_price_desc', label: 'Price desc.' },
  ]"
/>



<div class="container ">
<div class="ais-Hits ">
  <ais-infinite-hits >
  <ais-InfiniteHits-item slot="item" slot-scope="{ item}">
    <div class="panel ">
      <img class="itemsearch" :src="item.url"/> 
    </div>
    <div class="panel">
      <div class="panel2">
    <strong>Name:</strong>{{ item.name }} <br/>
    <strong>Price </strong> ${{ item.price}} <br/>
    <strong>Decription</strong> {{item.description}}<br/>
    </div>
    <add-to-cart :product-id="item.id"
              :name="item.name"
              :description="item.description"
              :price="item.price"
              :product-image="item.url" ></add-to-cart>
    </div> 
    
  </ais-InfiniteHits-item>
</ais-infinite-hits>
</div>   
</div>
   </ais-instant-search>
   <AddToCartModal></AddToCartModal>
</div>
</template>

<script>
  import algoliasearch from 'algoliasearch/lite';
import AddToCart from './AddToCart.vue';

  export default {
  components: { AddToCart },
    data() {
      return {
        searchClient: algoliasearch(
          'HI91R0JX06',
          'f3f8d55a8cd5d22a54404bd07179e10f'
        ),
      };
    },
    methods: {
      transformItems(items) {
        return items.map(item => ({
          ...item,
          label: item.label.toUpperCase(),
        }));
      },
    },
  };
</script>
<style lang="scss" scoped>

ul{
    list-style-type: none;
}
img{
    height: 200px;
    width:200px;
    float: right;
}
.container{
  padding: 20px; 
}
.panel{
 
 width: 300px;
 height: 200px;
 float: left;
 padding:10px ;
 .panel2{
   padding-top: 20px;
 }
}
.searchby{
  float: left;
  width: 140px;
  height: 20px;
}
.itemsearch{
   float: left;
   margin-left: 50px;
}
</style>