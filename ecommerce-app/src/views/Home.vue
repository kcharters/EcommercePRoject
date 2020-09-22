<template>
  <div class="home">
    <NavBar></NavBar>
        <Hero></Hero>
        <products></products>
          <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-md-6">
            <img  src="../assets/aboutUs.png" alt="" width="450">
          </div>
          <div class="col-md-6">
            <h3>Learn More About us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!
            </p>
             <button class="btn custom-btn btn-outline-primary mr-4">Browse Products</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Home",
    components:{

    }
};
</script>


