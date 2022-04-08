<template>
  <div class="hello">
    <h1>{{ msg }}</h1> <!--variabiliser par un   props -->
    <p v-if="abonnes == 0">{{textNonAbonnes}}</p>
    <p v-else-if="abonnes == 1">{{textOneAbonnes}}</p>
    <p v-else>{{abonnes}} {{textAbonnes}}</p>
    <button v-on:click="subscribe()">S'abonner!</button>
    <!-- cibler v:bind:(key) pour savoir sur quel element indexer , index du tableau pour retourner tour les tableaux -->
    <!-- sur base de donner on aurait pu faire comment.id recup chaque tableaux utilisateur grace a sont id:1 ou 2 ect.. ex-->
    <div class="comment" v-for="(comment,index) in comments" v-bind:key="index">
      <h3>{{comment.nom}}</h3>
      <p>{{comment.commentaire}}</p>
      <!-- rajout d'une div pour pas etre au meme niveau que l for-->
    <div v-if="comment.note > 1">
    <!--utiliser  la boucle for pour boucle jusqua attendre se nombre et  i en key (clé) pour boucler-->
        <span v-for="i in comment.note" v-bind:key="i">⭐</span>
    </div>
        <span v-else>👎⭐👎</span>
    </div>
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
      textAbonnes : "personnes se sont abonnées 😀",
      textNonAbonnes : "personnes n'est abonnée pour le moment 😥",
      textOneAbonnes : "Une personne abonné c'est un bon début félicitation ✔️",
      comments: [
        {
            nom : 'JOnh',
            commentaire: "c'est de la bomb !",
            note : 2,
        },
        {
            nom : 'Toto',
            commentaire: "J'adore se que tu fait continue",
            note : 5,
        },
        {
            nom : 'Marc',
            commentaire: "C'est du caca",
            note : 1,
        }
      ]
    }
  },
  methods: {
    subscribe: function () {
    this.abonnes++; 
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
