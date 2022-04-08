<template>
  <div class="hello">
    <h1>{{ msg }}</h1> <!--variabiliser par un   props -->
    <p>{{abonnes}} {{text}}</p>
    <v-btn
      flat
      color="secondary"
    >
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: { // attribut paseez sur le composant et exploter a l'interieur de se composant
    msg: String  //change le contenue de {msg} en string 
  },
  data: function(){
    return {
      abonnes : 0,
      text : "personnes se sont abonnées"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

p{
  font-size: 18px;
}
</style>
