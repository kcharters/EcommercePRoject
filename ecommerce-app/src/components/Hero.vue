<template>
     <div class="hero">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                 Welcome to Our Store
                </h1>
                <h6>shop for all your coffee themed apparel</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam tempora, iure delectus totam minus quam aperiam ratione dolores magni voluptates ut necessitatibus odio ipsum fuga, voluptas ab praesentium nihil?
                </p>
                <div class="hero-btn mt-5">
                    <button class="btn btn-secondary btn-info mr-4" @click="$router.push('ourCompany')">Explore</button>
                    <button class="btn btn-secondary btn-info mr-4 " @click="$router.push('shop')">Products</button>
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div class="graphic">
                    <img class="responsive" src="../assets/Hero.png" alt="">
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');
 .hero{
 
    height: 700px;

  }
 
  .hero-title{
    font-family: 'Roboto', sans-serif;
    color:white;
  }
  p{
     font-family: 'Roboto', sans-serif;
    color:white;
  }
  h6{
          font-family: 'Roboto', sans-serif;
    color:white;
  }
  .graphic{
     width: 100%;

  height: auto;
  margin: auto;
  }
     
@media (max-width: 1200px) {
.graphic{
     width: 100%;
         margin:auto;


  }
  img.responsive{
     width: 100%;
       height: auto;
       align-items: center;
        margin:auto;
  

  }
}
</style>

