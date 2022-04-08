<!-- partie html de vue -->
<template>
  <nav>
    <router-link to="/">Accueil</router-link> |
    <router-link to="/about">A propos</router-link>
  </nav>
  <router-view/>  <!-- afficher la route -->
</template>
<!--  <script></script> /script logique de vue -->





<!--style css de vue (du projet) ou scoped juste a cette vue -->
<style lang="scss">
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

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
