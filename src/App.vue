<!-- partie html de vue -->
<template>
  <nav>
    <router-link to="/">Accueil</router-link> |
    <router-link to="/about">A propos</router-link> |
    <router-link v-bind:to="{ name: 'Product', params: { name: 'Skate' }}">Product 1</router-link> |
    <router-link v-bind:to="{ name: 'Product', params: { name: 'trotinette' }}">Product 2</router-link> |
    <button v-on:click="showProduct('Roller');">Produit 3</button>
    
  </nav>
  <router-view/>  <!-- afficher la route -->
</template>
<!--  <script></script> /script logique de vue -->


<script>
export default {
  name: 'App',
  methods: {
    showProduct: function (name) {
        this.$router.push({name: 'Product',params: {name:name}});
    }
  },
  component:{   
  }
}
</script>
<!--style css de vue (du projet) ou scoped juste a cette vue -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#logo {
  width: 200px;
}

nav {
  padding: 30px;
}

nav a {
    color: #999;
    text-decoration:none;
}
nav a .router-link-exact-active {
      color: #42b983;
      font-weight: bold;
}
.router-link-active {
  font-weight:bold;
  color:blueviolet;
}
  
</style>
