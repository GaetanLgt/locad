<template>
    <div class="stuffUser">
         <router-link :to="{ name: 'Categories', params: {id: getIdCat(stuff.proprietaire)}}" >
         <User :produit="getIdUser(stuff.proprietaire)"/>
         </router-link>
          
    </div>
    
</template>

<script>
import axios from 'axios'
import User from '../components/User'



export default {
  name: 'StuffUser',
  components: {
    User,
        
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
    getIdCat(ProduitCat) {
      let id = ProduitCat.replace("/api/categories/", "")
      return (id)
    },
    getIdUser(ProduitUser) {
      let id = ProduitUser.replace("/api/users/", "")
      return (id)
    },
  }
}
</script>

<style scoped>

</style>