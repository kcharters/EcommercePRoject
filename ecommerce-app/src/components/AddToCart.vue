<template>
  <div class="add-to-cart">
    <button class="btn btn-primary" @click="addToCart"> Add to Cart
    </button>
  </div>
</template>
<script>
import { integer } from 'vuelidate/lib/validators';
export default {
  name: "add-to-cart",
  props: {
    name: String,
    price: Number,
    productId: Number,
    productImage: String,
    

  },

  data() {
    return {
      item: {
        productName: this.name,
        productPrice: this.price,
        product_id: this.productId,
        product_image: this.productImage,
        productQuantity: 1,
      },
    };
  },
methods: {
addToCart(){

   $('#cartModal').modal('show')
    this.$store.commit('addToCart', this.item)
}

}

};
</script>

<style scoped></style>
