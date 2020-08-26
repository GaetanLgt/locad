<template>
    <div>
        <div class="container">
          <div class="row">
            <div class="w-100 text-center">
              <StuffName class="h1" :produit="getIdProduit(affaire['@id'])"/>
            <StuffImg :produit="getIdProduit(affaire['@id'])"/>
            </div>
          <div class="col-7 offset-1">
            <StuffDescrip :produit="getIdProduit(affaire['@id'])"/>  
          </div>
          <div class="col-3">
            
                <StuffUser :produit="getIdProduit(affaire['@id'])"/>
                <StuffCat :produit="getIdProduit(affaire['@id'])"/>
                <StuffNbPts :produit="getIdProduit(affaire['@id'])"/>
            
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import StuffName from './../components/StuffName'
import StuffImg from './../components/StuffImg'
import StuffDescrip from './../components/StuffDescrip'
import StuffUser from './../components/StuffUser'
import StuffNbPts from './../components/StuffNbPts'
import StuffCat from './../components/StuffCat'

export default {
  name: 'Show',
  components: {
    StuffDescrip,
    StuffImg,
    StuffName,
    StuffUser,
    StuffNbPts,
    StuffCat
    },
      data() {
    return {
        affaire : [],
        categories : [],
        users: [],
      }
      },
  mounted() {
    
      axios
      .get('http://127.0.0.1:8000/api/affaires/'+this.$route.params.id)
      .then(response => (this.affaire = response.data))
      axios
      .get('http://127.0.0.1:8000/api/categories')
      .then(response => (this.categories = response.data['hydra:member']))
      axios
      .get('http://127.0.0.1:8000/api/users')
      .then(response => (this.users = response.data['hydra:member']))
  },
  watch: {
    
  },
  methods : {
    getImg(img) {
      return ("http://localhost:8000/images/affaires/"+img)
    },
    getIdProduit(Produit) {
    let id = Produit.replace("/api/affaires/", "")
    return (id)
    
  }
  
}
}
</script>

<style scoped>

</style>