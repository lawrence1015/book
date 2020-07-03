<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/portrait-happy-bearded-man-celebrating-success_171337-4895.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">What would you Do If...</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       If you won $100,000,000, what would you buy? Name at least three things.
     </li>
     <br />
     <li class="mb-2">
        If you were allowed to be the leader of any country in the world, which country would you choose? Why?
        <ul>
        <li class="mt-2"> What changes would you make in that country?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
         If you had been an animal instead of a human being, which animal do you think you would have been? Why?
     </li>
     <br />
     <li class="mb-2">
          During lunch in a local restaurant, you overhear someone admit to killing another person. You turn around to see who it is, and you know that person.
        <ul>
        <li class="mt-2"> Would you notify the police? Why or why not?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        Have you ever wished you were born in another place or time?
        <ul>
        <li class="mt-2"> Where and when did you wish you had been born? why?</li>
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
