<template>
  <div class="products">
    <input type="text" v-model="search" placeholder="Search products"/>
    <div style="font-weight:700;font-size:1.2rem"><span>{{$route.params.product_type}}s</span></div>
    <router-link :to="`/brands/${$route.params.brand}`"><button style="width:9rem;height:2rem;font-size:1.2rem;">Back <b-icon-arrow-left></b-icon-arrow-left></button></router-link>
    <div v-if="products.length>0" class="content">      

      <div v-for="product in filterProducts" :key="product.id" >
        <div class="item">
                         <span >{{product.name}}</span>
            <span>Price: {{product.price}}$</span>
             <h6> Brand - {{product.brand}} </h6>
             <div class="btnGroup" style="display:flex">
            <button >Add to <b-icon-bag-fill></b-icon-bag-fill></button>
            <router-link :to="`/brands/${$route.params.brand}/${$route.params.product_type}/${product.id}`"><button style="width:6rem;height:2rem;font-size:1.2rem;">View <b-icon-eye-fill></b-icon-eye-fill></button></router-link>
            </div>

        </div>
      </div>
      <!-- <router-link to="/brands">Back</router-link> -->
    </div>
    <div v-else>
      <h4>Loading products...<b-spinner label="Spinning"></b-spinner></h4>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      products: [],
      search:""
    };
  },
  computed:{
        ...mapGetters(["selectProductType"]),
        filterProducts:function(){
        return  this.products.filter((product)=>
          product.name.toLowerCase().match(this.search.toLowerCase()))
        }
        
    },
    created(){
        
        this.products=this.selectProductType(this.$route.params.product_type,this.$route.params.brand)
        
        
    }
};
</script>
<style scoped>
.products {
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

  flex-direction: column;
  text-transform: capitalize;
  font-weight: 500;
}
.content {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align:center;
  
}
.item {
  width: 23vw;
  height:18vh ;
  background: rgba(255, 255, 255, 0.4); 
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  flex-direction: column;  
  border: 3px solid black;
  margin: 1rem;
  color:black;
  border-radius: 1rem;
  text-align:center;
  padding:0.5rem;  
  font-weight:600;
  cursor: grab;
  
}
button{
  background: rgba(255, 255, 255, 0.7); 
  border:2px solid black;
  border-radius:1rem;
  width:6rem;
  height:2rem;  
  margin:0.2rem; 
  padding: 1%;
  
  
}
</style>