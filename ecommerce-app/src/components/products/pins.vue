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
                    <tr v-for="pin in pinsData" :key="pin.key">
                        <td>{{ pin.name }}</td>
                        <td>{{ pin.description }}</td>
                        <td>{{ pin.price }}</td>
                        <td>
                            <router-link :to="{name: 'editpins', params: { id: pin.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deletepin(pin.key)" class="btn btn-danger">Delete</button>
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
      pinsData:[],
      
    }
  },
  beforeMount(){
    
 },
  created(){
   fsdb.collection('pins').onSnapshot((snapshotChange) => {
                this.pinsData = [];
                snapshotChange.forEach((doc) => {
                    this.pinsData.push({
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
    
  }
}
</script>
<style scoped>
*{
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif !important;
}
</style>
