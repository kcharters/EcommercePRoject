<template>
<div class="container">
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
 
<div class="container">
<div class="ais-Hits">
  <ais-infinite-hits >
  <ais-InfiniteHits-item slot="item" slot-scope="{ item}">
    <div class="panel">
    <strong>Name:</strong>{{ item.name }} <br/>
    <strong>Price </strong> ${{ item.price}} <br/>
    <strong>Decription</strong> {{item.description}}
    </div> 
    <div class="panel">
      <img :src="item.url"/> 
    </div>
  </ais-InfiniteHits-item>
</ais-infinite-hits>
</div>   
</div>
   </ais-instant-search>
</div>
</template>

<script>
  import algoliasearch from 'algoliasearch/lite';

  export default {
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
*{
    font-family: Arial, Helvetica, sans-serif !important;
}
ul{
    list-style-type: none;
}
img{
    height: 200px;
    width:200px;
    float: right;
}
input{
    font-family: Arial, Helvetica, sans-serif !important;
}
.container{
  padding: 20px;
  padding-left: 100px;
}
.panel{
 margin: auto 0;
 width: 300px;
 height: 200px;
 float: left;
 
}
.panel2{
  width: 75%;
float: left ;
}
</style>