<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/fsK3Q/MADyQ7fsK3Q/1/s2/canva-people-playing-poker-MADyQ7fsK3Q.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Gambling</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
        Why do people gamble? Give five reasons.
     </li>
     <br />
     <li class="mb-2">
        When did you gamble last?
        <ul>
        <li class="mt-2"> What game did you play? Where?</li>
        <li> Did you win or lose the last time you gambled? </li>
        <li> What did you win or lose?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
          Have you ever gambled and lost a lot of money?
     </li>
     <br />
     <li class="mb-2">
         Is gambling legal in your country?
        <ul>
        <li class="mt-2"> What kind, if any?</li>
        <li> If not, why isn't it legal?</li>
        <li> Do you think that gambling should be legal or illegal? Why?</li>
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
