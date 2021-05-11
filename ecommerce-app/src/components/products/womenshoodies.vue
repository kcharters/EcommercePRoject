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
                    <tr v-for="hoodies in womenshoodiesData" :key="hoodies.key">
                        <td>{{ hoodies.name }}</td>
                        <td>{{ hoodies.description }}</td>
                        <td>{{ hoodies.price }}</td>
                        <td>
                            <router-link :to="{name: 'editwomenshoodie', params: { id: hoodies.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deletehoodies(hoodies.key)" class="btn btn-danger">Delete</button>
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
      womenshoodiesData:[],
      
    }
  },
  beforeMount(){
    
 },
  created(){
   fsdb.collection('womenshoodies').onSnapshot((snapshotChange) => {
                this.womenshoodiesData = [];
                snapshotChange.forEach((doc) => {
                    this.womenshoodiesData.push({
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
      deletehoodies(id){
              if (window.confirm("Do you really want to delete?")) {
                fsdb.collection("womenshoodies").doc(id).delete().then(() => {
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
*{
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif !important;
}
</style>
