<template>
 <!-- page-content  -->
      <main class="page-content pt-2">
    
        <div class="container-fluid p-5">
          <div class="row">
            <div class="form-group col-md-12">
              <h2>Producst</h2>
         
                <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.key">
                        <td>{{ product.name }}</td>
                        <td>{{ product.email }}</td>
                        <td>{{ product.phone }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: product.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deleteproduct(product.key)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
          
            </div>

   </div>
        </div>
      </main>
      <!-- page-content" -->
</template>
<script>

import {fsdb} from '@/firebase-config.js'

export default {
  data(){
    return{
      products:[]
    }
  },
   mounted() {
   
  },
  created(){
fsdb.collection('products').onSnapshot((snapshotChange) => {
  this.products = [];
  snapshotChange.forEach(doc => {
    this.products.push({
      key:doc.id,
      name: doc.data().name,
      description: doc.data().description,
      price: doc.data().price
    })
  });
})
  },
  methods:{

  }
   
}
</script>

<style lang="sass" scoped>

</style>
