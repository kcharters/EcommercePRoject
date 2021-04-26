<template>
  <div class="panel-body">
    <h3>Products</h3>

    <h3>Pins</h3>
    <table class="table">
      <tbody>
        <!-- this v for loop is taking the computer mapped object and slicking it by the first array to get all the pins-->
        <div v-for="(testObject, index) in mappedTest.slice(0, 1)" :key="index">
          <thead>
            <th scope="col">name</th>
            <th scope="col">description</th>
            <th scope="col">price</th>
          </thead>
<!-- this nested v for loop is looping over all the pins to display them -->
          <div v-for="(pins, idx) in testObject.pins" :key="idx">
            <tr scope="row">
              <td>{{ pins.name }}</td>

              <td>{{ pins.description }}</td>

              <td>${{ pins.price }}</td>
              <td><img :src="pins.url" /></td>
            </tr>
          </div>
        </div>
      </tbody>
    </table>

    <h3>Stickers</h3>
    <table class="table">
      <tbody>
        <!-- this v for loop is taking the computer mapped object and slicking it by the first array to get all the stickers-->
        <div v-for="(testObject, index) in mappedTest.slice(0, 1)" :key="index">
          <thead>
            <th scope="col">name</th>
            <th scope="col">description</th>
            <th scope="col">price</th>
          </thead>
<!-- this nested v for loop is looping over all the stickers to display them, repeated for each array and nested array -->
          <div v-for="(stickers, idx) in testObject.stickers" :key="idx">
            <tr scope="row">
              <td>{{ stickers.name }}</td>

              <td>{{ stickers.description }}</td>

              <td>${{ stickers.price }}</td>
              <td><img :src="stickers.url" /></td>
            </tr>
          </div>
        </div>
      </tbody>
    </table>

    <h3>Tote</h3>
    <table class="table">
      <tbody>
        <div v-for="(testObject, index) in mappedTest.slice(0, 1)" :key="index">
          <thead>
            <th scope="col">name</th>
            <th scope="col">description</th>
            <th scope="col">price</th>
          </thead>

          <div v-for="(totebag, idx) in testObject.totebag" :key="idx">
            <tr scope="row">
              <td>{{ totebag.name }}</td>

              <td>{{ totebag.description }}</td>

              <td>${{ totebag.price }}</td>
              <td><img :src="totebag.url" /></td>
            </tr>
          </div>
        </div>
      </tbody>
    </table>
    <h3>Mugs</h3>
    <table class="table">
      <tbody>
        <thead>
          <th scope="col">name</th>
          <th scope="col">description</th>
          <th scope="col">price</th>
        </thead>
        <div v-for="(testObject, index) in mappedTest.slice(0, 3)" :key="index">
          <div v-for="(mugs, idx) in testObject.mugs" :key="idx">
            <tr scope="row">
              <td>{{ mugs.name }}</td>
              <td>{{ mugs.description }}</td>
              <td>{{ mugs.price }}</td>
              <td><img :src="mugs.url" /></td>
            </tr>
          </div>
        </div>
      </tbody>
    </table>

    <h3>Hoddies</h3>
    <table class="table">
      <tbody>
        <thead>
          <th scope="col">name</th>
          <th scope="col">description</th>
          <th scope="col">price</th>
        </thead>
        <div v-for="(testObject, index) in mappedTest.slice(0, 4)" :key="index">
          <div v-for="(hoodies, idx) in testObject.hoodies" :key="idx">
            <tr scope="row">
              <td>{{ hoodies.name }}</td>
              <td>{{ hoodies.description }}</td>
              <td>{{ hoodies.price }}</td>
              <td><img :src="hoodies.url" /></td>
            </tr>
          </div>
        </div>
      </tbody>
    </table>

    <h3>Tshirts</h3>

    <table class="table">
      <tbody>
        <thead>
          <th scope="col">name</th>
          <th scope="col">description</th>
          <th scope="col">price</th>
        </thead>
        <div v-for="(testObject, index) in mappedTest.slice(0, 4)" :key="index">
          <div v-for="(tshirts, idx) in testObject.tshirts" :key="idx">
            <tr scope="row">
              <td>{{ tshirts.name }}</td>
              <td>{{ tshirts.description }}</td>
              <td>{{ tshirts.price }}</td>
              <td><img :src="tshirts.url" /></td>
            </tr>
          </div>
        </div>
      </tbody>
    </table>
  </div>
</template>

<script>
import { productsRef } from "../firebase-config.js";

export default {
  name: "Products",
  data: function () {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
img {
  width: 100px !important;
  height: 100px !important;
}
</style>
