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
                    <tr v-for="hoodie in menshoodiesData" :key="hoodie.key">
                        <td>{{ hoodie.name }}</td>
                        <td>{{ hoodie.description }}</td>
                        <td>{{ hoodie.price }}</td>
                        <td>
                            <router-link :to="{name: 'editmenshoodie', params: { id: hoodie.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deletehoodie(hoodie.key)" class="btn btn-danger">Delete</button>
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
      menshoodiesData:[],
      
    }
  },
  beforeMount(){
    
 },
  created(){
   fsdb.collection('menshoodies').onSnapshot((snapshotChange) => {
                this.menshoodiesData = [];
                snapshotChange.forEach((doc) => {
                    this.menshoodiesData.push({
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
      deletehoodie(id){
              if (window.confirm("Do you really want to delete?")) {
                fsdb.collection("menshoodies").doc(id).delete().then(() => {
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
