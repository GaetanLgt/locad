<template>
    <div class="stuffCat">
          
          <router-link :to="{ name: 'Categories', params: {id: getIdCat(stuff.categorie)}}" >
             <Cat :produit="getIdCat(stuff.categorie)" />
          </router-link>
         
    </div>
    
</template>

<script>
import axios from 'axios'
import Cat from '../components/Cat'


export default {
  name: 'StuffCat',
  components: {
    Cat    
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
    
    getIdCat(ProduitCat) {
      let id = ProduitCat.replace("/api/categories/", "")
      return (id)
    },
   
  }
}
</script>

<style scoped>

</style>