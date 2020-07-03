<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGyBFfgq4/4/screen_2x/canva-four-person-standing-on-cliff-in-front-of-sun-MADGyBFfgq4.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Friends</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Why do people need to make friends?
     </li>
     <br />
     <li class="mb-2">
       Is it okay for your spouse to have friends of the opposite sex?
     </li>
     <br />
     <li class="mb-2">
       How did you meet your best friend?
     </li>
     <br />
     <li class="mb-2">
       What usually causes trouble between friends?
     </li>
     <br />
     <li class="mb-2">
       Do you believe the saying, “Out of sight, out of mind”?
     </li>
     <br />
     <li class="mb-2">
       What’s the difference between having male and female friends?
     </li>
     <br />
     <li class="mb-2">
       What’s the difference between the friends you made in elementary, middle and high school, and college?
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
