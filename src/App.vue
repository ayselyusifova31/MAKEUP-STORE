<template>
  <div id="app">
    
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <img src="./assets/makeup.png" style="object-fit:contain;width:10%" />
        <b-navbar-brand>MakeUp Store</b-navbar-brand>

        <b-navbar-nav class="menu-items">
          <router-link to="/" class="menu-item">Home</router-link>
          <router-link to="/about" class="menu-item">About</router-link>
          <router-link to="/brands" class="menu-item">Our Brands</router-link>
          <router-link to="/contacts" class="menu-item">Contacts</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto search">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search" ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          
        </b-navbar-nav>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>
<script>

import { mapActions } from "vuex";

export default {
  data(){
    return{
     
    }
  },
  computed:{
    
  },
  methods:{
        ...mapActions(["fetchBrands"]),
    },
    created(){
      this.fetchBrands()
        
        
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

#nav {
  width: 100%;
  height: 20%;
}

#nav a {
  font-weight: bold;
  color: white;
  background-color: #17a2b8;
  margin-bottom: 1px;
}
#nav a:hover {
  font-weight: bold;
  background-color: white;
  color: #17a2b8;
  margin-bottom: 1px;
}

#nav a.router-link-exact-active {
  color: black;
}
.menu-item {
  padding: 5px 10px;
}

</style>
