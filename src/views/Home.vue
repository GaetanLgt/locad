<template>
  <div class="container-fluid justify-content-center">
      <div class="container justify-content-center text-center">
      
      
        <div 
        v-for="(affaire , index) in affaires"
        :key="index"
        class="row d-flex align-items-center py-3">
          <h2 class="w-100">{{ affaire.name }}</h2>
          <div class="col-3">
            <img class="img-fluid" :src="getImg(affaire.imageName)">
          </div>
          <div class="col-6">
             <router-link :to="{ name: 'Categories', params: {id: getIdCat(affaire.categorie)}}" >
             <Cat :produit="getIdCat(affaire.categorie)" />
             </router-link>
          <div v-html="affaire.description"></div>

          </div>
            <div class="col-3" >
                <User :produit="getIdUser(affaire.proprietaire)" />
            <p> {{ affaire.nbPts }}</p>
            <router-link :to="{ name: 'Show', params: {id: affaire.id}}" >
              <button class="btn btn-secondary mr-3" >Voir plus</button>
            </router-link>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import Cat from '../components/Cat'
import User from '../components/User'

export default {
  name: 'Home',
  components: {
      Cat,
      User
    },
      data() {
    return {
        affaires : [],
        categories : [],
        users: [],
      }
      },
  mounted() {
    
      axios
      .get('http://127.0.0.1:8000/api/affaires')
      .then(response => (this.affaires = response.data['hydra:member']))
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
