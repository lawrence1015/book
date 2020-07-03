<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQ5HEevCc/1/screen_2x/canva-untitled-MADQ5HEevCc.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Drugs and Medicine</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       What is the difference between the word drug and the word medicine?
     </li>
     <br />
     <li class="mb-2">
        What are five popular drugs sold on the streets that doctors are not permitted to prescribe?
     </li>
     <br />
     <li class="mb-2">
        What happens to people in your country who are caught using illegal drugs?
        <ul>
        <li class="mt-2"> Do they get put in a hospital, in a rehabilitation center, or in jail? Explain.</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
         When people in your country are ill, do they use herbs such as ginseng, garlic, or ginger root?
        <ul>
        <li class="mt-2"> If so, could you explain how they work?</li>
        <li> If not, do you know why herbs aren't used?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
        Do you think alcohol is a drug? Why or why not?
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
