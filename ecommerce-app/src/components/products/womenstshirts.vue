<template>
  <div class="row">
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
                    <tr v-for="tshirts in womenstshirtsData" :key="tshirts.key">
                        <td>{{ tshirts.name }}</td>
                        <td>{{ tshirts.description }}</td>
                        <td>{{ tshirts.price }}</td>
                        <td>
                            <router-link style="text-decoration: none; color: white;" :to="{name: 'editwomenstshirt', params: { id: tshirts.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deletetshirts(tshirts.key)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
            
</template>
<script>
import {fsdb} from '@/firebase-config.js'
export default {
    data(){
    return{
      womenstshirtsData:[],
      
    }
  },
  beforeMount(){
    
 },
  created(){
   fsdb.collection('womenstshirts').onSnapshot((snapshotChange) => {
                this.womenstshirtsData = [];
                snapshotChange.forEach((doc) => {
                    this.womenstshirtsData.push({
                        key: doc.id,
                        name: doc.data().name,
                        description: doc.data().description,
                        price: doc.data().price
                    })
                });
            })
    },
    
  
  methods:{
      log(msg) {
      console.log(msg);
    },
      deletetshirt(id){
              if (window.confirm("Do you really want to delete?")) {
                fsdb.collection("womenstshirt").doc(id).delete().then(() => {
                    console.log("Document deleted!");
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            }
  }
}
</script>
<style scoped>
a{
    text-decoration: none !important;
}
</style>
