<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGxw2fKq8/4/screen_2x/canva-seated-woman-typing-on-apple-mighty-keyboard-in-front-of-turned-on-silver-imac-MADGxw2fKq8.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Jobs</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Would you want to be a businessman or an employee?
     </li>
     <br />
     <li class="mb-2">
       Are you satisfied with your job?
     </li>
     <br />
     <li class="mb-2">
       Would you want your children to do your job?
     </li>
     <br />
     <li class="mb-2">
       What are your priorities in getting a job?
     </li>
     <br />
     <li class="mb-2">
       Would you take a night job if it were better paid?
     </li>
     <br />
     <li class="mb-2">
       When do you feel like giving up your job?
     </li>
     <br />
     <li class="mb-2">
       Do you have any idea of starting a new business?
     </li>
     <br />
     <li class="mb-2">
       What are the obstacles to starting your own business?
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
