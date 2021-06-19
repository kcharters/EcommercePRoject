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
                    <tr v-for="tshirt in menstshirtData" :key="tshirt.key">
                        <td>{{ tshirt.name }}</td>
                        <td>{{ tshirt.description }}</td>
                        <td>{{ tshirt.price }}</td>
                        <td>
                            <router-link  style="text-decoration: none; color: white;" :to="{name: 'editmenstshirt', params: { id: tshirt.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deletetshirt(tshirt.key)" class="btn btn-danger">Delete</button>
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
      menstshirtData:[],
      
    }
  },
  beforeMount(){
    
 },
  created(){
   fsdb.collection('menstshirts').onSnapshot((snapshotChange) => {
                this.menstshirtData = [];
                snapshotChange.forEach((doc) => {
                    this.menstshirtData.push({
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
                fsdb.collection("menstshirt").doc(id).delete().then(() => {
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
