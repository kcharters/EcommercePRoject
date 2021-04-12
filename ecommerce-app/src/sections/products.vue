<template>
  <div class="products" id="products">
      <div class="container">
          <h1 class="text-center p-5">Our Products</h1>
          <div class="row">
              
              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="https://canary.contestimg.wish.com/api/webimage/5df9d9faf8f36905396b540b-4-large.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Fresh Avocado</h5>
                            <p class="card-text">
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis convallis urna, a molestie justo. Quisque cursus libero et condimentum vulputate
                            </p>
                            <a href="#" class="btn btn-secondary btn-info mr-4">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="https://ae01.alicdn.com/kf/H97fb56892e8441ca9a2c86da63594670H/Women-s-Canvas-Bag-Cartoon-Coffee-Printing-Shopping-Bags-Female-Large-Capacity-Shoulder-Tote-Bag-Eco.jpg_640x640.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Best Orange</h5>
                            <p class="card-text">
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis convallis urna, a molestie justo. Quisque cursus libero et condimentum vulputate
                            </p>
                            <a href="#" class="btn btn-secondary btn-info mr-4">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="https://ae01.alicdn.com/kf/H4734806cb36945ea8efbaef5b2cc9abcd/Fox-Coffee-Enamel-Pin-Custom-Lover-Drink-Newspaper-Brooches-Bag-Lapel-Pin-Cartoon-Animal-Badge-Jewelry.jpg_Q90.jpg_.webp" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Pine  Apple</h5>
                            <p class="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis convallis urna, a molestie justo. Quisque cursus libero et condimentum vulputate

                            </p>
                            <a href="#" class="btn btn-secondary btn-info mr-4">Add to Cart</a>
                        </div>
                    </div>
              </div>
          </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
        background-color: #FFD4C2 ;
             font-family: 'Indie Flower';
    }

    h1{
              font-family: 'Indie Flower';
    }


</style>
