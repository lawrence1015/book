<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGyVcA5dY/4/screen_2x/canva-man-singing-on-stage-with-stage-lights-near-crowd-MADGyVcA5dY.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Favorite Things</h1>
      </v-layout>
    </v-img>


          <h2 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h2>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       What's your favorite kind of music?
       <ul>
       <li class="mt-2"> Who's your favorite singer?</li>
       <li> Do you think that person is going to be popular in ten years?</li>
       <li> Why or Why not?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       What are some of your favorite hobbies?
       <ul>
       <li class="mt-2"> Which ones are you planning to continue doing in the future?</li>
       <li> Why?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       What movies have you seen recently?
       <ul>
       <li class="mt-2"> Talk about one of them.</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       What kinds of ethnic foods have you eaten?
       <ul>
       <li class="mt-2"> Which have you liked? Which haven't you liked?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       Have you gone to any restaurants this month?
       <ul>
       <li class="mt-2"> Which ones?</li>
       <li> What's your favorite food?</li>
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

h2{
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
