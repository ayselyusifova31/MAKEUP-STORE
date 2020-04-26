<template>
    <div class="brand">
      <h1>  {{$route.params.brand}} cosmetics </h1>
       <router-link :to="`/brands`"><button style="width:9rem;height:2rem;font-size:1.2rem;">Back <b-icon-arrow-left></b-icon-arrow-left></button></router-link>
        <div v-if="products_types.length>0" class="content">
            <div v-for="product in products_types" :key="product.id" >
               <div class="type">
                    <span>{{product.product_type}}s</span>
                    
                    <router-link :to="`/brands/${$route.params.brand}/${product.product_type}`"><button>More</button></router-link>
               </div>
                   
                  
            </div>
        </div>
        <div v-else>
           <h4> Loading brands...<b-spinner label="Spinning"></b-spinner></h4>
        </div>
    </div>
</template>

<script> 
import { mapGetters } from "vuex";
import _ from 'lodash'; 
export default {
    data(){
        return{
            products:[],
            products_types:[]
        }
    },
    computed:{
        ...mapGetters(["selectBrand"]),
        
    },
    created(){
        this.products=this.selectBrand(this.$route.params.brand)
        this.products_types=_.uniqBy(this.products, 'product_type');
    }
    
}
</script>
<style scoped>
.brand {
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
  flex-wrap: wrap;
  flex-direction: column;
text-transform: uppercase;
font-weight: 600;
}
.content{
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: center;
}
.type{
    width: 20vw;
  height: 10vh;
  background: rgba(255, 255, 255, 0.4); 
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  border: 3px solid black;;
  margin:1rem;
  border-radius: 1rem;
  cursor: grab;
}
button{
  background: rgba(255, 255, 255, 0.7); 
  border:2px solid black;
  border-radius:1rem;
  width:6rem;
  height:2rem;
  font-size:1rem;
  padding:0.1rem;
  color:black;

}
</style>