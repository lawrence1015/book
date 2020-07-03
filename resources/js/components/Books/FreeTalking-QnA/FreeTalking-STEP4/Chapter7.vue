<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGx8YRF7Y/4/screen_2x/canva-clear-glass-cup-filled-with-orange-juice-MADGx8YRF7Y.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Health</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Do you think you are healthy?
     </li>
     <br />
     <li class="mb-2">
       Do you eat three meals a day?
     </li>
     <br />
     <li class="mb-2">
       Do you take vitamins every day?
       <ul>
       <li class="mt-2"> Do you think they help your health?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       Do you exercise every day?
     </li>
     <br />
     <li class="mb-2">
       Have you ever been hospitalized? Why?
     </li>
     <br />
     <li class="mb-2">
       When you have a cold, do you see a doctor right away or just rest at home?
     </li>
     <br />
     <li class="mb-2">
       Do you believe what doctors tell you?
     </li>
     <br />
     <li class="mb-2">
       What diseases are you the most afraid of?
     </li>
     <br />
     <li class="mb-2">
       What do you do when you’re under stress?
     </li>
     <br />
     <li class="mb-2">
       Have you ever suffered from insomnia? Did you ever take sleeping pills?
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
