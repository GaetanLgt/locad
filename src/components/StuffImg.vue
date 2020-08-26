<template>
    <div class="stuffImg">
         
          <img class="img-fluid" :src="getImg(stuff.imageName)">
          
    </div>
    
</template>

<script>
import axios from 'axios'



export default {
  name: 'Stuff',
  components: {
    
        
    },
    props:{
          produit: Number,
      },
      data() {
    return {
       
        stuff : "",
        
      }
      },
  created() {
    
        axios
            .get('http://127.0.0.1:8000/api/affaires/'+this.produit)
            .then(response => (this.stuff = response.data))
  },
  methods : {
    getImg(img) {
      return ("http://localhost:8000/images/affaires/"+img)
    },
   
  }
}
</script>

<style scoped>

</style>