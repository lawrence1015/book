<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/ERxvk/MADyRJERxvk/1/s2/canva-people-cheering-MADyRJERxvk.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Sports</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Why are people crazy about professional sports?
     </li>
     <br />
     <li class="mb-2">
       What do you think is the difference between amateur and professional sports?
     </li>
     <br />
     <li class="mb-2">
       Which kind of sport do you prefer, amateur or professional?
     </li>
     <br />
     <li class="mb-2">
       Which do you prefer, playing a sport, watching it on TV, or watching it “live”?
     </li>
     <br />
     <li class="mb-2">
       What makes professional players do their best?
     </li>
     <br />
     <li class="mb-2">
       Do you think it’s okay for your children to become athletes?
       <ul>
       <li class="mt-2"> What kind of sport would you recommend for your children?</li>
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
