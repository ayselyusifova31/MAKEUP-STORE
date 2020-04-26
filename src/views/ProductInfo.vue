<template>
<div class="product">
    <router-link :to="`/brands/${$route.params.brand}/${$route.params.product_type}`"><button style="width:9rem;height:2rem;font-size:1.2rem;">Back <b-icon-arrow-left></b-icon-arrow-left></button></router-link>
<div v-if="product" class="content">      

           
  <b-card
    :title="`${product.name} ${product.price}$`"
    :img-src="`${product.image_link}`"    
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
        <a :href="`${product.product_link}`" target="_blank">Product Link</a>
        <br/>
        <a :href="`${product.website_link}`" target="_blank">Website Link</a>
        <br/>
      <p>{{product.description}}</p>
      
      <table v-if="`${product.product_colors}`">
          <tr>
              <td>Colours:</td>
              <td  v-for="(item,index) in product.product_colors" :key="index" style="display:inline-block">
                  <div :style="`background-color:${item.hex_value};width:20px;height:20px;margin:1px;`">
                      </div>
                      </td>
          </tr>
      </table>
    </b-card-text>

    <button >Add to <b-icon-bag-fill></b-icon-bag-fill></button>
  </b-card>
</div>


<div v-else>
      <h4>Loading product info...<b-spinner label="Spinning"></b-spinner></h4>
    </div>
</div>

</template>
<script>
import { mapGetters } from "vuex";

export default {
    data(){
        return{
            product:null            
        }
    },
    computed:{
        ...mapGetters(["selectId"]),
        
    },
    created(){
        this.product=this.selectId(+this.$route.params.id,this.$route.params.product_type,this.$route.params.brand)
        
    }
    
}
</script>

<style scoped>
.product{
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
  
}
.content{
    width: 100%;
    min-width:20vw;
  min-height: 20vh;
  
  height:100%;
    display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
    margin:1rem;
  flex-direction: column;
}
button{
  background: rgba(255, 255, 255, 0.7); 
  border:2px solid black;
  border-radius:1rem;
  width:7rem;
  height:2rem;  
  margin:auto; 
  color:black;
  
}
</style>