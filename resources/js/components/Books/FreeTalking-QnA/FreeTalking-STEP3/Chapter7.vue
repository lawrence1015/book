<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQ5nQ9bkc/1/screen_2x/canva-two-gossiping-girls-MADQ5nQ9bkc.jpg" style="max-width: 100%; display:block; height: auto;" >

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
      >
        <h1 style="background-color: rgba(13, 13, 13, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Gossip</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
        When was the last time you heard gossip from a friend or family member?
     </li>
     <br />
     <li class="mb-2">
        What gossip have you heard on the news recently?
     </li>
     <br />
     <li class="mb-2">
        Have you ever spread gossip?
        <ul>
        <li class="mt-2"> If yes, what did you say?</li>
        <li> If not, why didn't you?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
        Who gossips more, men or women?
        <ul>
        <li class="mt-2"> Why do you think that?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
       Do you think most gossip is true or false? Why?
       <ul>
       <li class="mt-2"> Do you think that it is right or wrong to gossip? Why?</li>
       </ul>
     </li>
   </ol>



</div>


       </v-layout>
     </v-container>
  </v-layout>
  </v-container>
</div>



</template>



<script>
export default {

  props: ['fontSize'],



  data(){

    return{


    }

  },


  beforeMount(){


  },

  methods:{


  },

  watch:{

    fontSize(current, old){

      console.log(current, 'current')
      console.log(old, 'previous')


    }
  }
}
</script>

<style scoped lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}

li{


}

body{

  font-size: 16px;
}

ul {
  list-style-type: none;
}

ul > li:before {
  content: "–"; /* en dash */
  position: absolute;
  margin-left: -1.1em;
}

.format{
  margin-top: 0px;
}

</style>
