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
                            <router-link :to="{name: 'editmugs', params: { id: mug.key }}" class="btn btn-primary">Edit
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
    
  }
}
</script>
<style scoped>
*{
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif !important;
}
</style>
