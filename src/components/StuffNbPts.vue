<template>
    <div class="stuffnbPts">
  
         <div>{{ stuff.nbPts }}</div>
         
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
 
}
</script>

<style scoped>

</style>