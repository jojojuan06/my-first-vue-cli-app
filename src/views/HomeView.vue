<template>
  <div class="home">
    <img id="logo" alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Groupomania"/>
  </div>
</template>

<script>
// @ is an alias to /src ,importer pour l'utiliser dans le template
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {  //rajouter le composant Helloworld pour l'appelé par la suite
    HelloWorld  
  }
}
</script>
