<template>
    <div class="categorie">
         <h1 class="w-100 text-center">{{ categorie.name }}</h1>
          
            
             <section v-for="i in affaires" :key="i">
               
                <div class="content">

                      <div class="h2" :style='{ backgroundImage: `url( "${getImg( categorie.affaires[i-1])} ")` }'>
                          <StuffName class=" text-center" :produit="getIdProduit(categorie.affaires[i-1])"/>
                      </div>
                  
                    <StuffUser class="p text-center" :produit="getIdProduit(categorie.affaires[i-1])"/> 
           
                    <StuffNbPts class="p text-center" :produit="getIdProduit(categorie.affaires[i-1])"/>
            
                    <StuffDescrip class="p" :produit="getIdProduit(categorie.affaires[i-1])"/>  
                  
              </div>
              </section >
            
              
    </div>
    
</template>

<script>
import axios from 'axios'
import StuffDescrip from './../components/StuffDescrip'
import StuffNbPts from './../components/StuffNbPts'
import StuffUser from './../components/StuffUser'
import StuffName from './../components/StuffName'

export default {
  name: 'Categorie',
  components: {
    StuffDescrip,
    StuffNbPts,
    StuffUser,
    StuffName,
    },
    
      data() {
    return {
        affaires : '',
        stuffs : [],
        categorie : [],
        users: [],
        cat: [],
      }
      },
  mounted() {
    
        axios
            .get('http://127.0.0.1:8000/api/categories/'+this.$route.params.id)
            .then(response => (this.categorie = response.data))
            .then(categorie => (this.affaires = categorie.affaires.length))
        axios
            .get('http://127.0.0.1:8000/api/affaires')
            .then(response => (this.stuffs = response.data['hydra:member']))    
  },
     
  methods : {
    getImg(img) {
      let id = img.replace("/api/affaires/", "")

      let imgName = ""
      for( var i=0 ; i< this.stuffs.length; i++ ){
        if(this.stuffs[i].id == id) {
          imgName = this.stuffs[i].imageName
         return ("http://localhost:8000/images/affaires/"+imgName)
      }
      }
    
      
    },
    
    getIdProduit(Produit) {
    let id = Produit.replace("/api/affaires/", "")
    return (id)
   
  }
  }
  
}
</script>

<style scoped>
.categorie {
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline: none;
  background: linear-gradient(45deg,#fbfb,#0ba);;

}
section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
}
section .content {
  text-align: center;
}
section .content .h2 {
  font-size: 5vw;
  text-transform: uppercase;
  font-weight: 900;
  line-height: 1em;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  background-position: center;
}
section .content .p
{
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

</style>