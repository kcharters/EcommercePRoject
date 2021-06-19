<template>
  <div>
   <h2>create</h2>
                <div class="col-md-12">
             <div id="dynamic-component-demo" class="demo">
      <button
        v-for="tab in tabs"
        v-bind:key="tab.name"
        v-bind:class="['tab-button', { active: currentTab.name === tab.name }]"
        v-on:click="currentTab = tab" 
        class="btn btn-info mr-4"
      >
        {{ tab.name }}
      </button>

      <component v-bind:is="currentTab.component" class="tab"></component>
      <router-view :key="$route.fullPath"></router-view>
            
      
    </div> 
         
        </div>
  </div>
</template>
<script>
import pins from "../create/pins.vue"
import stickers from "../create/stickers.vue"
import mugs from "../create/mugs.vue"
import tote from "../create/tote.vue"
import menstshirts from "../create/menstshirts.vue"
import menshoodies from "../create/menshoodies.vue"
import womenstshirts from "../create/womenstshirts.vue"
import womenshoodies from "../create/womenshoodies.vue"
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
