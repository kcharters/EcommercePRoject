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
                    <tr v-for="sticker in stickersData" :key="sticker.key">
                        <td>{{ sticker.name }}</td>
                        <td>{{ sticker.description }}</td>
                        <td>{{ sticker.price }}</td>
                        <td>
                            <router-link :to="{name: 'editstickers', params: { id: sticker.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deletesticker(sticker.key)" class="btn btn-danger">Delete</button>
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
      stickersData:[],
      
    }
  },
  beforeMount(){
    
 },
  created(){
   fsdb.collection('stickers').onSnapshot((snapshotChange) => {
                this.stickersData = [];
                snapshotChange.forEach((doc) => {
                    this.stickersData.push({
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
      deletesticker(id){
              if (window.confirm("Do you really want to delete?")) {
                fsdb.collection("stickers").doc(id).delete().then(() => {
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
