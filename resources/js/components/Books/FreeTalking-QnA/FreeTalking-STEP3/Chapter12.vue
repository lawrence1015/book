<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/IIJsA/MADyQ9IIJsA/1/s2/canva-eggs-in-tray-on-white-surface-MADyQ9IIJsA.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Prejudice and Discrimination</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
        What is prejudice?
        <ul>
        <li class="mt-2"> What is discrimination?</li>
        <li> Why do you think prejudice and discrimination exist?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
        Do you think there is prejudice or discrimination where you live now?
        <ul>
        <li class="mt-2"> Give an example to support your answer.</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
          Have you ever experienced prejudice or discrimination? With whom?
          <ul>
            <li class="mt-2">Had you done anything to make that person angry?</li>
            <li>
              Explain. (If you have never experienced prejudice or discrimination, why do you think you have never been exposed to it?)
            </li>
          </ul>
     </li>
     <br />
     <li class="mb-2">
         How can people change the world in order to eliminate prejudice and discrimination?
     </li>
      <br />
     <li class="mb-2">
        Is discrimination ever necessary?
        <ul>
        <li class="mt-2">Do you think it is right to tell a short man that he cannot play basketball?</li>
        <li>What if he plays as well as the tall players? (Think of other similar examples.)</li>
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
