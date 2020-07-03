<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGxupGy9c/4/screen_2x/canva-success-text-MADGxupGy9c.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Success</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       What is success?
       <ul>
       <li class="mt-2"> What are five ways a person can be successful?</li>
      </ul>
     </li>
     <br />
     <li class="mb-2">
        Have you achieved any goals you have made for yourself?
        <ul>
        <li class="mt-2"> If so, which ones? If not, why not?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
        How is success generally defined in your country?
        <ul>
        <li class="mt-2"> Name a world renowned successful person from your country. Why is that person so successful?</li>
        <li> What do you think that person must have done to become so successful?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
         Do you believe people must work hard to become successful? Why or why not?
     </li>
     <br />
     <li class="mb-2">
        What type of success do you think you might have in the future?
        <ul>
        <li class="mt-2"> How will you prepare for it?</li>
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
