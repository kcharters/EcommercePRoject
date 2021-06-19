<template>
  <div class="panel-body">
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
      <router-view :key="$route.fullPath"></router-view>
            
      
    </div> 
    
<AddToCartModal></AddToCartModal>
  </div>
</template>

<script>
import { productsRef } from "../firebase-config.js";
import firebase from "../firebase-config.js"
import pins from "../components/Pins.vue"
import stickers from "../components/Stickers.vue"
import mugs from "../components/Mugs.vue"
import tote from "../components/Totes.vue"
import tshirts from "../components/Tshirts.vue"
import hoodies from "../components/Hoodies.vue"

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
          name: "Hoodies",
          component: hoodies
        },
        {
          name: "tshirts",
          component: tshirts
        },
    
      ]
export default {
  name: "Products",
  data: function () {
    return {
      products: [],
    tabs: tabs,
          currentTab: tabs[0]
    };
  },
  firebase: {
    products: productsRef,
  },

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
