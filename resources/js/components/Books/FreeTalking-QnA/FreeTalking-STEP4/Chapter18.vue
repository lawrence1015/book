<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQ5BErs7g/1/screen_2x/canva-untitled-MADQ5BErs7g.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Suicide</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Have you ever felt an impulse to kill yourself?
       <ul>
       <li class="mt-2"> If so, when and why?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       Talk about reasons people may have to commit suicide.
     </li>
     <br />
     <li class="mb-2">
       Do you think a man has the right to control his own life, including the decision to end it?
     </li>
     <br />
     <li class="mb-2">
       Is life always better than death in any case?
       <ul>
       <li class="mt-2"> Why or why not?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       Who do you think are the most likely to kill themselves: the young, the middle-aged or the elderly? Why?
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
