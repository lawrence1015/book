<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGx44SSKM/4/screen_2x/canva-six-20-pound-euro-MADGx44SSKM.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Money</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       How does money make you happy?
     </li>
     <br />
     <li class="mb-2">
       How powerful do you think money is?
     </li>
     <br />
     <li class="mb-2">
       Do you think money can buy love?
     </li>
     <br />
     <li class="mb-2">
       Who takes care of the money in your family?
       <ul>
      <li class="mt-2"> You or your spouse?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       How many credit cards do you have?
     </li>
     <br />
     <li class="mb-2">
       Do you think a credit card is convenient?
       <ul>
      <li class="mt-2"> Or does it just encourage extra spending?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       Have you ever gotten a loan from a bank?
       <ul>
      <li class="mt-2"> Was it hard or easy?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       Would you take a friend to court if you couldn’t get your money back?
     </li>
     <br />
     <li class="mb-2">
       Have you ever lost a large amount of cash?
       <ul>
      <li class="mt-2"> Did you get it back?</li>
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
