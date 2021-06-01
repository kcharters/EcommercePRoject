  /* eslint-disable */
  <template>

  <div class="AddToCartModal">

          <div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> My Cart </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

          <ul>
              <li v-for="(item, idx) in this.$store.state.cart" :key="idx" class="media" > 

                   <img :src="item.product_image" width="100px" class="align-self-center mr-3" alt="" >
                   <div class="media-body">
                       <h5 class="mt-0">{{item.productName}}</h5>
                       <h5 class="mt-0"> $ {{item.productPrice}} </h5>
                        <h5 class="mt-0"> Quantity: {{item.productQuantity}} </h5>
                   </div>                
                 
              </li>
          </ul>
    
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal"> Continue Shopping </button>
        <button type="button" class="btn btn-primary"> Checkout </button>
      </div>
    </div>
  </div>
</div>

   
  </div>
</template>
<script>

</script>

<style scoped>
img {
    margin: 5px;
}
li{
     border-radius: 25px;
    border: 1px solid lightgrey;
}
.media{
    margin: 15px;
    margin-left: 10px;

}
.media-body{
 
    margin: 20px;
}
</style>


  /* eslint-disable */