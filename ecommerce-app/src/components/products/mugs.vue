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
                    <tr v-for="mug in mugsData" :key="mug.key">
                        <td>{{ mug.name }}</td>
                        <td>{{ mug.description }}</td>
                        <td>{{ mug.price }}</td>
                        <td>
                            <router-link style="text-decoration: none; color: white;" :to="{name: 'editmugs', params: { id: mug.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deletemug(mug.key)" class="btn btn-danger">Delete</button>
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
      mugsData:[],
      
    }
  },
  beforeMount(){
    
 },
  created(){
   fsdb.collection('mugs').onSnapshot((snapshotChange) => {
                this.mugsData = [];
                snapshotChange.forEach((doc) => {
                    this.mugsData.push({
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
      deletemug(id){
              if (window.confirm("Do you really want to delete?")) {
                fsdb.collection("mugs").doc(id).delete().then(() => {
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
