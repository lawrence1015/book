<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGyM7au4g/4/screen_2x/canva-toaster-bread%2C-scrambled-eggs%2C-grilled-tomato-and-sausage-MADGyM7au4g.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Meals</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Do you usually have breakfast?
     </li>
     <br />
     <li class="mb-2">
       Who prepares breakfast in your family?
     </li>
     <br />
     <li class="mb-2">
       What do you think about having a modest Western-style breakfast?
     </li>
     <br />
     <li class="mb-2">
       What do you think about carrying a lunch box to work?
     </li>
     <br />
     <li class="mb-2">
       Do you usually volunteer to pay for your fellow workers’ lunches?
     </li>
     <br />
     <li class="mb-2">
       What do you think about Dutch treat?
     </li>
     <br />
     <li class="mb-2">
       Do you think it’s good idea to take a nap after lunch?
     </li>
     <br />
     <li class="mb-2">
       Are you worried about pesticides when you eat fruit?
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
