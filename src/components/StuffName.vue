<template>
    <div class="stuffName">
      <router-link :to="{ name: 'Show', params: {id: stuff.id}}" >
         <div class="nomArticle">{{ stuff.name }}</div>
      </router-link>
    </div>
    
</template>

<script>
import axios from 'axios'



export default {
  name: 'StuffName',
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