<template>
  <div>
   <h2>Products</h2>
                <div class="col-md-12">
                  
                  <br/>
             <div id="dynamic-component-demo" class="demo">
      <button
        v-for="tab in tabs"
        v-bind:key="tab.name"
        v-bind:class="['tab-button', { active: currentTab.name === tab.name }]"
        v-on:click="currentTab = tab" 
        class="btn btn-info"
      >
        {{ tab.name }}
      </button>
<component v-bind:is="currentTab.component" class="tab"></component>
</div> 
</div>
  </div>
</template>
<script>
import pins from "../products/pins.vue"
import stickers from "../products/stickers.vue"
import mugs from "../products/mugs.vue"
import tote from "../products/tote.vue"
import menstshirts from "../products/menstshirts.vue"
import menshoodies from "../products/menshoodies.vue"
import womenstshirts from "../products/womenstshirts.vue"
import womenshoodies from "../products/womenshoodies.vue"
var  tabs = [
        {
          name: "Pins",
          component: pins
        },
        {
          name: "Mugs",
          component: mugs
        },
        {
          name: "Tote",
          component: tote
        },
        {
          name: "Stickers",
          component: stickers
        },
        {
          name: "Mens Hoodies",
          component: menshoodies
        },
        {
          name: "Mens tshirts",
          component: menstshirts
        },
         {
          name: "Womens Hoodies",
          component: womenshoodies
        },
        {
          name: "Womens tshirts",
          component: womenstshirts

        }
      ]


export default {
  data(){
    return{
      tabs: tabs,
          currentTab: tabs[0]
    }
  },
   mounted() {
  
  },
  created(){
     
    },
    
  
  methods:{

  }
   
}
</script>
<style scoped>
section{
  float: left;
}

</style>
