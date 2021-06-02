<template>

   <ais-instant-search
     index-name="ecommerce_app"
  :search-client="searchClient"
  >
<ais-search-box>
  <div slot-scope="{ currentRefinement, isSearchStalled, refine }">
    <input
      type="search"
      :value="currentRefinement"
      @input="refine($event.currentTarget.value)"
    >
    <span :hidden="!isSearchStalled">Loading...</span>
  </div>
</ais-search-box>

<div class="ais-Hits">
  <ais-infinite-hits >
      <ul slot-scope="{
    items,
    refinePrevious,
    refineNext,
    isLastPage,
    
  }">
    <li>
      <button @click="refinePrevious">
        Show previous results
      </button>
    </li>
    <li v-for="item in items" :key="item.objectID" class="ais-Hits-item">
     
    {{item.name}}  + {{item.description}} 
    <img :src="item.url"/>  
    </li>
    <li v-if="!isLastPage">
      <button @click="refineNext">
        Show more results
      </button>
    </li>
  </ul>
  </ais-infinite-hits> 
</div>   
   </ais-instant-search>
 
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
}
input{
    font-family: Arial, Helvetica, sans-serif !important;
}
</style>