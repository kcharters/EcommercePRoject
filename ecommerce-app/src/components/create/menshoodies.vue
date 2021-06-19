<template>
  <div>
      <h2>
        Add item 
      </h2>
        <form @submit="onSubmit" id="abc">
           <div class="form-group">
          <label>Name</label>
            <input id="title" class="form-control col-md-6" v-model.trim="item.name"/>
           </div>
          <div class="form-group" 
                    >
                    <label>Description</label>
              <textarea class="form-control col-md-6" id="description"
                         v-model="item.description"
                         placeholder="Enter something"
                         :rows="2"
                         :max-rows="6"></textarea>
          </div>
          <div class="form-group" >
                    <label>Price</label>
            <input id="author" class="form-control col-md-6" v-model.trim="item.price"/>
          </div>
          <button type="submit" class="btn btn-primary" variant="primary">Add</button>
          
        </form>
      </div>
     
</template>
<script>
import firebase from "firebase/app"
import {fsdb} from '@/firebase-config.js'
export default {
   name: 'Edititem',
  data () {
    return {
      key: this.$route.params.uid,
      item: {}
    }
  },
  created () {
  
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      fsdb.collection('menshoodies').add(this.item).then(() => {
                    alert("item successfully created!");
                    this.item.name = ''
                    this.item.description = ''
                    this.item.price = ''
                }).catch((error) => {
                    console.log(error);
                });
    }
  }  
}
</script>

<style scoped>
section{
  float: left;
}
.form-control{
   margin: 0 auto;
    float: none;
}
table,td,tr{
font-family: 'Roboto' !important;
}
</style>