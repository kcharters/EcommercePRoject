<template>
 <div>
      <h2>
        Edit item
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
          <button type="submit" class="btn btn-primary mr-4" variant="primary">Update</button>
          <button class="btn btn-danger mr-4" @click="remove">Cancel</button>
        </form>
      </div>
     
</template>
<script>
import firebase from "firebase/app"

export default {
   name: 'Edititem',
  data () {
    return {
      key: this.$route.params.id,
      item: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('menshoodies').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.item = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const updateRef = firebase.firestore().collection('menshoodies').doc(this.$route.params.id);
      updateRef.set(this.item).then((docRef) => {
        this.key = ''
        this.item.name = ''
        this.item.description = ''
        this.item.price = ''
       alert("Item Updated!")
        this.$router.push({name: "productslist"})
      })
    },
    remove(){
       this.$router.replace({ name: "productslist" });
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


</style>