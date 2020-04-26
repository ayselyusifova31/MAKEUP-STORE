<template>
<div class="brands">
  <div v-if="BrandNames.length>0" class="mybrand">
  <div class="mybrand" v-for="brand in BrandNames" :key="brand.id">
    <router-link :to="`/brands/${brand.brand}`">
      <div class="brand" >
        <b-card
          :title="`${brand.brand}`"
          style=" background-color: rgba(255, 255, 255); border-radius:2rem;"       
          
        >   
        </b-card>
        <b-button >More</b-button>
      </div>
    </router-link>
    </div>
    </div>
    
  <div v-else>
    <h4>Brand's list loading...<b-spinner label="Spinning"></b-spinner>
    </h4>
    </div>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
export default {
  data(){
    return{
     
    }
  },
  computed: {
    
    ...mapGetters(["BrandNames"]),
    
    
  },
  created(){
    this.BrandNames;
  }
};
</script>
<style scoped>
.brands {
  width: 100%;
 min-height: 90vh;
  height:100%;
  background-image: url("../assets/bg1.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction:column;
  flex-wrap: wrap;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 1;
  text-transform: uppercase;
font-weight: 600;
}
.mybrand{
  display:flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap:wrap;
  

}
.brand {
 width:15vw;
 height:18vh;
  margin:1rem;
  text-transform: capitalize;
font-weight: 300;
display:flex;
flex-direction:column;
flex-wrap:nowrap;
border:2px solid black;
 background: rgba(255, 255, 255); 
position:relative;
color:#17a2b8;
border-radius:2rem;
cursor: grab;
}
button{
  background: rgba(255, 255, 255, 0.7); 
  border:2px solid black;
  border-radius:1rem;
  width:7rem;
  height:2rem;  
  margin:auto; 
  color:black;
  position:absolute;
  top:98%;
  left:50%;
  transform:translate(-50%,-98%);
  
}
</style>