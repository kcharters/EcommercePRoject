<template>
    <div class="container">
<div class="bg-light">
  <div class="container py-5">
    <div class="row h-100 align-items-center py-5">
      <div class="col-lg-6">
        <h1 class="display-4">About us page</h1>
        <p class="lead text-muted mb-0">Welcome to Kirstin and beks, your number one source for all things Coffee Themed. <br/>
           </p>
       
      </div>
      <div class="col-lg-6 d-none d-lg-block"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png" alt="" class="img-fluid"></div>
    </div>
  </div>
</div>

<div class="bg-white py-5">
  <div class="container py-5">
    <div class="row align-items-center mb-5">
      <div class="col-lg-6 order-2 order-lg-1">
        <h2 class="font-weight-light"></h2>
        <p class="font-italic text-muted mb-4">Founded in 2021 by Kirstin and Beks, Kirstin and beks has come a long way from its beginnings
            in Dunedin. When they first started out, their passion for doffee drove them to create this coffeethemed ecommerce site for studio
             so that kirstin and beks can offer you cute coffee themed items. </p>
      </div>
      <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="@/assets/coffee-beans.png" alt="" class="img-fluid mb-4 mb-lg-0" width="100px" height="100px"></div>
    </div>
    <div class="row align-items-center">
      <div class="col-lg-5 px-5 mx-auto"><img src="@/assets/coffee-cup.png" alt="" class="img-fluid mb-4 mb-lg-0" width="100px" height="100px"></div>
      <div class="col-lg-6">
        <h2 class="font-weight-light"></h2>
        <p class="font-italic text-muted mb-4"> We now serve customers all over, and are thrilled that we're able to turn our passion into our own website.
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
      </div>
    </div>
  </div>
</div>

<div class="bg-light py-5">
  <div class="container py-5">
    <div class="row mb-4">
      <div class="col-lg-5">
        <h2 class="display-4 font-weight-light">Our team</h2>
        <p class="font-italic text-muted"></p>
      </div>
    </div>

    <div class="row text-center">
      <!-- Team item-->
      <div class="col-xl-3 col-sm-6 mb-5">
        
      </div>
      <!-- End-->

      <!-- Team item-->
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="@/assets/rebecca.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
          <h5 class="mb-0">Beks</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
        </div>
      </div>
      <!-- End-->

      <!-- Team item-->
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="@/assets/kirstin.jpg" alt="" width="100"  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
          <h5 class="mb-0">Kirstin</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
        </div>
      </div>
      <!-- End-->

      <!-- Team item-->
      <div class="col-xl-3 col-sm-6 mb-5">
        
      </div>
      <!-- End-->

    </div>
  </div>
</div>


<footer class="bg-light pb-5">
  <div class="container text-center">
    <p class="font-italic text-muted mb-0">&copy; Copyrights Company.com All rights reserved.</p>
  </div>
</footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.social-link {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  border-radius: 50%;
  transition: all 0.3s;
  font-size: 0.9rem;
}

.social-link:hover,
.social-link:focus {
  background: #ddd;
  text-decoration: none;
  color: #555;
}
</style>