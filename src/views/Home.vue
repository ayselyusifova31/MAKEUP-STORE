<template>
  <div class="home">
    <br/>
    <Carousel />
    <br/>
    <br/>
  <div class="mybtn">
    <router-link to="/brands"><b-button block variant="info" class="btn">Our Brands</b-button></router-link>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel'

export default {
  name: 'Home',
  components: {
    Carousel
  },
  
}
</script>
<style scoped>
.home{
  padding: 0;  
  width: 100%;
   min-height: 90vh;
  height:100%;
  background-image: url("../assets/bg4.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
}
.mybtn{
  width:20%;
  color: white;
}
.btn{
  color: white;
}
</style>