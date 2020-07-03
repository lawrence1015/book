<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGwEAZsbU/5/screen_2x/canva-closeup-photo-of-person-holding-panasonic-remote-control-in-front-of-turned-on-smart-television-MADGwEAZsbU.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">TV&amp;Movies</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       What programs do you usually watch on TV?
     </li>
     <br />
     <li class="mb-2">
       How many hours a day do you watch TV?
     </li>
     <br />
     <li class="mb-2">
       Who has the most power over channel selection in your home?
     </li>
     <br />
     <li class="mb-2">
       Do you change the channel when commercials come on?
     </li>
     <br />
     <li class="mb-2">
        What kind of movies do you like?
       <ul>
       <li class="mt-2"> Do you like American films?</li>
       <li> What kind?</li>
       <li> Science fiction?</li>
       <li> Comedies?</li>
       <li> Dramas?</li>
       <li> Horror?</li>
       <li> Crime?</li>
       <li> Adventure?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       What do you think about Korean movies?
     </li>
     <br />
     <li class="mb-2">
       What was the most impressive movie you’ve ever seen?
     </li>
     <br />
     <li class="mb-2">
       Who’s your favorite movie star?
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
