<template>
    <div class="categorie">
         {{ categorie }}          
    </div>
    
</template>

<script>
import axios from 'axios'


export default {
  name: 'Cat',
  components: {
        
    },
    props:{
          produit: Number,
      },
      data() {
    return {
       
        categorie : "",
        
      }
      },
  created() {
    
        axios
            .get('http://127.0.0.1:8000/api/categories/'+this.produit)
            .then(response => (this.categorie = response.data.name))
  },
  
}
</script>

<style scoped>

</style>