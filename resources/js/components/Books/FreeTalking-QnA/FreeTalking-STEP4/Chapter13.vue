<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGwFheKFE/5/screen_2x/canva-people-wearing-backpacks-MADGwFheKFE.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Education</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Do you think a college degree is a must?
     </li>
     <br />
     <li class="mb-2">
       Do you think a college degree helps your child get a better job?
     </li>
     <br />
     <li class="mb-2">
       Did you have a part-time job during your school days?
     </li>
     <br />
     <li class="mb-2">
       Would you allow your children to have a part-time job?
       <ul>
       <li class="mt-2"> Would you encourage it?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       What was/is your favorite subject in school?
     </li>
     <br />
     <li class="mb-2">
       Would you teach your young children English?
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
