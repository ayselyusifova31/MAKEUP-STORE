<template>
    <div class=carousel>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
  
    <b-carousel-slide
      caption="WELCOME TO OUR MAKEUP STORE"
      img-src="https://images.unsplash.com/photo-1562887245-f2d5024f6134?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&h=500&q=100"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="ALL BRANDS ARE HERE"
      img-src="https://images.unsplash.com/photo-1583784561126-c18e59057f3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&h=500&q=100"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="YOU DESERVE THE BEST"
      img-src="https://images.unsplash.com/photo-1571646034647-52e6ea84b28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&h=500&q=100"
    ></b-carousel-slide>
  </b-carousel>
  
</div>
</template>

<script>
export default {
    
}
</script>


<style scoped>
.carousel{
    display: flex;
    justify-content: center;
    width: 80%;
    color:red;
    
}
</style>