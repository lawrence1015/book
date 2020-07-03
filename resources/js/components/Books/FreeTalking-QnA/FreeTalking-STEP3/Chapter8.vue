<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/RKUBw/MADwT_RKUBw/1/s2/canva-photo-of-man-laying-on-sidewalk-MADwT_RKUBw.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">The Homeless and Welfare</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
        Give some reasons why people become homeless.
     </li>
     <br />
     <li class="mb-2">
        Have you ever seen any homeless people on the street?
        <ul>
        <li class="mt-2"> What do you do when you see them?</li>
        <li> Have you ever given a homeless person anything? What? Why?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
         What do you think is the best way to help a homeless person? Give an example.
     </li>
     <br />
     <li class="mb-2">
         Are there any homeless people in your country?
        <ul>
        <li class="mt-2"> What does the government do to help them?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
       If you were the president or leader of your country, how would you end poverty?
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
