<template>
    <div>
         <h2 class="w-100 text-center"><User class="h1" :produit="getIdUser(user['@id'])" /></h2>
          
            
             <div v-for="i in affaires" :key="i">    
               
              <div class="container">

                <div class="row d-flex align-items-center" v-if="i%2==1">
                    <div class="w-100 text-center">
                      <StuffName class="h2" :produit="getIdProduit(biens[i-1])"/>
                    </div>
                  <div class="col-2">
                      <StuffImg :produit="getIdProduit(biens[i-1])"/>
                  </div>
                  <div class="col-7">
                      <StuffDescrip :produit="getIdProduit(biens[i-1])"/>  
                  </div>
                  <div class="col-3 text-center">
                    <StuffCat :produit="getIdProduit(biens[i-1])"/> 
                    <p> Nb de points : 
                    <StuffNbPts :produit="getIdProduit(biens[i-1])"/>
                    </p>
            
                  </div>
                </div>
                <div class="row d-flex align-items-center" v-else>
                    <div class="w-100 text-center">
                      <StuffName class="h2" :produit="getIdProduit(biens[i-1])"/>
                    </div>
                  <div class="col-3 text-center">
                    <StuffCat :produit="getIdProduit(biens[i-1])"/> 
           
                    <p> Nb de points : 
                    <StuffNbPts :produit="getIdProduit(biens[i-1])"/>
                    </p>
              </div>
                  <div class="col-7 text-right">
                      <StuffDescrip :produit="getIdProduit(biens[i-1])"/>  
                  </div>
                  <div class="col-2 text-center">
                      <StuffImg :produit="getIdProduit(biens[i-1])"/>
                  </div>
            </div>
         </div>   
       </div>       
    </div>
    
</template>

<script>
import axios from 'axios'
import User from '../components/User'
import StuffName from './../components/StuffName'
import StuffImg from './../components/StuffImg'
import StuffDescrip from './../components/StuffDescrip'
import StuffNbPts from './../components/StuffNbPts'
import StuffCat from './../components/StuffCat'


export default {
  name: 'Utilisateur',
  components: {
    StuffDescrip,
    StuffImg,
    StuffName,
    StuffNbPts,
    StuffCat,
    User,
    },
    
      data() {
    return {
        affaires : '',
        biens : [],
        user: [],
        cat: [],
      }
      },
  mounted() {
    
        axios
            .get('http://127.0.0.1:8000/api/users/'+this.$route.params.id)
            .then(response => (this.user = response.data))
            .then(user => (this.affaires = user.affaires.length,this.biens = user.affaires))
            
            
          
        
      
  },
     
  methods : {
    getImg(img) {
      return ("http://localhost:8000/images/affaires/"+img)
    },
    getIdProduit(Produit) {
    let id = Produit.replace("/api/affaires/", "")
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