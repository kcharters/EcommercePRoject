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
                    <tr v-for="tote in totesData" :key="tote.key">
                        <td>{{ tote.name }}</td>
                        <td>{{ tote.description }}</td>
                        <td>{{ tote.price }}</td>
                        <td>
                            <router-link style="text-decoration: none; color: white;" :to="{name: 'edittote', params: { id: tote.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deletetote(tote.key)" class="btn btn-danger">Delete</button>
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
      totesData:[],
      
    }
  },
  beforeMount(){
    
 },
  created(){
   fsdb.collection('totebag').onSnapshot((snapshotChange) => {
                this.totesData = [];
                snapshotChange.forEach((doc) => {
                    this.totesData.push({
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
      deletetote(id){
              if (window.confirm("Do you really want to delete?")) {
                fsdb.collection("totebag").doc(id).delete().then(() => {
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
