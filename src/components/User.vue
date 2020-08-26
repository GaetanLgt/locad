<template>
    <div class="user">
        <router-link :to="{ name: 'Utilisateur', params: {id: user.id}}" >
         {{ user.firstname }} {{ user.lastname }}      
        </router-link>
    </div>
    
</template>

<script>
import axios from 'axios'


export default {
  name: 'User',
  components: {
        
    },
    props:{
          produit: Number,
      },
      data() {
    return {
       
        user : [],
        
      }
      },
  created() {
    
        axios
            .get('http://127.0.0.1:8000/api/users/'+this.produit)
            .then(response => (this.user = response.data))
  },
 
  
}
</script>

<style scoped>

</style>