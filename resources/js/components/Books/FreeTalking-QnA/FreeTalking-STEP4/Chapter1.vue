<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGv3B2vds/6/screen_2x/canva-four-women-sitting-on-benches-outside-building-MADGv3B2vds.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Life style</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       What types of social activities do you engage in?<br />
     </li>
     <br />
     <li class="mb-2">
       How do you spend your free time?
       <ul>
      <li class="mt-2">Do you prefer spending it alone or with friends?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       What would you think about become a priest, monk, or nun?
     </li>
     <br />
     <li class="mb-2">
       Do you think the quality of your life is improving or getting worse?
     </li>
     <br />
     <li class="mb-2">
       What musical instruments can you play?
     </li>
     <br />
     <li class="mb-2">
       Have you ever done any volunteer work?
     </li>
     <br />
     <li class="mb-2">
       Are you usually on time for appointments?
     </li>
     <br />
     <li class="mb-2">
       How do you relieve your stress?
     </li>
     <br />
     <li class="mb-2">
       Do you think you are happy? Why or why not?
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
