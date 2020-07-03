<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGvmGpZ2I/7/screen_2x/canva-fashionable-woman-MADGvmGpZ2I.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Fashion</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Why does fashion change so quickly?
     </li>
     <br />
     <li class="mb-2">
        Why does fashion go in cycles?
        <ul>
        <li class="mt-2"> Why do clothes go out of fashion and then come back in again?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
        Do you like to wear the same as your friends?
        <ul>
        <li class="mt-2"> Why? Why not?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
          Do you wear ‘brand’ clothes?
        <ul>
        <li class="mt-2"> Why? Why not?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        Can you tell someone’s personality by their clothes?
        <ul>
        <li class="mt-2"> Support your opinion. Give some examples.</li>
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
