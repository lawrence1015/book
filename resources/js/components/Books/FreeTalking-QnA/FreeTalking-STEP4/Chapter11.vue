<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/BLS4Y/MADyRPBLS4Y/1/s2/canva-man-holding-newspaper-MADyRPBLS4Y.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Books, Newspapers&amp;Magazines</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Do you prefer a morning paper or an evening one? Why?
     </li>
     <br />
     <li class="mb-2">
       Which section do you read first in a newspaper?
     </li>
     <br />
     <li class="mb-2">
       What is the most important reason you read a newspaper?
     </li>
     <br />
     <li class="mb-2">
       What is the most important reason you read magazines?
     </li>
     <br />
     <li class="mb-2">
       Do you believe everything you read in the newspaper? In a magazine?
     </li>
     <br />
     <li class="mb-2">
       Do you trust what the ads say?
     </li>
     <br />
     <li class="mb-2">
       How often do you visit a bookstore?
     </li>
     <br />
     <li class="mb-2">
       Talk about the most impressive books you have ever read.
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

<style lang="css">

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

.format{
  margin-top: 0px;
}

</style>
